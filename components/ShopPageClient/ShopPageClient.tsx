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

    const addToCart = () => {
        setCartCounter((prev) => prev + 1);
    };

    const clearCart = () => {
        setCartCounter(0);
    }

    return (
    <div className={styles.test}>
      <Header logoUrl={logoUrl} cartCounter={cartCounter} clearCartFn={clearCart}/>
      <div className={styles.body}>
        <div className={styles.topContainer}>
          <div className={styles.introContainer}>
            <span>DISCOVER. TRAIN. CONQUER.</span>
            <h1>Equipment and clothing for your passions</h1>
            <h5>Proven accessories and clothing that will withstand any conditions.</h5>
            <div className={styles.btnGroup}>
              <Button  text="See, what's new" type="primary" size="large" />
              <Button  text="Check promotions" type="secondary" size="large" />
            </div>
          </div>
        </div>
        <div className={styles.benefitsContainer}>
          <h4>DELIVERY PROMO QUALITY</h4>
        </div>
        <ProductList  products={products} addToCartFn={addToCart} />
      </div>
      <Footer/>
    </div>
  );
}
