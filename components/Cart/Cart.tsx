// Styles
import styles from './Cart.module.css';

// Types
import { Product } from '@/types/product.types';

// Utils
import { calculateFinalPrice } from '@/utils/product.utils';

// Components
import ImageWithFallback from '../common/ImageWithFallback/ImageWithFallback';
import Button from '@/components/common/Button/Button';

// External

type Props = {
    products: Product[];
    clearCartFn: () => void;
}

export default function Cart({products, clearCartFn}: Props) {

    const totalPrice: number = Number(
        products.reduce(
            (sum, currentProduct) =>
            sum + calculateFinalPrice(currentProduct.price, currentProduct.promotion),
            0
        ).toFixed(2)
    );

    return (
    <div className={styles.mainContainer}>
        <div className={styles.scrollWrapper}>
            {products.map((p, index) => (
                <div key={index} className={styles.cartElement}>
                    <div className={styles.productIconContainer}>
                        <ImageWithFallback className={styles.productImage} src={p.image.url} alt={p.image.altText}/>
                    </div>
                    <span>{p.title}</span>
                    <span>{calculateFinalPrice(p.price, p.promotion)}$</span>
                </div>
            ))}
        </div>
        <div className={styles.summaryPanel}>
            <span>Cart total: {totalPrice}$</span>
            <Button text="Clear cart" size="small" type='secondary' onClick={clearCartFn} />
            <Button text="Place order" size='small' type='primary' />
        </div>
    </div>
    );
}