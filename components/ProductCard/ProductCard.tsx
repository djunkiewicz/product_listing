import { Product } from "@/types/product.types";
import styles from "./ProductCard.module.css"

type Props = {
    product: Product
}

export default function ProductCard({product}: Props) {
  let description = product.description;
  if (product.articleNumber === '3821047') {
    description = product.description + product.description + product.description;
  }
  return (
    <div className={styles.mainContainer}>
        <div className={styles.imagesWrapper}>
          <img className={styles.productImg} src={product.image.url} />
          <img className={styles.productImgBackground} src={product.image.url} />
        </div>
        <div className={styles.bottomContainer}>
          <h3 className={styles.title}></h3>
          <h5>{product.title}</h5>
          <div>{description}</div>
          <div>{product.price}</div>
          <div>{product.brandName}</div>
        </div>
    </div>
  );
}