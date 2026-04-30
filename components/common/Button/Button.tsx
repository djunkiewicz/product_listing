import styles from './Button.module.css';

type Props = {
    text: string;
    type: 'primary' | 'secondary' | 'navbar';
    size: 'small' | 'medium' | 'large';
    url?: string; // url is ignored when onClick is provided
    onClick?: () => void;
    iconSrc?: string;
}

export default function Button({
    text,
    type,
    size,
    url,
    onClick,
    iconSrc
}: Props) {
  return (
    <div className={styles.mainContainer}>
        <button className={
            type === "primary"
            ? "btn btnPrimary"
            : type === "secondary"
              ? "btn btnSecondary"
              : "btn btnNavbar"
      }>{text}</button>
    </div>
  );
}