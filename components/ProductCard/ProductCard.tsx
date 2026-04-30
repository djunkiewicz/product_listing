import { Product } from "@/types/product.types";
import styles from "./ProductCard.module.css"

type Props = {
    product: Product
}

export default function ProductCard({product}: Props) {
  return (
    <div className={styles.mainContainer}>
        <h5>Single Product Card</h5>
        <div>{product.title}</div>
    </div>
  );
}