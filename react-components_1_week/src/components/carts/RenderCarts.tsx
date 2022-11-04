import React, { FC, useEffect, useRef, useState } from 'react';
import Carts from './Carts';
import { Character } from '../../rickiMartyTypes';
import { searchState, useAppSelector } from 'components/redux/slice';
import './RenderCarts.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCardsState, getData } from './redux/slice';
import { AppDispatch } from 'components/redux';

export type Search = {
  page: number;
  name: string | undefined;
  status: string | undefined;
  gender: string | undefined;
};

const RenderCarts: FC = () => {
  const { dataCards, loading, error, allPages } = useSelector(getCardsState);
  const dispatch2 = useDispatch<AppDispatch>();
  const searchStateData = useAppSelector(searchState);
  const divPage = useRef<HTMLDivElement | null>(null);
  const [dataForSearchCard, setDataForSearchCard] = useState<Search>({
    page: Number(searchStateData.search?.page),
    name: searchStateData.search?.name,
    status: searchStateData.search?.status,
    gender: searchStateData.search?.gender,
  });

  useEffect(() => {
    dispatch2(getData(dataForSearchCard));
  }, [dispatch2, dataForSearchCard]);

  const changePageNext = () => {
    const pagenumber = Number(divPage.current?.innerHTML);
    if (allPages) {
      if (pagenumber >= allPages) {
        setDataForSearchCard({ ...dataForSearchCard, page: 1 });
      } else {
        setDataForSearchCard({ ...dataForSearchCard, page: pagenumber + 1 });
      }
    }
  };
  const changePagePrev = () => {
    const pagenumber = Number(divPage.current?.innerHTML);
    if (pagenumber === 1) {
      setDataForSearchCard({ ...dataForSearchCard, page: allPages ? allPages : 1 });
    } else {
      setDataForSearchCard({ ...dataForSearchCard, page: pagenumber - 1 });
    }
  };

  function clickPages(event: React.MouseEvent<HTMLElement>) {
    const eventElem = event.target as HTMLElement;
    const num = Number(eventElem.textContent);
    setDataForSearchCard({ ...dataForSearchCard, page: num });
  }

  return (
    <div className="container">
      <div data-testid="main-page" className="carts-block">
        {loading && <h2>Loading...</h2>}
        {error && <h2>According to your request, nothing was found!!!</h2>}
        {dataCards.map((cart: Character, id: number) => {
          return <Carts carts={cart} key={id} />;
        })}
      </div>
      <div className="pages">
        <button onClick={changePagePrev}>
          <img src="https://i.ibb.co/tJt3D6p/left-arrow.png" alt="left-arrow" />
        </button>
        <div ref={divPage}> {dataForSearchCard.page} </div>
        <button onClick={changePageNext}>
          <img src="https://i.ibb.co/HzP7jjt/arrow-right.png" alt="arrow-right" />
        </button>
      </div>
      <div className="page-numbers" onClick={clickPages}>
        {[...Array(allPages).keys()].map((el, id) => {
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
