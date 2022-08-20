import ContentContainer from "components/ContentContainer";
import Head from "components/Head";
import Image from "components/Image";
import Stack from "components/Stack";
import Typography from "components/Typography";
import type { WorkItemDefinition } from "components/WorkItem";
import WorkOverview from "components/WorkOverview";
import ImageContentDesktop1 from "images/pccr40thAnniversary_content1-desktop.png";
import ImageContentDesktop2 from "images/pccr40thAnniversary_content2-desktop.png";
import ImageHomeDesktop from "images/pccr40thAnniversary_home-desktop.png";
import ImageOg from "images/pccr40thAnniversary_ogImage.png";
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
      <Head
        description="A site, developed by Jacob Venable, celebrating the 40th anniversary of the Purdue Center for Cancer Research."
        ogImage={{
          src: ImageOg.src,
          alt: "screenshot of the PCCR 40th Anniversary site",
        }}
        title="PCCR 40th Anniversary Celebration"
      />
      <Typography variant="h1">PCCR 40th Anniversary Site</Typography>
      <Typography variant="tagline">
        a site celebrating the 40th anniversary of the Purdue Center for Cancer
        Research
      </Typography>
      <WorkOverview
        responsibilities={[
          "review design for accessibility issues",
          "use Git and GitHub for version control and tracking progress",
          "develop the site based on a given Photoshop document",
          "test for browser inconsistencies",
          "implement the site within the CMS",
          "setup the CMS to output site content as XML to be used in digital signs across campus",
          "train individuals in uploading content for weekly updating",
        ]}
        tech={{
          "Task Runner": "Gulp.js",
          CSS: "flexbox and grid layout structured with BEM and ITCSS",
          JS: "vanilla JS bundled with Browserify and Watchify",
        }}
      />
      <Stack direction="vertical">
        <Image alt="screenshot of the home page" src={ImageHomeDesktop} />
        <Image alt="screenshot of the about page" src={ImageContentDesktop1} />
        <Image alt="screenshot of a story page" src={ImageContentDesktop2} />
      </Stack>
    </ContentContainer>
  );
};

export default PccrAnniversaryPage;
