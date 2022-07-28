import { FC } from "react";
import { AppProps } from "next/app";

import "../styles-global/index.scss";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);
export default App;
