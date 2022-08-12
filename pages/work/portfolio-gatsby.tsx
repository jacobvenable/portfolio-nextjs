import ContentContainer from "components/ContentContainer";
import Typography from "components/Typography";
import type { WorkItemDefinition } from "components/WorkItem";
import Thumb from "images/portfolio_gatsby-thumb.png";

export const definition: WorkItemDefinition = {
  title: "Personal Portfolio (Previous)",
  roles: ["Front-End Development"],
  blurb: "a previous version of my personal portfolio site",
  route: "/work/portfolio-gatsby",
  thumb: Thumb,
  tech: [
    "React",
    "GatsbyJS",
    "HTML5",
    "responsive",
    "flexbox",
    "grid",
    "SCSS",
    "BEM",
    "ITCSS",
    "GraphQL",
  ],
};

const PortfolioGatsbyPage = () => {
  return (
    <ContentContainer>
      <Typography variant="h1">Personal Portfolio (Past)</Typography>
    </ContentContainer>
  );
};

export default PortfolioGatsbyPage;
