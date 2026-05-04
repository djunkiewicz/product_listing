// Styles
import styles from './CartButton.module.css';

// Types

// Utils

// Components

// External

type Props = {
    cartCounter: number;
    onClick: () => void;
}

export default function CartButton({cartCounter, onClick}: Props) {
  return (
    <div className={styles.mainContainer} onClick={onClick}>
        <div className={styles.cartButton}><img src="/icons/shopping-cart.svg"/></div>
        <div className={styles.counter}>{cartCounter}</div>
    </div>
  );
}