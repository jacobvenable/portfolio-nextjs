import Header from "components/Header";
interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <main id="main">{children}</main>
  </>
);

export default Layout;
