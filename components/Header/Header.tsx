// Styles
import styles from './Header.module.css';

// Components
import Button from "@/components/common/Button/Button";
import CartButton from '@/components/CartButton/CartButton';

type Props = {
    logoUrl: string;
    cartCounter: number;
    clearCartFn: () => void;
}

export default function Header({logoUrl, cartCounter, clearCartFn}: Props) {
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
            <CartButton cartCounter={cartCounter} clearCartFn={clearCartFn}/>
        </div>        
    </header>
  );
}