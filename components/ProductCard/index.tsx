import { getFormattedPrice } from "../../utils/priceUtil";
import Link from "next/link";
import styles from "./style.module.css";

type ProductCardProps = {
  product: Product;
  badge: Badge;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  badge,
}: ProductCardProps) => {
  return (
    <div className={styles.productCard}>
      <Link
        href={{
          pathname: "/details/[id]",
          query: { id: product.id },
        }}
      >
        <a>
          <figure>
            <img
              className={styles.image}
              src={`https://asset1.cxnmarksandspencer.com/is/image/mands/${product.image_key}`}
              alt={product.name}
            />
            {badge ? (
              <img className={styles.badge} src={`/${badge.name}_icon.jpg`} />
            ) : null}
          </figure>

          <h3 className={styles.productTitle}>{product.name}</h3>
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
        </a>
      </Link>
    </div>
  );
};
