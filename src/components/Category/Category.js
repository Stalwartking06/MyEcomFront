import React from 'react';
import { Link } from 'react-router-dom';
import style from './brand.module.css';

export default function Category() {
  return (
    <div>
      <CardSlider />
    </div>
  );
}

function CardSlider() {
  return (
    <div className={style.body}>
      <div className={style.slider_container}>
        <div className={style.slider}>

          {/* Jewelry */}
          <Link to="/Jwellary" className={style.card}>
            <img src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt="Jewelry" />
            <div className={style.card_content}>
              <h3 className={style.card_title}>Jewelry</h3>
              <p className={style.card_description}>Your Fav Brands are Available</p>
            </div>
          </Link>

          {/* Electronics */}
          <Link to="/Electronics" className={style.card}>
            <img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" alt="Electronics" />
            <div className={style.card_content}>
              <h3 className={style.card_title}>Electronics</h3>
              <p className={style.card_description}>Your Fav Brands are Available</p>
            </div>
          </Link>

          {/* Women's Clothing */}
          <Link to="/ClotingW" className={style.card}>
            <img src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" alt="Women's Clothing" />
            <div className={style.card_content}>
              <h3 className={style.card_title}>Women's Clothes</h3>
              <p className={style.card_description}>Your Fav Brands are Available</p>
            </div>
          </Link>

          {/* Men's Clothing */}
          <Link to="/Clotingm" className={style.card}>
            <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="Men's Clothing" />
            <div className={style.card_content}>
              <h3 className={style.card_title}>Men's Clothes</h3>
              <p className={style.card_description}>Your Fav Brands are Available</p>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
