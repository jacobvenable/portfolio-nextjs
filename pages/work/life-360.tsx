import ContentContainer from "components/ContentContainer";
import Typography from "components/Typography";
import type { WorkItemDefinition } from "components/WorkItem";
import Thumb from "images/portfolio_life360-thumb.jpg";

export const definition: WorkItemDefinition = {
  title: "Life 360",
  roles: ["Front-End Development"],
  blurb:
    "custom-built magazine site to showcase people, places and events from across the College of Health and Human Sciences",
  route: "/work/life-360",
  thumb: Thumb,
  tech: [
    "GulpJS",
    "HTML5",
    "responsive",
    "PostCSS",
    "cssnext",
    "vanilla JS",
    "lazy loading",
  ],
};

const Life360Page = () => {
  return (
    <ContentContainer>
      <Typography variant="h1">Life 360</Typography>
    </ContentContainer>
  );
};

export default Life360Page;
