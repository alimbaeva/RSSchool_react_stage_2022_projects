import React, { FC, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Carts from './Carts';
import ModalcardRender from './ModalcardRender';
import { Character } from '../../rickiMartyTypes';
import { CardSort } from 'Types';

interface Value {
  value: string;
}

const RenderCarts: FC<Value> = ({ value }: Value) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState([]);
  const [clickCartModal, setClickCartModal] = useState<boolean>(false);
  const [cardData, setСardData] = useState();

  const { register, handleSubmit } = useForm<CardSort>();

  const onSubmit: SubmitHandler<CardSort> = (data: CardSort) => {
    const sortCard = {
      resources: data.resources,
      gender: data.gender,
      numbers: data.numbers,
    };
    console.log(sortCard);
    // Array.from(document.querySelectorAll('input')).forEach((input) => (input.value = ''));
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${value}`);
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
  }, [value]);

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="resources">
            Resources:
            <select data-testid="resources" {...register('resources')}>
              <option value="character">character</option>
              <option value="location">location</option>
              <option value="episode">episode</option>
            </select>
          </label>
          <label htmlFor="gender">
            Gender:
            <select data-testid="gender" {...register('gender')}>
              <option value="null"></option>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="genderless">Genderless</option>
              <option value="unknown">Unknown</option>
            </select>
          </label>
          <label htmlFor="numbers">
            By card numbers:
            <input
              placeholder="numbers: 1, 2, 8"
              type="text"
              data-testid="numbers"
              {...register('numbers')}
            />
          </label>
          <div className="block-form_item">
            <button className="btn-sort" type="submit" value="Submit" data-testid="submit-sort">
              submit
            </button>
            <button className="btn-sort" type="reset" data-testid="reset-sort">
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
    </div>
  );
};

export default RenderCarts;
