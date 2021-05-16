import { Product } from "../../../components/Product";
import client from "../../../apollo-client";
import QUERY_PRODUCT from "../../../queries/queryProduct.graphql";
import QUERY_PRODUCTS from "../../../queries/queryProductList.graphql";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import styles from "./style.module.css";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
}: ProductDetailsProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return product ? (
    <div className="container">
      <div className={styles.backButtonWrapper}>
        <Link href="/">
          <a className={styles.backButton}>&larr; Back to results</a>
        </Link>
      </div>
      <Product product={product} />
    </div>
  ) : (
    <div>Not Found</div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id;
  const { data } = await client.query({
    query: QUERY_PRODUCT,
    variables: { id },
  });

  return {
    props: {
      product: data.product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: QUERY_PRODUCTS,
  });
  const products = data.productList;
  const ids = products.map((product) => product.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: true,
  };
};

export default ProductDetails;
