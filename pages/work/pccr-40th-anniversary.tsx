import ContentContainer from "components/ContentContainer";
import Typography from "components/Typography";
import type { WorkItemDefinition } from "components/WorkItem";
import Thumb from "images/portfolio_pccr40thAnniversary-thumb.png";

export const definition: WorkItemDefinition = {
  title: "PCCR Anniversary Celebration",
  roles: ["Front-End Development"],
  blurb:
    "a site celebrating the 40th anniversary of the Purdue Center for Cancer Research",
  route: "/work/pccr-40th-anniversary",
  thumb: Thumb,
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
    "Browserify",
    "Watchify",
  ],
};

const PccrAnniversaryPage = () => {
  return (
    <ContentContainer>
      <Typography variant="h1">PCCR 40th Anniversary Site</Typography>
    </ContentContainer>
  );
};

export default PccrAnniversaryPage;
