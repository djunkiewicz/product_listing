import styles from './ProductList.module.css';
import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard/ProductCard'

type Props = {
    products: Product[];
}

export default function ProductList({products}: Props) {
  return (
    <div className={styles.mainContainer}>
        <h5>This is the product list component</h5>
        {products.map(p =>(
            <ProductCard key={p.name} />
        ))}
    </div>
  );
}