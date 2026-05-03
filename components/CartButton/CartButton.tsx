// Styles
import styles from './CartButton.module.css';

// Components

type Props = {
    cartCounter: number;
    clearCartFn: () => void;
}

export default function CartButton({cartCounter, clearCartFn}: Props) {
  return (
    <div className={styles.mainContainer} onClick={clearCartFn}>
        <div className={styles.cartButton}><img src="shopping-cart.svg"/></div>
        <div className={styles.counter}>{cartCounter}</div>
    </div>
  );
}