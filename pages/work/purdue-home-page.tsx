import CodeSectionJsAccessibility from "code-sections/js-accessibility-0.mdx";
import CodeSectionScssAccessibility1 from "code-sections/scss-accessibility-1.mdx";
import CodeSectionScssAccessibility2 from "code-sections/scss-accessibility-2.mdx";
import ContentContainer from "components/ContentContainer";
import Head from "components/Head";
import Image from "components/Image";
import Link from "components/Link";
import Typography from "components/Typography";
import VideoPlayer from "components/VideoPlayer";
import type { WorkItemDefinition } from "components/WorkItem";
import WorkOverview from "components/WorkOverview";
import Thumb from "images/portfolio_purdueHomePage-thumb.png";
import ImageCustomizeHomePagePoster from "images/purdueHomePage_customize-poster.png";
import ImageOg from "images/purdueHomePage_ogImage.png";
import ImageHomePageOverview from "images/purdueHomePage_overview.png";

export const definition: WorkItemDefinition = {
  title: "Purdue Home Page Redesign",
  roles: ["Front-End Development", "CMS Implementation"],
  blurb:
    "a revamp of Purdue's home page that gives visitors a chance to customize their page",
  route: "/work/purdue-home-page",
  thumb: Thumb,
  tech: [
    "GulpJS",
    "HTML5",
    "responsive",
    "SASS",
    "PostCSS",
    "Browserify",
    "Watchify",
    "lazy loading",
    "ARIA",
    "PHP",
  ],
};

const PurdueHomePage = () => {
  return (
    <ContentContainer>
      <Head
        description="A revamp of Purdue's home page, developed by Jacob Venable, that gives visitors a chance to customize their page."
        ogImage={{
          alt: "screenshot of the Purdue home page redesign",
          src: ImageOg.src,
        }}
        title="Purdue Home Page Redesign"
      />
      <Typography variant="h1">Purdue Home Page</Typography>
      <WorkOverview
        responsibilities={[
          "review design for accessibility issues",
          "use Git and GitHub for version control and tracking progress",
          "implement custom features according to WCAG 2.0",
          "test for browser inconsistencies",
          "implement all content management within Cascade Server",
        ]}
        tech={{
          "Task Runner": "Gulp.js",
          CSS: "new components structured with BEM and written/compiled in SCSS",
          JS: "JS modules bundled with Browserify + Watchify and minified via Uglify",
          "Back-end": "PHP for handling scheduled components",
          CMS: "UI built & data stored in Cascade Server and compiled via Apache Velocity",
        }}
      />
      <Image
        alt="screenshot of features added to the Purdue home page"
        fullPageWidth
        src={ImageHomePageOverview}
      />
      <section aria-labelledby="dev">
        <Typography id="dev" variant="h2">
          Development Notes
        </Typography>
        <Typography underline variant="h3">
          Customization Feature
        </Typography>
        <Typography variant="h4">Background</Typography>
        <Typography>
          From the very beginning, the team wanted the Purdue home page to be a
          door to the University that quickly sent the user where they wanted to
          go. In the previous iteration of the home page, the main content
          consisted completely of featured links. These links were chosen by our
          team based on the date and/or analytics. The difficulty with choosing
          these links came in determining the audience we were catering to.
        </Typography>
        <Typography>
          Often, we would decide that prospective and/or current students were
          the main audience and choose links accordingly; however, we would then
          receive complaints/requests from other organizations on campus that
          desired something more alumni-focused or faculty/staff-focused.
        </Typography>
        <Typography variant="h4">Solution</Typography>
        <Typography>
          To handle the numerous audiences, we decided to give our users a way
          of self-identifying to filter relevant links, and allow them to
          determine what they want to see on the home page.
        </Typography>
        <VideoPlayer
          id="purdue-customize-home-page"
          poster={ImageCustomizeHomePagePoster.src}
          src="/videos/customize.mp4"
          title="Customization in Action"
        />
        <Typography variant="h4">Implementation</Typography>
        <Typography>
          When determining how to go about implementing this feature, I had
          considered using a JS framework, such as React or Angular, to generate
          that portion of the page. In the end, I decided that it would be
          better to not add an entire framework that would only be used on a
          small portion of the page. Since the Purdue templates were already
          &quot;married&quot; to jQuery via Bootstrap, it was better to instead
          create JS modules, using Browserify, for the various elements:
        </Typography>
        <ul>
          <li>tiles</li>
          <li>customization button</li>
          <li>modal</li>
          <li>custom audience dropdown</li>
          <li>checkboxes</li>
        </ul>
        <Typography>
          The above modules act similarly to components in React. Unfortunately,
          I didn&apos;t have the benefit of using React&apos;s virtual DOM, so I
          needed to implement some measures to improve performance.
        </Typography>
        <Typography variant="h4">Performance</Typography>
        <Typography>
          To improve performance, I decided to have each module interact with
          the DOM as little as possible. Modal states, checkbox states, checkbox
          visibility, etc. were all stored as properties of a module. Instead of
          reading the DOM to determine whether a checkbox was checked or
          unchecked, I was able to access the property value and have the script
          act accordingly. All animations were implemented via CSS and activated
          by class toggling.
        </Typography>
        <Typography variant="h4">Accessibility</Typography>
        <Typography>
          One of the more time consuming elements of this update was ensuring
          that the customization met accessibility standards.
        </Typography>
        <h5>Keyboard Support</h5>
        <Typography>
          Ensuring there were easily identifiable focus styles on each element
          of the page was simple with CSS. Usually, I would just add CSS
          properties applied on hover while also implementing an extra visual
          identifier such as an outline.
        </Typography>
        <CodeSectionScssAccessibility1 />
        <Typography>
          The issue with this approach is that you may not want to apply focus
          styles for every focused element. For example, when a user would open
          a dropdown, it would apply a focus style to the toggler. We wanted
          this focus style to appear for keyboard navigators, but not for mouse
          navigators.
        </Typography>
        <Typography>
          To only apply focus styles for keyboard users, I implemented a script
          that toggled a class on an element if it was interacted with via a
          mouse.
        </Typography>
        <CodeSectionJsAccessibility />
        <Typography>
          Now that we have identified when an element has been interacted with
          via a mouse, we can implement CSS to prevent focus styles from
          displaying.
        </Typography>
        <CodeSectionScssAccessibility2 />
        <Typography>
          Other keyboard support features included implementing the recommended
          keyboard controls for custom elements listed in{" "}
          <Link href="https://www.w3.org/TR/wai-aria-practices-1.1/">
            WAI-ARIA Best Authoring Practices
          </Link>
          . More information about using those best practices can be found in
          the next section.
        </Typography>
        <h5>Screen Reader Support</h5>
        <Typography>
          While the tiles being customized are easily interacted with as links,
          the customization modal was an entirely different story. Modals
          aren&apos;t pre-baked into browsers, so it was important to build a
          way to communicate with screen-reader-users about how to interact with
          the customization component. On top of that, the design called for
          creating custom elements that mimicked elements pre-built into the
          browser.{" "}
        </Typography>
        <Typography>
          Luckily, there is already a way to communicate this through{" "}
          <Link href="https://www.w3.org/TR/wai-aria-1.1/">
            Accessible Rich Internet Applications
          </Link>{" "}
          (ARIA). By following{" "}
          <Link href="https://www.w3.org/TR/wai-aria-practices-1.1/">
            WAI-ARIA Best Authoring Practices
          </Link>
          , I was able to setup these custom elements in a way that users would
          expect. The following patterns were most useful:
        </Typography>
        <ul>
          <li>
            <Link href="https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal">
              Dialog (Modal)
            </Link>{" "}
            &#8212; used when setting up the modal
          </li>
          <li>
            <Link href="https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox">
              Checkbox
            </Link>{" "}
            &#8212; used when creating the custom checkbox elements
          </li>
          <li>
            <Link href="https://www.w3.org/TR/wai-aria-practices-1.1/#Listbox">
              Listbox
            </Link>{" "}
            &#8212; used when creating the custom dropdown element
          </li>
        </ul>
      </section>
    </ContentContainer>
  );
};

export default PurdueHomePage;
