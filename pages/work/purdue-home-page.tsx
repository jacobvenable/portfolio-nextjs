import ContentContainer from "components/ContentContainer";
import Typography from "components/Typography";
import type { WorkItemDefinition } from "components/WorkItem";
import Thumb from "images/portfolio_purdueHomePage-thumb.png";

export const definition: WorkItemDefinition = {
  title: "Purdue Home Page Redesign",
  roles: ["Front-End Development", "CMS Implementation"],
  blurb:
    "a revamp of Purdue's home page that gives visitors a chance to customize their page",
  route: "/work/purdue-home-page",
  thumb: Thumb,
  tech: [
    "GulpJS",
    "HTML5",
    "responsive",
    "SASS",
    "PostCSS",
    "Browserify",
    "Watchify",
    "lazy loading",
    "ARIA",
    "PHP",
  ],
};

const PurdueHomePage = () => {
  return (
    <ContentContainer>
      <Typography variant="h1">Purdue Home Page</Typography>
    </ContentContainer>
  );
};

export default PurdueHomePage;
