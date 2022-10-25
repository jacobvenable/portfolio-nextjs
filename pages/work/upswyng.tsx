import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "components/Button";
import ContentContainer from "components/ContentContainer";
import Head from "components/Head";
import Link, { LinkProps } from "components/Link";
import Typography from "components/Typography";
import type { WorkItemDefinition } from "components/WorkItem";
import WorkOverview from "components/WorkOverview";
import Thumb from "images/portfolio_upswyng-thumb.png";

export const definition: WorkItemDefinition = {
  title: "UpSwyng",
  roles: ["Full-Stack Development", "Project Management"],
  blurb:
    "a mobile-ready, digital directory of resources to assist the unhoused and at-risk communities",
  route: "/work/upswyng",
  thumb: Thumb,
  tech: [
    "TypeScript",
    "React",
    "MUI",
    "CSS in JS",
    "Jest",
    "React Testing Library",
    "Svelte",
    "Sapper",
  ],
};

const UpswyngPage = () => {
  return (
    <ContentContainer>
      <Head
        description="An overview of UpSwyng, a mobile-ready, digital directory of resources to assist the unhoused and at-risk communities."
        title="Personal Portfolio (Previous)"
      >
        <meta content="noindex" name="robots" />
      </Head>
      <Typography variant="h1">UpSwyng</Typography>
      <Typography variant="tagline">
        a mobile-ready, digital directory of resources to assist the unhoused
        and at-risk communities
      </Typography>
      <Button<LinkProps>
        color="yellow-light"
        component={Link}
        href="https://github.com/CodeForBoulder/upswyng"
        variant="hollow"
      >
        <Typography variant="sr-only">View GitHub Repository</Typography>
        <FontAwesomeIcon icon={faGithub} />
      </Button>
      <WorkOverview
        responsibilities={[
          "define and write stories for all aspects of feature work",
          "onboard and train new developers",
          "manage open source repository",
          "develop features using full-stack",
        ]}
        tech={{
          Languages: "TypeScript, JavaScript",
          "Front-End Frameworks": "React, Svelte",
          "CSS Libraries": "Material UI, Bulma",
          "Back-End Framework": "Sapper",
        }}
      />
      <section aria-labelledby="dev">
        <Typography id="dev" variant="h2">
          Development Notes
        </Typography>
      </section>
    </ContentContainer>
  );
};

export default UpswyngPage;
