// Styles
import styles from './ProductList.module.css';

// Types

// Utils

// Components
import { Product } from '@/types/product.types';
import ProductCard from '@/components/ProductCard/ProductCard'

// External

type Props = {
    products: Product[];
    addToCartFn: (product: Product) => void;
}

export default function ProductList({products, addToCartFn}: Props) {
  return (
    <div className={styles.mainContainer}>
        <h2>Our products</h2>
        <div className={styles.cardsContainer}>
          {products.map(p =>(
              <ProductCard key={p.articleNumber} product={p} addToCartFn={addToCartFn}/>
          ))}
        </div>
    </div>
  );
}