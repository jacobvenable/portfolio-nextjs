import ContentContainer from "components/ContentContainer";
import Head from "components/Head";
import NotFound from "components/NotFound";

const ContactPage = () => {
  return (
    <ContentContainer>
      <Head
        description="The page you were looking for could not be found."
        title="404 Page Not Found"
      />
      <NotFound />
    </ContentContainer>
  );
};

export default ContactPage;
