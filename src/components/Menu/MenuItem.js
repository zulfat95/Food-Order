import styles from './MenuItem.module.css'
import Button from '../UI/Button';

function MenuItem() {
  return (
    <div className={styles['item-block']}>
      <div className={styles['item-about']}>
        <h3 className={styles['item-about_name']}>Sushi</h3>
        <p className={styles['item-about_description']}>Finest fish and veggies</p>
        <span className={styles['item-about_price']}>$22.99</span>
      </div>
      <div className={styles['item-amount_field']}>
        <div className={styles['item-amount_field_group']}>
          <label className={styles['item-amount_field_label']} htmlFor='amount'>Amount</label>
          <input className={styles['item-amount_field_input']} id="amount" type='number' />
        </div>
        <Button className={styles['add-button']}>+ Add</Button>
      </div>
    </div>
  )
}

export default MenuItem;