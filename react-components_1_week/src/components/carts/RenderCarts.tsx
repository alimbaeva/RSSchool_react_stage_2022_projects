import React, { FC, useEffect, useRef, useState, useReducer } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Carts from './Carts';
import ModalcardRender from './ModalcardRender';
import { Character } from '../../rickiMartyTypes';
import { CardSort } from 'Types';
import './RenderCarts.css';

interface Value {
  value: string;
}

enum ActionType {
  DATA = 'DATA',
  PAGE = 'PAGE',
  ALLPAGE = 'ALLPAGE',
  CARDSORT = 'CARDSORT',
  RESET = 'RESET',
  LOADING = 'LOADING',
}

interface State {
  data?: [];
  page?: number;
  allPages?: number | null;
  cardSort?: { status: string; gender: string };
  type?: string;
  loading?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function init(state: any) {
  console.log(state);
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

const RenderCarts: FC<Value> = ({ value }: Value) => {
  const [clickCartModal, setClickCartModal] = useState<boolean>(false);
  const [cardData, setСardData] = useState();
  const divPage = useRef<HTMLDivElement | null>(null);

  const { register, handleSubmit } = useForm<CardSort>();

  const [data, dispatch] = useReducer(
    reduser,
    {
      data: [],
      page: 1,
      allPages: null,
      cardSort: { status: '', gender: '' },
      type: '',
      loading: true,
    },
    init
  );

  const onSubmit: SubmitHandler<CardSort> = (data: CardSort) => {
    dispatch({ type: 'CARDSORT', page: 1, cardSort: { status: data.status, gender: data.gender } });
    Array.from(document.querySelectorAll('input')).forEach((input) => (input.value = ''));
  };

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

  const resetAll = () => {
    dispatch({ type: 'RESET', page: 1, cardSort: { status: '', gender: '' } });
  };

  useEffect(() => {
    (async () => {
      // dispatch({ type: 'LOADING', loading: true });
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${data.page}&name=${value}&status=${data.cardSort.status}&gender=${data.cardSort.gender}`
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
  }, [value, data.cardSort, data.page]);

  async function clickParent(event: React.MouseEvent<HTMLElement>) {
    const eventElem = event.target as HTMLElement;
    const cartID_1 = eventElem.parentNode?.parentElement?.parentElement?.getAttribute('id');
    const cartID_2 = eventElem.parentNode?.parentElement?.getAttribute('id');
    const clickCard = cartID_1 ? cartID_1 : cartID_2 ? cartID_2 : '';
    if (clickCard) {
      setClickCartModal(true);
      document.querySelector('.modalCard')?.classList.remove('modalCardNon');
      try {
        const idCard = clickCard;
        const response = await fetch(`https://rickandmortyapi.com/api/character/${idCard}`);
        const cardData = await response.json();
        setСardData(cardData);
      } catch (err) {
        console.log(err);
      }
    }
  }

  const closeModal = () => {
    document.querySelector('.modalCard')?.classList.add('modalCardNon');
    setClickCartModal(false);
  };

  return (
    <div className="container">
      {clickCartModal && (
        <div data-testid="model-page" className="modalCard" onClick={closeModal}>
          {cardData && <ModalcardRender carts={cardData} key={'1'} />}
        </div>
      )}
      <div>
        <form className="sort-card" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="status">
            Status:
            <select data-testid="status" {...register('status')}>
              <option value=""></option>
              <option value="alive">alive</option>
              <option value="dead">dead</option>
              <option value="unknown">unknown</option>
            </select>
          </label>
          <label htmlFor="gender">
            Gender:
            <select data-testid="gender" {...register('gender')}>
              <option value=""></option>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="genderless">Genderless</option>
              <option value="unknown">Unknown</option>
            </select>
          </label>
          <div className="block-form_item">
            <button className="btn-sort" type="submit" value="Submit" data-testid="submit-sort">
              search
            </button>
            <button onClick={resetAll} className="btn-sort" type="reset" data-testid="reset-sort">
              reset
            </button>
          </div>
        </form>
      </div>
      <div data-testid="main-page" className="carts-block" onClick={clickParent}>
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
      <div className="page-numbers">
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
