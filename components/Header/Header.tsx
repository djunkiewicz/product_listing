import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
        <h1>This is the header</h1>
        <p>menu lista</p>
        <p>ICON CART</p>
    </header>
  );
}