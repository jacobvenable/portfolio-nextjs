import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CodeSectionHtmlAccessibility1 from "code-sections/html-accessibility-1.mdx";
import CodeSectionJsAccessibility1 from "code-sections/js-accessibility-1.mdx";
import CodeSectionJsAccessibility2 from "code-sections/js-accessibility-2.mdx";
import CodeSectionJsAccessibility3 from "code-sections/js-accessibility-3.mdx";
import CodeSectionJsAccessibility4 from "code-sections/js-accessibility-4.mdx";
import CodeSectionJsAccessibility5 from "code-sections/js-accessibility-5.mdx";
import CodeSectionGraphql1 from "code-sections/js-graphql-1.mdx";
import CodeSectionGraphql2 from "code-sections/js-graphql-2.mdx";
import CodeSectionGraphql3 from "code-sections/js-graphql-3.mdx";
import CodeSectionJsVideo from "code-sections/js-video-1.mdx";
import Button from "components/Button";
import ContentContainer from "components/ContentContainer";
import Link, { LinkProps } from "components/Link";
import Typography from "components/Typography";
import type { WorkItemDefinition } from "components/WorkItem";
import WorkOverview from "components/WorkOverview";
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
      <Typography variant="h1">Personal Portfolio (Previous)</Typography>
      <Typography variant="tagline">
        a previous version of my personal portfolio site built via GatsbyJS
      </Typography>
      <Button<LinkProps>
        color="yellow-light"
        component={Link}
        href="https://github.com/jacobvenable/portfolio-gatsby/"
        variant="hollow"
      >
        <Typography variant="sr-only">View GitHub Repository</Typography>
        <FontAwesomeIcon icon={faGithub} />
      </Button>
      <WorkOverview
        responsibilities={[
          "create the design of the site using a combination of Adobe Photoshop and Adobe Illustrator with accessibility in mind",
          "write content",
          "use Git and GitHub for version control and tracking progress",
          "develop React components to be used within GatsbyJS",
          "test for browser inconsistencies",
        ]}
        tech={{
          "Static Site Generator": "GatsbyJS",
          CSS: "flexbox and grid layout structured with BEM and ITCSS",
          "JS and Framework": "ES6 JS + React",
        }}
      />
      <section aria-labelledby="dev">
        <Typography id="dev" variant="h2">
          Development Notes
        </Typography>
        <Typography>
          In early 2018, I started teaching myself (and falling in love with){" "}
          <Link href="https://reactjs.org/">React</Link>. Since I was in
          desperate need for an updated personal portfolio, I wanted to find a
          way to fit React into the equation. While I could create a single page
          application for my portfolio, it didn&apos;t really do me any favors
          in terms of SEO. That&apos;s when I stumbled upon{" "}
          <Link href="https://www.gatsbyjs.org/">GatsbyJS</Link>.
        </Typography>
        <Typography underline variant="h3">
          GatsbyJS
        </Typography>
        <Typography>
          Gatbsy is a React-based static site generator, meaning it can create a
          site with multiple pages using React components. Basically, each
          individual page within the site is its own component that you can
          import other components into. Using each component&apos;s render
          method, Gatsby will build the page as a static HTML document.
        </Typography>
        <Typography>
          For example, some components I created to be used on each page of this
          site include the following:
        </Typography>
        <ul>
          <li>
            <Link href="https://github.com/jacobvenable/portfolio-gatsby/blob/master/src/components/Head.js">
              Head
            </Link>{" "}
            &#8212; a component used to set some needed metadata on each page
          </li>
          <li>
            <Link href="https://github.com/jacobvenable/portfolio-gatsby/blob/master/src/components/Header.js">
              Header
            </Link>{" "}
            &#8212; a component containing the JSX of the header displayed on
            each page
          </li>
          <li>
            <Link href="https://github.com/jacobvenable/portfolio-gatsby/blob/master/src/components/Footer.js">
              Footer
            </Link>{" "}
            &#8212; a component containing the JSX of the footer displayed on
            each page
          </li>
        </ul>
        <Typography variant="h4">Dynamic Components</Typography>
        <Typography>
          The nice thing about Gatsby is that you can still use React to create
          dynamic elements. An example of a dynamic component created for my
          portfolio was{" "}
          <Link href="https://github.com/jacobvenable/portfolio-gatsby/blob/master/src/components/Video.js">
            Video
          </Link>
          , a custom video player.
        </Typography>
        <Typography>
          While the video player itself is inserted into the static page via its
          render method, controlling the video is all handled using built-in
          methods.
        </Typography>
        <CodeSectionJsVideo />
        <Typography>
          In the example above, the video players is dynamically controlled via
          the click event placed on the play/pause button. If needed, you could
          even go further and import other components dynamically.
        </Typography>
        <Typography variant="h4">GraphQL</Typography>
        <Typography>
          Another bonus to using GatsbyJS is the ability to query your
          site&apos;s data via GraphQL. This means you can dynamically query
          your pages, markdown files, images, etc. and use that data to output
          content. When combined with some of{" "}
          <Link href="https://www.gatsbyjs.org/plugins/">GatsbyJS plugins</Link>
          , you have a lot of flexibility.
        </Typography>
        <Typography>
          An example where this came in handy for this site was dynamically
          generating the main <Link href="/work">work page</Link>. I didn&apos;t
          want to have to add a new piece of work manually; instead, I decided
          it would be better to query all my work pages, and insert the items
          automatically.
        </Typography>
        <Typography>
          To accomplish this, I combined a GraphQL query and the{" "}
          <Link href="https://www.gatsbyjs.org/packages/gatsby-transformer-javascript-frontmatter/?=frontmatter">
            gatsby-transformer-javascript-frontmatter plugin
          </Link>
          . At the top of each individual work page, I placed a snippet like the
          one below (this is the snippet placed for this page).
        </Typography>

        <CodeSectionGraphql1 />
        <Typography>
          Then on the main work page I create a GraphQL query to grab the
          frontmatter placed on each individual work page.
        </Typography>
        <CodeSectionGraphql2 />
        <Typography>
          The data from the query can then be used within the page by passing an
          object containing &apos;data&apos;. As shown in the example above, I
          created a{" "}
          <Link href="https://github.com/jacobvenable/portfolio-gatsby/blob/master/src/components/PortfolioItems.js">
            PortofolioItems
          </Link>{" "}
          component to handle the data.
        </Typography>
        <Typography>
          Finally, within the PortfolioItems component, I created a loop through
          each returned asset of the query and passed that data individually to
          a component that is used to display the invidiual work item.
        </Typography>
        <CodeSectionGraphql3 />
        <Typography underline variant="h3">
          Accessibility
        </Typography>
        <Typography>
          Another feature I wanted to implement were some easily reusable
          components made with ARIA best practices built-in. An example of this
          is the{" "}
          <Link href="https://github.com/jacobvenable/portfolio-gatsby/blob/master/src/components/Accordions/index.js">
            Accordions component
          </Link>
          . When building this, I had the following goals:
        </Typography>
        <ol>
          <li>
            progressively enhance the component to ensure that all content is
            visible if JavaScript is not enabled
          </li>
          <li>make it easy to create a group of accordions</li>
          <li>ensure accordions can be added to any style of elements</li>
          <li>
            have the accordions follow{" "}
            <Link href="https://www.w3.org/TR/wai-aria-practices-1.1/#accordion">
              ARIA best practices for accordions
            </Link>
            :
            <ul>
              <li>a header that controls showing/hiding content</li>
              <li>a panel which is the content that shown/hidden</li>
              <li>when one accordion group is opened, the rest are closed</li>
            </ul>
          </li>
        </ol>
        <Typography variant="h4">Goal 1: Progressively Enhance</Typography>
        <Typography>
          To accomplish goal 1, I decided that an accordion group should just
          display as a normal heading and content pair. If JavaScript is
          disabled, the content will appear to be organized normally by
          headings.
        </Typography>
        <Typography>
          For the markup I settled on something similar to the section below.
        </Typography>
        <CodeSectionJsAccessibility1 />
        <Typography>
          Using CSS, I would then style the buttons to appear as headings.
        </Typography>
        <Typography variant="h4">Goal 2: Make it Easy</Typography>
        <Typography>
          Instead of passing multiple props to one Accordions component, I
          decided it would be easiest to have the component build each
          individual accordion group itself. This process was quite lengthy, but
          made implementing new Accordions components a breeze.
        </Typography>
        <CodeSectionJsAccessibility2 />
        <Typography>
          For full implementation, see the full constructor method on the{" "}
          <Link href="https://github.com/jacobvenable/portfolio-gatsby/blob/master/src/components/Accordions/index.js">
            Accordions component
          </Link>
          . At this point, the component has now stored each accordion
          button-panel group and can now be setup to properly handle
          showing/hiding content.
        </Typography>
        <Typography variant="h4">Goal 3: Flexibility of Style</Typography>
        <Typography>My plan was to use accordions in two places:</Typography>
        <ul>
          <li>
            the FAQ section of the <Link href="/">home page</Link>
          </li>
          <li>
            the main content of the <Link href="/skills/">skills page</Link>
          </li>
        </ul>
        <Typography>
          While the implementation of show/hide functionality is the same, the
          way they are displayed is quite different. This meant it would be best
          to allow specifying the classes that are added/removed depending on
          element visibility. To accomplish this, I added properties to the
          Accordions component:
        </Typography>
        <ul>
          <li>
            classButtonToggle &#8212; the class added to a button when it&apos;s
            corresponding content panel is visible
          </li>
          <li>
            classContent &#8212; the initial class added to a content panel
            since these elements are dynamically generated
          </li>
          <li>
            classContentToggle &#8212; the class added to a content panel when
            it&apos;s visible
          </li>
        </ul>
        <CodeSectionJsAccessibility3 />
        <Typography>
          Now, I can create a group of accordions using any combination of CSS
          classes and therefore any styling.
        </Typography>
        <Typography variant="h4">Goal 4: ARIA Best Practices</Typography>
        <Typography>
          Once we had already accomplished dynamically creating accordion
          button-panel groups is goal 2, ensuring we follow{" "}
          <Link href="https://www.w3.org/TR/wai-aria-practices-1.1/#accordion">
            ARIA best practices for accordions
          </Link>{" "}
          was easy.
        </Typography>
        <Typography variant="h5">
          Requirement: Keyboard Enter or Space
        </Typography>
        <Typography>
          From the Web Accessibility Initiative (WAI)-ARIA best practices:
        </Typography>
        <blockquote>
          When focus is on the accordion header for a collapsed panel, expands
          the associated panel. If the implementation allows only one panel to
          be expanded, and if another panel is expanded, collapses that panel.
        </blockquote>
        <Typography>
          Buttons can be activated via the enter or space key by default.
        </Typography>
        <Typography variant="h5">
          Requirement: Keyboard Tab and Shift + Tab
        </Typography>
        <Typography>From the WAI-ARIA best practices:</Typography>
        <blockquote>
          <Typography>
            Tab: Moves focus to the next focusable element; all focusable
            elements in the accordion are included in the page Tab sequence.
          </Typography>
          <Typography>
            Shift + Tab: Moves focus to the previous focusable element; all
            focusable elements in the accordion are included in the page Tab
            sequence.
          </Typography>
        </blockquote>
        <Typography>
          Buttons are also part of the document&apos;s tab order by default so
          this is also already built-in.
        </Typography>
        <Typography variant="h5">Requirement: Roles</Typography>
        <Typography>From the WAI-ARIA best practices:</Typography>
        <blockquote>
          Each accordion header button is wrapped in an element with role
          heading that has a value set for aria-level that is appropriate for
          the information architecture of the page.
        </blockquote>
        <Typography>
          This was simple update to the button markup we provide the Accordion
          component.
        </Typography>
        <CodeSectionHtmlAccessibility1 />
        <Typography variant="h5">Requirement: States</Typography>
        <Typography>From the WAI-ARIA best practices:</Typography>
        <blockquote>
          If the accordion panel associated with an accordion header is visible,
          the header button element has aria-expanded set to true. If the panel
          is not visible, aria-expanded is set to false.
        </blockquote>
        <Typography>
          This was easily accomplished using React&apos;s state property.
        </Typography>
        <CodeSectionJsAccessibility4 />
        <Typography>
          The open property is then updated depending on whether its associated
          panel is shown/hidden.
        </Typography>
        <Typography variant="h5">Requirement: Properties</Typography>
        <Typography>From the WAI-ARIA best practices:</Typography>
        <blockquote>
          The accordion header button element has aria-controls set to the ID of
          the element containing the accordion panel content.
        </blockquote>
        <Typography>
          I actually already needed to create a unique ID for both the button
          and panel for the{" "}
          <Link href="https://reactjs.org/docs/lists-and-keys.html#keys">
            key property
          </Link>{" "}
          since I place them all in one array.
        </Typography>
        <CodeSectionJsAccessibility5 />
        <Typography>From the WAI-ARIA best practices:</Typography>
        <blockquote>
          If the accordion panel associated with an accordion header is visible,
          and if the accordion does not permit the panel to be collapsed, the
          header button element has aria-disabled set to true.
        </blockquote>
        <Typography>
          Since my implementation will allow all panels to be hidden, this is
          not an issue.
        </Typography>
        <Typography variant="h4">Conclusion</Typography>
        <Typography>
          In the end I feel that I was successful in accomplishing the
          accessibility implementation goals; however, I&apos;m a bit hesitant
          to say that this would work for every situation.
        </Typography>
        <Typography>
          In this process, I did make extensive use of{" "}
          <Link href="https://reactjs.org/docs/refs-and-the-dom.html">
            React refs
          </Link>{" "}
          to make calling sub-component methods easier. For accordions in a
          single page application, I may combine the sub-components into a
          single component instead.
        </Typography>
      </section>
    </ContentContainer>
  );
};

export default PortfolioGatsbyPage;
