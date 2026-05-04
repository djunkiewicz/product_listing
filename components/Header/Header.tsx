"use client";

// Styles
import styles from './Header.module.css';

// Components
import Button from "@/components/common/Button/Button";
import CartButton from '@/components/CartButton/CartButton';
import Cart from '@/components/Cart/Cart';

// Types
import { Product } from '@/types/product.types';

// Others
import { useState } from 'react';

type Props = {
    logoUrl: string;
    cartCounter: number;
    cartProducts: Product[];
    clearCartFn: () => void;
}

export default function Header({logoUrl, cartCounter, clearCartFn, cartProducts}: Props) {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  return (
    <header className={styles.header}>
        <div className={styles.leftPanel}>
            <h1 className={styles.companyName}>ActiveShop</h1>
            <img className={styles.logo} src={logoUrl} />
        </div>
        <div className={styles.rightPanel}>
            <Button  text='Home' type='navbar' size='medium'/>
            <Button  text='Products' type='navbar' size='medium'/>
            <Button  text='About' type='navbar' size='medium'/>
            <Button  text='Partners' type='navbar' size='medium'/>
            <Button  text='Contact' type='navbar' size='medium'/>
            <CartButton cartCounter={cartCounter} onClick={toggleCart} />
            {isCartOpen && (
                <Cart clearCartFn={clearCartFn} products={cartProducts} />
            )}
        </div>        
    </header>
  );
}