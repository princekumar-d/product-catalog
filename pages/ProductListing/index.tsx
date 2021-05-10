import React from "react";
import styles from "./style.module.css";
//import QUERY_PRODUCTS from '../queries/queryProductList.graphql';
import QUERY_PRODUCTS_USERS from "../../queries/queryProductsUser.graphql";
import { useQuery } from "@apollo/client";
import { getFormattedPrice } from "../../util/priceUtil";
import Link from "next/link";

export const ProductListing: React.FC = () => {
  const id = "5";
  //const { data, loading, error } = useQuery(QUERY_PRODUCTS);
  const { data, loading, error } = useQuery(QUERY_PRODUCTS_USERS, {
    variables: { id },
    skip: !id,
  });

  if (!data || loading) {
    return <p>loading...</p>;
  }
  // check for errors
  if (error) {
    return <p>{error}</p>;
  }
  const getAvailableOffersForProduct = (productOffers) => {
    const userOffers = data.user.offers;
    return userOffers.filter((userOffer) =>
      productOffers.includes(userOffer.id)
    );
  };
  const parseAvailableBadges = () => {
    const availableBadgeString = data.user.available_badges;
    const badgeStrings = availableBadgeString.split("||");
    return badgeStrings.map((badgeString) => {
      const badgeSplitString = badgeString.split(":");
      return {
        name: badgeSplitString[0],
        badgeTypes: badgeSplitString[1].split(","),
      };
    });
  };
  const availableBadges = parseAvailableBadges();
  const applicableBadge = (offers) => {
    for (let i = 0; i < availableBadges.length; i++) {
      if (
        offers.find((offer) =>
          availableBadges[i].badgeTypes.includes(offer.type)
        )
      ) {
        return availableBadges[i];
      }
    }
    return null;
  };

  return data && data.productList ? (
    <div className="container">
      <main className={styles.main}>
        <h1>Products</h1>
        <p className={styles.resultsSummary}>
          Showing {data.productList.length} items
        </p>
        <ul className={styles.productGrid} data-testid="productsResults">
          {data.productList.map((product) => {
            const availableOffers = getAvailableOffersForProduct(
              product.offer_ids
            );
            const badge = applicableBadge(availableOffers);
            return (
              <li
                className={styles.productCard}
                key={product.id}
                data-testid="product"
              >
                <Link
                  href={{
                    pathname: "/ProductDetails/[id]",
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
                        <img
                          className={styles.badge}
                          src={`/${badge.name}_icon.jpg`}
                        />
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
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  ) : null;
};

export default ProductListing;
