import Episods from 'components/carts/Episods';
import React, { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Character } from 'rickiMartyTypes';
import './style/IdCard.css';

export type CartType = {
  status: string;
  name: string;
  created: string;
  id: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  location: {
    name: string;
  };
  image: string;
};

const IdCard: FC = () => {
  const { id } = useParams();
  const [cart, setCart] = useState<Character | null>(null);
  const [episods, setEpisods] = useState<CartType[]>([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      if (!res.ok) {
        console.log('данных нету');
      }

      const data = await res.clone().json();
      setCart(data);
      document.title = `${data.name}/${id}`;
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  useEffect(() => {
    (async () => {
      const resEpisod = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
      if (!resEpisod.ok) {
        console.log('данных нету');
      }
      const dataEp = await resEpisod.clone().json();
      const episodes = await dataEp.characters;

      const array = episodes.map((item: RequestInfo | URL) => {
        return fetch(item)
          .then(function (response) {
            return response.json();
          })
          .catch(alert);
      });

      Promise.all(array).then((el) => {
        setEpisods(el);
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (cart) {
    return (
      <div className="container">
        <Link className="back" to={'/'}>
          Back
        </Link>
        <div className="cartid-block">
          <div className="cartid">
            <img src={cart.image} alt={cart.name} />
          </div>
          <div className="cartid__text">
            <h3>{cart.name}</h3>
            <p>Gender: {cart.gender}</p>
            <div className="cartid__data">
              <h5>Number Card: {cart.id} </h5>
              <h5>Species: {cart.species} </h5>
              <h5>Location: {cart.location.name}</h5>
              <h5>Status: {cart.status}</h5>
              <h5>Type: {cart.type}</h5>
            </div>
          </div>
        </div>
        <h3 className="ep-title">Episods</h3>
        <div className="episods">
          {episods.map((el: CartType, id: number) => {
            return <Episods carts={el} key={id} />;
          })}
        </div>
      </div>
    );
  }
  return null;
};

export default IdCard;
