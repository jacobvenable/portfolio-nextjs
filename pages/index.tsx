import ContentContainer from "components/ContentContainer";
import Head, { BASE_TITLE } from "components/Head";
import Intro from "components/Intro";

const IndexPage = () => {
  return (
    <>
      <Head
        description="The portfolio of Jacob Venable, a senior software engineer at Nutrien."
        title={BASE_TITLE}
      />
      <ContentContainer>
        <Intro />
      </ContentContainer>
    </>
  );
};

export default IndexPage;
