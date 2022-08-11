import type { WorkItemDefinition } from "components/WorkItem";
import Thumb from "images/portfolio_gatsby-thumb.png";

export const definition: WorkItemDefinition = {
  title: "Personal Portfolio",
  roles: ["Front-End Development"],
  blurb: "my personal portfolio site (the one you're looking at now)",
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

const PortfolioGatsby = () => null;

export default PortfolioGatsby;
