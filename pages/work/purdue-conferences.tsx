import type { WorkItemDefinition } from "components/WorkItem";
import Thumb from "images/portfolio_purdueConferences-thumb.png";

export const definition: WorkItemDefinition = {
  title: "Purdue Conferences",
  roles: ["Front-End Development", "CMS Implementation"],
  blurb: "the main landing site for Purdue Conferences",
  route: "/work/purdue-conferences",
  tech: [
    "GulpJS",
    "HTML5",
    "responsive",
    "flexbox",
    "grid",
    "SCSS",
    "PostCSS",
    "BEM",
    "ITCSS",
    "vanilla JS",
    "lazy loading",
    "Browserify",
    "Watchify",
    "Handlebars",
  ],
  thumb: Thumb,
};

const PurdueConferences = () => null;

export default PurdueConferences;
