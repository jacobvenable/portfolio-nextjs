import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "components/Button";
import ContentContainer from "components/ContentContainer";
import Head from "components/Head";
import Image from "components/Image";
import Link, { LinkProps } from "components/Link";
import Typography from "components/Typography";
import type { WorkItemDefinition } from "components/WorkItem";
import WorkOverview from "components/WorkOverview";
import Thumb from "images/portfolio_upswyng-thumb.png";
import ImageHomeMobile from "images/upswyng_home-mobile.png";

export const definition: WorkItemDefinition = {
  title: "UpSwyng",
  roles: ["Full-Stack Development", "Project Management"],
  blurb:
    "an open source, digital directory of resources to assist the unhoused and at-risk communities",
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
        description="An overview of UpSwyng, an open source, digital directory of resources to assist the unhoused and at-risk communities."
        title="Personal Portfolio (Previous)`"
      >
        <meta content="noindex" name="robots" />
      </Head>
      <Typography variant="h1">UpSwyng</Typography>
      <Typography variant="tagline">
        an open source, digital directory of resources to assist the unhoused
        and at-risk communities
      </Typography>
      <Button<LinkProps>
        color="primary"
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
      <Image
        alt="UpSwyng's home page on a phone containing a search input and food, shelter, hygiene, transit, resources, hotlines, health, Wifi, job training, social services, and coordinated entry buttons"
        caption="the home page of the directory application"
        fullPageWidth
        src={ImageHomeMobile}
      />
      <section aria-labelledby="dev">
        <Typography id="dev" variant="h2">
          Development Notes
        </Typography>
        <Typography>
          In late 2018, I joined Code for Boulder, a brigade of{" "}
          <Link href="https://codeforamerica.org/">Code for America</Link>, with
          the goal of improving my development skills while contributing to the
          community. The brigade was comprised of volunteers from different
          professions with similar aspirations.
        </Typography>
        <Typography>
          The first project I was introduced to was UpSwyng, a mobile-ready,
          digital directory of resources to assist the unhoused and at-risk
          communities.
        </Typography>
        <Typography underline variant="h3">
          Ionic to React
        </Typography>
        <Typography>
          UpSwyng had started as a prototype developed during a hackathon using{" "}
          <Link href="https://ionicframework.com/">Ionic</Link> (v1). There
          wasn&apos;t an initial technical issue with using this framework, but
          it was contributing a different challenge. Code for Boulder was run by
          volunteers, and many of those volunteers were looking to gain
          experience that would help them find a job.
        </Typography>
        <Typography>
          <mark>
            Popularity shouldn&apos;t be the deciding factor when choosing a
            tool
          </mark>
          , but it became clear that Ionic&apos;s limited use by the industry
          was a major hinderance to recruitment. After deliberation, we decided
          that the amount of progress made on the project didn&apos;t prevent us
          from partially starting over with React, which was a popular tool that
          was familiar to the current team. with. It didn&apos;t provide us the
          ability to create a native application like Ionic, but we settled with
          eventually making it a progressive web application.
        </Typography>
        <Typography underline variant="h3">
          The Provider Portal
        </Typography>
        <Typography>
          Creating the directory application to surface resources to those in
          need was only a quarter of the battle, and there was a not a starting
          point for the largest feature of the project, the provider portal. The
          eventual goal of UpSwyng was to enable service providers to update
          their own listings as needed. This included quite a few features:
        </Typography>
        <ul>
          <li>
            an interface for providers to add, edit, and delete info about their
            service:
            <ul>
              <li>
                basic details such as the title, description, and services
              </li>
              <li>
                hours of operation, which ranged from weekly, monthly, and
                yearly listings
              </li>
              <li>the location of their establishment</li>
              <li>a street view of their establishment</li>
            </ul>
          </li>
          <li>
            a review interface for UpSwyng managers to prevent incorrect or
            malicious changes
          </li>
          <li>
            a scheduled message system for surfacing important community
            updates, such as those surrounding COVID-19
          </li>
          <li>
            API endpoints used by the provider portal to update the database and
            the directory application to read
          </li>
        </ul>
        <Typography>
          The provider portal team settled on using{" "}
          <Link href="https://sapper.svelte.dev/">Sapper</Link>. Sapper is a web
          framework, powered by <Link href="https://svelte.dev/">Svelte</Link>,
          which uses filesystem-based routing to build both client and API
          routes.
        </Typography>
        <Typography variant="h4">Pros</Typography>
        <ul>
          <li>
            simple setup and plenty of documentation to get started quickly
          </li>
          <li>
            Filesystem-based routing made navigating the project simpler for new
            volunteers.
          </li>
          <li>
            A lot of performance optimization was handled by the framework
            out-of-the-box.
          </li>
          <li>
            Svelte was, at the time, the hot new tool that made working on the
            project more appealing.
          </li>
        </ul>
        <Typography variant="h4">Cons</Typography>
        <ul>
          <li>
            Using separate front-end frameworks meant UI components
            couldn&apos;t be shared between the provider portal and directory
            application.
          </li>
          <li>
            Context switching for developers working on both applications added
            overhead.
          </li>
          <li>
            Compared to React, Svelte had far fewer packages, which could be
            utilized to speed-up development.
          </li>
          <li>
            Since Svelte was a new tool, it was also daunting for some
            volunteers to commit learning.
          </li>
        </ul>
        <Typography variant="h4">Conclusion</Typography>
        <Typography>
          Overall, I believe the choice to use Sapper was a sound one. Our real
          mistake was choosing different frameworks for the provider portal, and
          the directory application. Given the opportunity to start over, I
          would either go all in on using Sapper for both applications, or
          chosen a similar framework like{" "}
          <Link href="https://nextjs.org/">NextJS</Link>, which was React based.
        </Typography>
      </section>
      <section aria-labelledby="project-management">
        <Typography id="project-management" variant="h2">
          Project Management Notes
        </Typography>
        <Typography>
          I learned quite a bit developing for UpSwyng but I learned even more
          being its project manager.
        </Typography>
        <Typography underline variant="h3">
          Define a MVP
        </Typography>
        <Typography>
          The most important lesson I learned was to make sure you determine the
          absolute minimum your product can do to provide value to its users.
        </Typography>
        <Typography>
          Above, I mentioned that one of the features of the provider portal was
          &quot;a scheduled message system for surfacing important community
          updates&quot;. At the time, rotating emergency overflow shelters were
          made available in the winter depending on temperature and
          precipitation. The decision to open those shelters in the evening was
          made the morning of the same day. The point of the messaging system
          was to inform users if and where they would be made available.
        </Typography>
        <Typography>
          Our goal was to release UpSwyng by winter 2018. We didn&apos;t release
          until fall 2019. The reality is UpSwyng shouldn&apos;t have released
          as a web application. It should have released as a notification
          system. Had we taken a step back and considered the bare minimum at
          the beginning of the project, we would have provided something of high
          value and most likely less work.
        </Typography>
        <Typography>
          <em>
            NOTE: Boulder made emergency overflow shelters available without
            condition in the winter of 2019.
          </em>
        </Typography>
        <Typography underline variant="h3">
          Write Clear, Organized Tickets
        </Typography>
        <Typography>
          UpSwyng was my first go at managing an open-source project. We had a
          rotating door of volunteers and a fluctuating scope. Unsurprisingly,
          the most common question I received from contributors was,
          &quot;What&apos;s next?&quot;.
        </Typography>
        <Typography>
          I eventually came to rely on a number of tools and techiques to
          support volunteers:
        </Typography>
        <ul>
          <li>
            For developers, I mostly utilized GitHub for writing tickets:
            <ul>
              <li>
                tickets were written as issues so they could be categorized
                using labels
              </li>
              <li>
                issues were then added to a GitHub Project, which to generated a
                Kanban board, marking the current status of work
              </li>
            </ul>
          </li>
          <li>
            For other contributors, tickets were created as part of a{" "}
            <Link href="https://trello.com/en">Trello</Link> Kanban board
          </li>
          <li>
            Tickets typically had the following properties:
            <ul>
              <li>a brief description of the current problem</li>
              <li>the goal of the current ticket</li>
              <li>
                specific tasks that would need completed (acceptance criteria)
              </li>
              <li>
                supportive material including links to repository files and
                screenshots
              </li>
            </ul>
          </li>
          <li>
            Weekly meetings started with a review of current work and requests
            for support where needed (standup).
          </li>
        </ul>
        <Typography>
          Before I implemented the above, I learned that having poorly written
          tickets meant both me and contributors having less time to actually
          work on UpSwyng as well as losing some of those volunteers in the
          first place.
        </Typography>
      </section>
    </ContentContainer>
  );
};

export default UpswyngPage;
