import ContentContainer from "components/ContentContainer";
import Typography from "components/Typography";
import type { WorkItemDefinition } from "components/WorkItem";
import Thumb from "images/portfolio_purdueTemplates-thumb.png";

export const definition: WorkItemDefinition = {
  title: "Purdue Web Templates (Ongoing)",
  roles: ["Front-End Development", "CMS Implementation"],
  blurb:
    "the official web templates provided by the Office of Marketing and Media",
  route: "/work/purdue-templates",
  thumb: Thumb,
  tech: [
    "GulpJS",
    "HTML5",
    "responsive",
    "SASS",
    "PostCSS",
    "Cascade Server (CMS)",
  ],
};

const PurdueTemplatesPage = () => {
  return (
    <ContentContainer>
      <Typography variant="h1">Purdue Templates</Typography>
    </ContentContainer>
  );
};

export default PurdueTemplatesPage;
