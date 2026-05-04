// Styles
import styles from './ProductList.module.css';

// Types

// Utils

// Components
import { Product } from '@/types/product.types';
import ProductCard from '@/components/ProductCard/ProductCard';
import Button from '@/components/common/Button/Button';

// External
import { useState } from "react";

type Props = {
    products: Product[];
    addToCartFn: (product: Product) => void;
}

export default function ProductList({products, addToCartFn}: Props) {

    const [productsCopy, setProducts] = useState<Product[]>(products);

    const sortPriceAsc = () => {
        const sorted = [...productsCopy].sort((a, b) => a.price - b.price);
        setProducts(sorted);
    };

    const sortPriceDesc = () => {
        const sorted = [...productsCopy].sort((a, b) => b.price - a.price);
        setProducts(sorted);
    };

    const resetFiltering = () => {
        setProducts(products);
    }
    return (
        <div className={styles.mainContainer}>
            <div className={styles.topContainer}>
                <h2>Our products</h2>
                <div className={styles.filterPanel}>
                    <span className={styles.text}>Sort by price:</span>
                    <Button  text="↑" type='navbar' size='large' onClick={sortPriceAsc}/>
                    <Button  text='↓' type='navbar' size='large' onClick={sortPriceDesc}/>
                    <Button text='reset' type='primary' size='small' onClick={resetFiltering}/>
                </div>
            </div>
            <div className={styles.cardsContainer}>
            {productsCopy.map(p =>(
                <ProductCard key={p.articleNumber} product={p} addToCartFn={addToCartFn}/>
            ))}
            </div>
        </div>
    );
}