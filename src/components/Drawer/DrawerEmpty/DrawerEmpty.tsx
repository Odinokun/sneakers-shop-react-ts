import s from './drawerEmpty.module.scss'

type PropsType = {
  onClickCart: () => void
};

export const DrawerEmpty = (props: PropsType) => {
  return (
    <div className={s.drawerEmpty}>
      <div className={s.drawerEmptyImage}>
        <img src="/img/empty-cart.jpeg" alt="empty cart"/>
      </div>
      <p>Your box is empty</p>
      <button className={s.drawerEmptyBtn} onClick={props.onClickCart}>
        <img src="/img/arrow-right.svg" alt="arrow right"/>
        <span>Take your choose</span>
      </button>
    </div>
  )
}