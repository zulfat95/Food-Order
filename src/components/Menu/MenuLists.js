import styles from './MenuLists.module.css';
import Card from '../UI/Card';
import MenuItem from './MenuItem';
import { INITIAL_MENU } from '../../menu';

function MenuLists() {

  const menu = INITIAL_MENU;

  const menuList = menu.map((item) => <MenuItem key={item.id} name={item.name} description={item.description} price={item.price} id={item.id}/>);
  return (
    <Card className={styles.card}>
      {menuList}
    </Card>
  )
}

export default MenuLists;