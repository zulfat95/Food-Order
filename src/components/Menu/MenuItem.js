import styles from './MenuItem.module.css'
import { useState } from 'react';
import Button from '../UI/Button';

function MenuItem(props) {

  const [amount, setAmount] = useState(0);

  const handleAmount = (event) => {
    setAmount(prev => prev + 1);
  }

  return (
    <div className={styles['item-block']}>
      <div className={styles['item-about']}>
        <h3 className={styles['item-about_name']}>{props.name}</h3>
        <p className={styles['item-about_description']}>{props.description}</p>
        <span className={styles['item-about_price']}>{`$${props.price.toFixed(2)}`}</span>
      </div>
      <div className={styles['item-amount_field']}>
        <div className={styles['item-amount_field_group']}>
          <label className={styles['item-amount_field_label']} htmlFor={props.id}>Amount</label>
          <input className={styles['item-amount_field_input']} id={props.id} type='number' value={amount}/>
        </div>
        <Button className={styles['add-button']} onClick={handleAmount}>+ Add</Button>
      </div>
    </div>
  )
}

export default MenuItem;