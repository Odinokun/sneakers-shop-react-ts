import s from './contentHeader.module.scss'
import React from 'react';

type PropsType = {
  onInputChange: () => void
};

export const ContentHeader = (props: PropsType) => {
  return (
    <header className={s.contentHeader}>
      <h1>All sneakers</h1>
      <div className={s.search}>
        <button>
          <img src="img/search.svg" alt="search icon"/>
        </button>
        <input onChange={props.onInputChange} type="text" placeholder="Search..."/>
      </div>
    </header>
  )
}