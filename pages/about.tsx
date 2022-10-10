import ContentContainer from "components/ContentContainer";
import Head from "components/Head";
import TimeLine from "components/TimeLine";
import Typography from "components/Typography";

const AboutPage = () => {
  return (
    <ContentContainer>
      <Head
        description="More about Jacob Venable's experience and skills."
        title="Experience"
      />
      <Typography variant="h1">About</Typography>
      <Typography variant="h2">Experience</Typography>
      <TimeLine />
    </ContentContainer>
  );
};

export default AboutPage;
