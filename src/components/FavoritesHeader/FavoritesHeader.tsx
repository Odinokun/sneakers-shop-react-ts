import s from './favoritesHeader.module.scss'
import React from 'react';

type PropsType = {};

export const FavoritesHeader = (props: PropsType) => {
  return (
    <header className={s.favoritesHeader}>
      <h1>My favorites sneakers</h1>
    </header>
  )
}