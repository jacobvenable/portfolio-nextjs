import Footer from "components/Footer";
import Header from "components/Header";
import SkipToMain from "components/SkipToMain";

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  const mainId = "main";
  return (
    <>
      <SkipToMain mainId={mainId} />
      <Header />
      <main id={mainId}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
