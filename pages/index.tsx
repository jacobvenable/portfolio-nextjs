import About from "components/About";
import ContentContainer from "components/ContentContainer";
import Head, { BASE_TITLE } from "components/Head";

const IndexPage = () => {
  return (
    <>
      <Head
        description="The portfolio of Jacob Venable, a senior software engineer at Nutrien."
        title={BASE_TITLE}
      />
      <ContentContainer>
        <About />
      </ContentContainer>
    </>
  );
};

export default IndexPage;
