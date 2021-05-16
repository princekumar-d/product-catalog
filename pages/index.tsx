import { ProductList } from "../components/ProductList";
import { ResultSummary } from "../components/ResultSummary";
import QUERY_PRODUCTS_USERS from "../queries/queryProductsUser.graphql";
import client from "../apollo-client";
import { GetStaticProps } from "next";

interface ProductResultProps {
  products: Product[];
  user: User;
}

export const ProductResults: React.FC<ProductResultProps> = ({
  products,
  user,
}: ProductResultProps) => {
  return (
    <div className="container">
      <ResultSummary resultCount={products.length} />
      <ProductList products={products} user={user} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const id = "5";
  const { data } = await client.query({
    query: QUERY_PRODUCTS_USERS,
    variables: { id },
  });
  return {
    props: {
      products: data.productList,
      user: data.user,
    },
  };
};

export default ProductResults;
