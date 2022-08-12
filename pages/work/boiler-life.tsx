import ContentContainer from "components/ContentContainer";
import Typography from "components/Typography";
import type { WorkItemDefinition } from "components/WorkItem";
import Thumb from "images/portfolio_boilerLife-thumb.jpg";

export const definition: WorkItemDefinition = {
  title: "Boiler Life",
  roles: ["Front-End Development", "CMS Implementation"],
  blurb:
    "a social media marketing campaign with a custom-designed micro-site, showcasing stories of Purdue students, groups, and alumni",
  route: "/work/boiler-life",
  thumb: Thumb,
  tech: [
    "GulpJS",
    "HTML5",
    "responsive",
    "Bootstrap",
    "SASS",
    "jQuery",
    "lazy loading",
  ],
};

const BoilerLifePage = () => {
  return (
    <ContentContainer>
      <Typography variant="h1">Boiler Life</Typography>
    </ContentContainer>
  );
};

export default BoilerLifePage;
