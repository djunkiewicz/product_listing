"use client";

// Styles
import styles from "./ProductCard.module.css";

// Types
import { Product } from "@/types/product.types";

//Components
import Button from "@/components/common/Button/Button";

type Props = {
    product: Product
}

export default function ProductCard({product}: Props) {
  let description = product.description;
  // if (product.articleNumber === '3821047') {
  //   description = product.description + product.description + product.description;
  // }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "no_image.jpg";
  };
  
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
          <img className={styles.productImg} src={product.image.url} onError={handleImageError}/>
          <img className={styles.productImgBackground} src={product.image.url} />
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
            <Button text="Add to cart" type="primary" size="medium" />
          </div>
        </div>
    </div>
  );
}

