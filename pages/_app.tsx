import "../styles/globals.css";
import Layout from "../components/Layout";
import { AppProps } from "next/app";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
