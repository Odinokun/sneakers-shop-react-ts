import s from './contentHeader.module.scss'
import React from 'react';

type PropsType = {};

export const ContentHeader = (props: PropsType) => {
  return (
    <header className={s.contentHeader}>
      <h1>All sneakers</h1>
      <div className={s.search}>
        <button>
          <img src="img/search.svg" alt="search icon"/>
        </button>
        <input type="text" placeholder="Search..."/>
      </div>
    </header>
  )
}