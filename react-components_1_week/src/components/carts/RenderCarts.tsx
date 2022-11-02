import React, { FC, useEffect, useRef, useReducer, useState } from 'react';
import Carts from './Carts';
import { Character } from '../../rickiMartyTypes';
import { ActionType, State } from '../../Types';
import { searchState, useAppSelector } from 'components/redux/slice';
import './RenderCarts.css';

export type Search = {
  page: number;
  name: string;
  status: string;
  gender: string;
};
export interface SearchType {
  search?: Search;
}

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
  // const { state } = useContext(UserContext);
  const searchStateData = useAppSelector(searchState);
  const divPage = useRef<HTMLDivElement | null>(null);
  const [errSearch, setErrSearch] = useState<boolean>(false);

  const [data, dispatch] = useReducer(
    reduser,
    {
      data: [],
      page: Number(searchStateData.search?.page),
      allPages: null,
      cardSort: {
        name: searchStateData.search?.name,
        status: searchStateData.search?.status,
        gender: searchStateData.search?.gender,
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

  console.log('searchStateData==', searchStateData.search?.gender);
  console.log('data cards==', data);

  useEffect(() => {
    (async () => {
      setErrSearch(false);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${data.page}&name=${data.cardSort.name}&status=${data.cardSort.status}&gender=${data.cardSort.gender}`
      );
      if (!response.ok) {
        setErrSearch(true);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [divPage, data.page]);

  function clickPages(event: React.MouseEvent<HTMLElement>) {
    const eventElem = event.target as HTMLElement;
    const num = Number(eventElem.textContent);
    dispatch({ type: 'PAGE', page: num });
  }

  return (
    <div className="container">
      <div data-testid="main-page" className="carts-block">
        {data.loading && <h2>Loading...</h2>}
        {errSearch && <h2>According to your request, nothing was found!!!</h2>}
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
