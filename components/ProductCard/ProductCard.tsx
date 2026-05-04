// Styles
import styles from "./ProductCard.module.css";

// Types
import { Product } from "@/types/product.types";

// Utils
import { calculateFinalPrice } from "@/utils/product.utils";

// Components
import Button from "@/components/common/Button/Button";
import ImageWithFallback from "@/components/common/ImageWithFallback/ImageWithFallback";

type Props = {
    product: Product;
    addToCartFn: (product: Product) => void;
}

export default function ProductCard({product, addToCartFn}: Props) {

  let description = product.description;

  const finalPrice: number = calculateFinalPrice(product.price, product.promotion);
  let priceTemplate = <span className={styles.normalPrice}>{finalPrice}$</span>
  if (product.promotion) {
    priceTemplate =
    <span>
      <span className={styles.promoName}>{product.promotion.name}&nbsp;-{product.promotion.percentage}%&nbsp;&nbsp;</span>
      <span className={styles.oldPrice}>{product.price}$ </span>
      <span className={styles.newPrice}>
        &nbsp;&nbsp;
        {finalPrice}$
      </span>
    </span>
  }

  return (
    <div className={styles.mainContainer}>
        <div className={styles.imagesWrapper}>
          <ImageWithFallback src={product.image.url} className={styles.productImg} />
          <ImageWithFallback src={product.image.url} className={styles.productImgBackground} />
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.infoContainer}>
            <div>Brand:</div>
            <div className={styles.brandValue}>
              {product.brandName}
              <img src={product.brandLogo} />
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div>Price:</div>
            <div className={styles.priceValue}>
              {priceTemplate}
            </div>
          </div>
          <div className={styles.btnContainer}>
            <Button text="Details" type="secondary" size="medium" />
            <Button text="Add to cart" type="primary" size="medium" onClick={() => addToCartFn(product)} />
          </div>
        </div>
    </div>
  );
}

