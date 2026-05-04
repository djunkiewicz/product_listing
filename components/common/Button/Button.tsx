// Styles
import styles from './Button.module.css';

// Types

// Utils

// Components

// External

type Props = {
    text?: string;
    type: 'primary' | 'secondary' | 'navbar';
    size: 'small' | 'medium' | 'large';
    onClick?: () => void;
    iconSrc?: string;
}

export default function Button({
    text,
    type,
    size,
    onClick,
    iconSrc
}: Props) {
  const classList = `${styles.btn} ${styles[type]} ${styles[size]}`
  return (
    <div className={styles.mainContainer}>
        <button className={classList} onClick={onClick}>
            {text && text}
            {iconSrc &&
                <img className={styles.icon} src={iconSrc} />
            }
        </button>
    </div>
  );
}