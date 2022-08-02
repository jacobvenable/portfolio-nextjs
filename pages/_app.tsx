import { config } from "@fortawesome/fontawesome-svg-core";
import { AppProps } from "next/app";
import { FC } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

import "../styles-global/index.scss";

import Layout from "components/Layout";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);
export default App;
