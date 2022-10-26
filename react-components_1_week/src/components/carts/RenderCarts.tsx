import React, { FC, useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Carts from './Carts';
import ModalcardRender from './ModalcardRender';
import { Character } from '../../rickiMartyTypes';
import { CardSort } from 'Types';
import './RenderCarts.css';

interface Value {
  value: string;
}

const RenderCarts: FC<Value> = ({ value }: Value) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState([]);
  const [clickCartModal, setClickCartModal] = useState<boolean>(false);
  const [cardData, setСardData] = useState();
  const [cardSort, setСardSort] = useState({ status: '', gender: '' });
  const [page, setPage] = useState<number>(1);
  const divPage = useRef<HTMLDivElement | null>(null);

  const { register, handleSubmit } = useForm<CardSort>();

  const onSubmit: SubmitHandler<CardSort> = (data: CardSort) => {
    setСardSort({
      ...{
        status: data.status,
        gender: data.gender,
      },
    });
    Array.from(document.querySelectorAll('input')).forEach((input) => (input.value = ''));
  };

  const changePageNext = () => {
    console.log(divPage.current?.innerHTML);
    if (Number(divPage.current?.innerHTML) >= 42) {
      setPage(1);
    } else {
      setPage(Number(divPage.current?.innerHTML) + 1);
    }
    console.log(page);
  };
  const changePagePrev = () => {
    console.log(divPage.current?.innerHTML);
    if (Number(divPage.current?.innerHTML) === 1) {
      setPage(42);
    } else {
      setPage(Number(divPage.current?.innerHTML) - 1);
    }
    console.log(page);
  };

  const resetAll = () => {
    setPage(1);
    setСardSort({ status: '', gender: '' });
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${value}&status=${cardSort.status}&gender=${cardSort.gender}`
      );
      if (!response.ok) {
        throw new Error(`Unable to load data, status ${response.status}`);
      }
      const datas = await response.json();
      const time = setTimeout(() => {
        setLoading(false);
        setData(datas.results);
      }, 1500);

      return function cleanTime() {
        clearTimeout(time);
      };
    })();
  }, [value, cardSort, page]);

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
        {loading && <h2>Loading...</h2>}
        {data.map((cart: Character, id: number) => {
          return <Carts carts={cart} key={id} />;
        })}
      </div>
      <div className="pages">
        <button onClick={changePagePrev}>
          <img src="https://i.ibb.co/tJt3D6p/left-arrow.png" alt="left-arrow" />
        </button>
        <div ref={divPage}> {page} </div>
        <button onClick={changePageNext}>
          <img src="https://i.ibb.co/HzP7jjt/arrow-right.png" alt="arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default RenderCarts;
