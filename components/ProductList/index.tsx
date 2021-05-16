import { ProductCard } from "../ProductCard";
import {
  parseAvailableBadges,
  parseAvailableOffersForProduct,
  applicableBadge,
} from "../../utils/badgeUtil";
import styles from "./style.module.css";

interface ProductListProps {
  products: Product[];
  user: User;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  user,
}: ProductListProps) => {
  const availableBadges = parseAvailableBadges({
    availableBadges: user.available_badges,
  });
  return (
    <ul className={styles.productGrid} data-testid="productList">
      {products &&
        products.map((product) => {
          const availableOffersForProduct = parseAvailableOffersForProduct({
            productOffers: product.offer_ids,
            userOffers: user.offers,
          });
          const badge = applicableBadge({
            offers: availableOffersForProduct,
            badges: availableBadges,
          });
          return (
            <li key={product.id}>
              <ProductCard product={product} badge={badge} />
            </li>
          );
        })}
    </ul>
  );
};
