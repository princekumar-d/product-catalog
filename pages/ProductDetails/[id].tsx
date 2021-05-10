import React from "react";
import { useRouter } from "next/router";
import QUERY_PRODUCT from "../../queries/queryProduct.graphql";
import { useQuery } from "@apollo/client";
import styles from "./style.module.css";
import { getFormattedPrice } from "../../util/priceUtil";
import Link from "next/link";

const ProductDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useQuery(QUERY_PRODUCT, {
    variables: { id },
    skip: !id,
  });

  if (loading) {
    return <p>loading...</p>;
  }
  // check for errors
  if (error) {
    return <p>{error}</p>;
  }
  const product = data && data.product;
  return product ? (
    <div className="container">
      <main className={styles.main}>
        <div className={styles.backButtonWrapper}>
          <Link href="/">
            <a className={styles.backButton}>
              <span className={styles.backIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Back to results
            </a>
          </Link>
        </div>
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
      </main>
    </div>
  ) : null;
};

export default ProductDetails;
