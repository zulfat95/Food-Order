import styles from './Main.module.css';
import Description from './Description';
import MenuLists from './Menu/MenuLists';

function Main() {
  return (
    <main className={styles.main}>
      <Description/>
    </main>
  )
}

export default Main;