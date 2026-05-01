// Styles
import styles from './Header.module.css';

// Components
import Button from "@/components/common/Button/Button"

type Props = {
    imgUrl: string;
}

export default function Header({imgUrl}: Props) {
  return (
    <header className={styles.header}>
        <div className={styles.leftPanel}>
            <h1 className={styles.companyName}>ActiveShop</h1>
            <img className={styles.logo} src={imgUrl} />
        </div>
        <div className={styles.rightPanel}>
            <Button  text='Products' type='primary' size='small'/>
            <Button  text='About' type='secondary' size='medium'/>
            <Button  text='Partners' type='navbar' size='large'/>
            <button className={styles.cartButton}><img src="shopping-cart.svg"/></button>
        </div>        
    </header>
  );
}