import React, { FC, useEffect, useState } from 'react';
import Carts from './Carts';
import ModalcardRender from './ModalcardRender';
import { Character } from '../../rickiMartyTypes';

interface Value {
  value: string;
}

const RenderCarts: FC<Value> = ({ value }: Value) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [clickCartModal, setClickCartModal] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const [cardData, setСardData] = useState();

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
