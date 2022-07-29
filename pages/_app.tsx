import { FC } from "react";
import { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "../styles-global/index.scss";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);
export default App;
