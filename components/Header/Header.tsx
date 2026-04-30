import styles from './Header.module.css';

type Props = {
    imgUrl: string;
}

export default function Header({imgUrl}: Props) {
  return (
    <header className={styles.header}>
        <div className={styles.leftPanel}>
            <h1>ActiveShop</h1>
            <img src={imgUrl} />
        </div>
        <div className={styles.rightPanel}>
            <button className={styles.navbarButton}>Products</button>
            <button className={styles.navbarButton}>About</button>
            <button className={styles.navbarButton}>Partners</button>
            <button className={styles.navbarButton}>Contact</button>
            <button className={styles.cartButton}><img src="shopping-cart.svg"/></button>
        </div>        
    </header>
  );
}