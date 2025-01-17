import styles from './MenuLists.module.css';
import Card from '../UI/Card';
import MenuItem from './MenuItem';

function MenuLists() {
  return (
    <Card className={styles.card}>
      <MenuItem/>
    </Card>
  )
}

export default MenuLists;