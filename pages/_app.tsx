import { config } from "@fortawesome/fontawesome-svg-core";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

import "../styles-global/index.scss";

import Layout from "components/Layout";
import favIcon16 from "images/favicon_16x16.png";
import favIcon32 from "images/favicon_32x32.png";
import favIconAppleTouchIcon from "images/favicon_apple-touch-icon.png";
import favSafariPinnedTab from "images/favicon_safari-pinned-tab.svg";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="website" property="og:type" />
      <meta content="en_US" property="og:locale" />
      <meta content="Jacob Venable" name="author" />
      <meta content="@Jacob_Venable" name="twitter:site" />
      <meta content="@Jacob_Venable" name="twitter:creator" />
      <meta content="summary_large_image" name="twitter:card" />
      <link
        href={favIconAppleTouchIcon.src}
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link href={favIcon32.src} rel="icon" sizes="32x32" type="image/png" />
      <link href={favIcon16.src} rel="icon" sizes="16x16" type="image/png" />
      <link color="#4d65af" href={favSafariPinnedTab.src} rel="mask-icon" />
      <meta content="#4d65af" name="msapplication-TileColor" />
      <meta content="#ffffff" name="theme-color" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);
export default App;
