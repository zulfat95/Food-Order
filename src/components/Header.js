import './Header.module.css';
import meals from '../img/meals.jpg'

function Header() {
  return (
    <header>
      <h1>ReactMeals</h1>
      <div>Your order</div>
      {/* <img src={meals} alt={meals}/> */}
    </header>
  )
}

export default Header;