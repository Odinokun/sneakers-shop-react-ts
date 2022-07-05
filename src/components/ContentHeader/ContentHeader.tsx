import s from './contentHeader.module.scss'

import React, {ChangeEvent} from 'react';

type PropsType = {
  onSearchInputChange: (value: string) => void
  setSearchValue: (val: string) => void
  searchValue: string
};

export const ContentHeader = (props: PropsType) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onSearchInputChange(event.currentTarget.value);
  }

  return (
    <header className={s.contentHeader}>
      <h1>{props.searchValue ? `Search about: "${props.searchValue}"` : 'All sneakers'}</h1>
      <div className={s.search}>
        <button className={s.searchBtn}>
          <img src="img/search.svg" alt="search"/>
        </button>
        <input onChange={onChange}
               value={props.searchValue}
               type="text"
               placeholder="Search..."/>
        {props.searchValue &&
          <button className={s.searchDelete} onClick={() => props.setSearchValue('')}>
            <img src="/img/btn-plus.svg" alt="delete search"/>
          </button>}
      </div>
    </header>
  )
}