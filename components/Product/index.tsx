import { getFormattedPrice } from "../../utils/priceUtil";
import styles from "./style.module.css";

interface ProductProps {
  product: Product;
}

export const Product: React.FC<ProductProps> = ({ product }: ProductProps) => {
  return (
    <div className={styles.productDetails} data-testid="productDetails">
      <div className={styles.imageContainer}>
        <figure>
          <img
            src={`https://asset1.cxnmarksandspencer.com/is/image/mands/${product.image_key}`}
            alt={product.name}
          />
        </figure>
      </div>
      <div className={styles.detailsContainer}>
        <h1 className={styles.productTitle}>{product.name}</h1>
        <div className={styles.price}>
          {product.price.original_price ? (
            <del className={styles.originalPrice}>
              {getFormattedPrice(
                product.price.original_price,
                product.price.currency_code
              )}
            </del>
          ) : null}
          <span className={styles.currentPrice}>
            {getFormattedPrice(
              product.price.current_price,
              product.price.currency_code
            )}
          </span>
        </div>
        <div className={styles.moreInformation}>
          {product.information.map((moreInfo, index) => (
            <div className={styles.infoSection} key={index}>
              <h4>{moreInfo.section_title}</h4>
              <p>{moreInfo.section_text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
