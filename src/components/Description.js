import Card from "./UI/Card";
import styles from './Description.module.css';

function Description() {
  return (
    <Card className={styles['description-section']}>
      <section className={styles['description-section-content']}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
        <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experencied chefs!</p>
      </section>
    </Card>
  )
}

export default Description;