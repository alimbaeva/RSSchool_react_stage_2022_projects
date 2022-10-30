import React, { FC, useEffect, useRef, useReducer, useContext } from 'react';
import Carts from './Carts';
import { Character } from '../../rickiMartyTypes';
import { UserContext } from '../context/UseContext';
import { ActionType, State } from '../../Types';
import './RenderCarts.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function init(state: any) {
  return { ...state };
}

function reduser(state: State, action: State) {
  switch (action.type) {
    case ActionType.DATA:
      return {
        ...state,
        data: action.data,
      };
    case ActionType.PAGE:
      return {
        ...state,
        page: action.page,
      };
    case ActionType.ALLPAGE:
      return {
        ...state,
        allPages: action.allPages,
      };
    case ActionType.CARDSORT:
      return {
        ...state,
        cardSort: action.cardSort,
      };
    case ActionType.LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case ActionType.RESET:
      return init(action.data);
    default:
      return state;
  }
}

const RenderCarts: FC = () => {
  const { state } = useContext(UserContext);
  const divPage = useRef<HTMLDivElement | null>(null);

  const [data, dispatch] = useReducer(
    reduser,
    {
      data: [],
      page: Number(state.search?.page),
      allPages: null,
      cardSort: {
        name: state.search?.name,
        status: state.search?.status,
        gender: state.search?.gender,
      },
      type: '',
      loading: true,
    },
    init
  );

  const changePageNext = () => {
    const pagenumber = Number(divPage.current?.innerHTML);
    if (pagenumber >= data.allPages) {
      dispatch({ type: 'PAGE', page: 1 });
    } else {
      dispatch({ type: 'PAGE', page: pagenumber + 1 });
    }
  };
  const changePagePrev = () => {
    const pagenumber = Number(divPage.current?.innerHTML);
    if (pagenumber === 1) {
      dispatch({ type: 'PAGE', page: data.allPages });
    } else {
      dispatch({ type: 'PAGE', page: pagenumber - 1 });
    }
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${data.page}&name=${data.cardSort.name}&status=${data.cardSort.status}&gender=${data.cardSort.gender}`
      );
      if (!response.ok) {
        throw new Error(`Unable to load data, status ${response.status}`);
      }
      const datas = await response.json();
      const time = setTimeout(() => {
        dispatch({ type: 'ALLPAGE', allPages: datas.info.pages });
        dispatch({ type: 'DATA', data: datas.results });
        dispatch({ type: 'LOADING', loading: false });
      }, 1500);

      return function cleanTime() {
        clearTimeout(time);
      };
    })();
  }, [data.cardSort, data.page]);

  function clickPages(event: React.MouseEvent<HTMLElement>) {
    const eventElem = event.target as HTMLElement;
    const num = Number(eventElem.textContent);
    dispatch({ type: 'PAGE', page: num });
  }

  return (
    <div className="container">
      <div data-testid="main-page" className="carts-block">
        {data.loading && <h2>Loading...</h2>}
        {data.data.map((cart: Character, id: number) => {
          return <Carts carts={cart} key={id} />;
        })}
      </div>
      <div className="pages">
        <button onClick={changePagePrev}>
          <img src="https://i.ibb.co/tJt3D6p/left-arrow.png" alt="left-arrow" />
        </button>
        <div ref={divPage}> {data.page} </div>
        <button onClick={changePageNext}>
          <img src="https://i.ibb.co/HzP7jjt/arrow-right.png" alt="arrow-right" />
        </button>
      </div>
      <div className="page-numbers" onClick={clickPages}>
        {[...Array(data.allPages).keys()].map((el, id) => {
          return (
            <p id="id" key={id}>
              {el + 1}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default RenderCarts;
