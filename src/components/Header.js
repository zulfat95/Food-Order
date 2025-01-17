import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <h1>ReactMeals</h1>
      <div>Your order</div>
      {/* <img src={meals} alt={meals}/> */}
      {/* <div className={styles.img}></div> */}
    </header>
  )
}

export default Header;