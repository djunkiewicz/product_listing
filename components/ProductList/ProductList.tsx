import styles from './ProductList.module.css';
import { Product } from '@/types/product.types';
import ProductCard from '@/components/ProductCard/ProductCard'

type Props = {
    products: Product[];
    addToCartFn: () => void;
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