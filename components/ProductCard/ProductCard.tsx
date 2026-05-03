// Styles
import styles from "./ProductCard.module.css";

// Types
import { Product } from "@/types/product.types";

//Components
import Button from "@/components/common/Button/Button";
import ImageWithFallback from "@/components/common/ImageWithFallback/ImageWithFallback";

type Props = {
    product: Product;
    addToCartFn: () => void;
}

export default function ProductCard({product, addToCartFn}: Props) {
  let description = product.description;
  // if (product.articleNumber === '3821047') {
  //   description = product.description + product.description + product.description;
  // }
  
  const calculatePromoPrice = (originalPrice: number, percentage: number): number => {
    return Number(((100 - percentage) / 100 * originalPrice).toFixed(2));
  }

  let priceTemplate = <span>{product.price}$</span>

  if (product.promotion) {
    priceTemplate =
    <span>
      <span className={styles.promoName}>{product.promotion.name}&nbsp;-{product.promotion.percentage}%&nbsp;&nbsp;</span>
      <span className={styles.oldPrice}>{product.price}$ </span>
      <span className={styles.newPrice}>
        &nbsp;&nbsp;
        {calculatePromoPrice(product.price, product.promotion.percentage)}$
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
            <Button text="Add to cart" type="primary" size="medium" onClick={addToCartFn} />
          </div>
        </div>
    </div>
  );
}

