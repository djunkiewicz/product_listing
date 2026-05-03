// Styles
import styles from './CartButton.module.css';

// Components

type Props = {
    cartCounter: number;
    clearCartFn: () => void;
}

export default function CartButton({cartCounter, clearCartFn}: Props) {
  return (
    <div className={styles.mainContainer}>
        <button className={styles.cartButton}>{cartCounter}<img src="shopping-cart.svg" onClick={clearCartFn}/></button>
    </div>
  );
}