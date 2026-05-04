"use client";

// Styles
import styles from "./ShopPageClient.module.css";

// Components
import Header from '@/components/Header/Header';
import ProductList from '@/components/ProductList/ProductList';
import Button from "@/components/common/Button/Button";
import Footer from "@/components/Footer/Footer";

// Types
import { Product } from "@/types/product.types";

// Hooks
import { useState } from "react";


type Props = {
    logoUrl: string;
    products: Product[];
}

export default function ShopPageClient({logoUrl, products}: Props) {

    const [cartCounter, setCartCounter] = useState(0);
    const [cartProducts, updateCart] = useState<Product[]>([]);

    const clearCart = () => {
        setCartCounter(0);
        updateCart([]);
    }

    const addToCart = (product: Product) => {
        setCartCounter((prev) => prev + 1);
        updateCart((list) => [...list, product]);
    };

    return (
    <div className={styles.test}>
      <Header logoUrl={logoUrl} cartCounter={cartCounter} clearCartFn={clearCart} cartProducts={cartProducts}/>
      <div className={styles.body}>
        <div className={styles.topContainer}>
          <div className={styles.introContainer}>
            <span className={styles.motto}>DISCOVER. TRAIN. CONQUER.</span>
            <h1 className={styles.motto2}>Equipment and clothing for your passions</h1>
            <span className={styles.motto3}>Proven accessories and clothing that will withstand any conditions.</span>
            <div className={styles.btnGroup}>
              <Button  text="See, what's new" type="primary" size="large" />
              <Button  text="Check promotions" type="secondary" size="large" />
            </div>
          </div>
        </div>
        <div className={styles.benefitsContainer}>
            <div className={styles.benefit}>
                <img src="/icons/delivery.svg" className={styles.benefitIcon} />
                <span>Fast Delivery</span>
            </div>
            <div className={styles.benefit}>
                <img src="/icons/promo.svg" className={styles.benefitIcon} />
                <span>Great Deals</span>
            </div>
            <div className={styles.benefit}>
                <img src="/icons/quality2.svg" className={styles.benefitIcon} />
                <span>High Quality</span>
            </div>
        </div>
        <ProductList  products={products} addToCartFn={addToCart} />
      </div>
      <Footer/>
    </div>
  );
}
