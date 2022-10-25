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
    "MongoDB",
    "Mongoose",
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
          Database: "MongoDB + Mongoose",
        }}
      />
      <Typography>
        In late 2018, I joined Code for Boulder, a brigade of{" "}
        <Link href="https://codeforamerica.org/">Code for America</Link>, with
        the goal of improving my development skills while contributing to the
        community. The brigade was comprised of volunteers from different
        professions with similar aspirations.
      </Typography>
      <section aria-labelledby="dev">
        <Typography id="dev" variant="h2">
          Development Notes
        </Typography>
        <Typography underline variant="h3">
          Ionic to React
        </Typography>
        <Typography>
          UpSwyng had started as a prototype developed during a hackathon using{" "}
          <Link href="https://ionicframework.com/">Ionic</Link> (v1). There
          wasn&apos;t an initial technical issue with using this framework, but
          it was contributing to the challenge of recruitment. Since Code for
          Boulder was run by volunteers, many of the volunteers attending
          meetings were looking to gain experience that would help them find a
          job.
        </Typography>
        <Typography>
          <mark>
            Popularity shouldn&apos;t be the deciding factor when choosing a
            tool
          </mark>
          , but it became clear that it was a major hinderance to recruitment.
          After deliberation, we decided that the amount of progress made on the
          project didn&apos;t prevent us from partially starting over with
          React, which was a popular tool that was familiar to the current team.
          with. It didn&apos;t provide us the ability to create a native
          application like Ionic, but we settled with eventually making it a
          progressive web application.
        </Typography>
        <Typography underline variant="h3">
          Introduction of Sapper + Svelte
        </Typography>
        <Typography underline variant="h3">
          Site Search with Algolia
        </Typography>
      </section>
    </ContentContainer>
  );
};

export default UpswyngPage;
