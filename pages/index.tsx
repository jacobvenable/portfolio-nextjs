import About from "components/about";

const IndexPage = () => (
  // <Layout>
  // 	<Head
  // 		title="Home"
  // 		description="The portfolio of Jacob Venable, a senior front-end developer at Purdue University."
  // 	/>
  <div className="container">
    <About />
    <div className="accordion">
      {/* <Disclosure classButtonToggle="accordion__button--single-hidden" classButtonBlur="accordion__button--single-removed" classContent="accordion__content" classContentToggle="accordion__content--visible"> */}
      <button className="accordion__button accordion__button--single">
        Learn More About Me
        {/* <FontAwesomeIcon icon={faArrowAltDown} className="accordion__icon" /> */}
      </button>
      <h2>About Me</h2>
      <div className="overview">
        <div className="overview__section">
          <h3>
            {/* <FontAwesomeIcon icon={faBriefcase} className="heading__icon" />{" "} */}
            Work Experience
          </h3>
          <h4 className="heading--6">Senior Software Engineer</h4>
          <ul>
            <li>July 2021 - present</li>
            <li>Nutrien Ag Solutions</li>
          </ul>
          <h4 className="heading--6">Software Engineer</h4>
          <ul>
            <li>March 2019 - July 2021</li>
            <li>Nutrien Ag Solutions</li>
          </ul>
          <h4 className="heading--6">Senior Front-End Web Developer</h4>
          <ul>
            <li>July 2016 - March 2019</li>
            <li>Purdue University Office of Marketing and Media</li>
          </ul>
          <h4 className="heading--6">Web Developer</h4>
          <ul>
            <li>June 2014 - July 2016</li>
            <li>Purdue University Office of Marketing and Media</li>
          </ul>
          <h4 className="heading--6">Assistant Web Designer</h4>
          <ul>
            <li>May 2012 - May 2014</li>
            <li>Purdue Department of Forestry and Natural Resources</li>
          </ul>
          <h4 className="heading--6">Freelance Web Developer/Designer</h4>
          <ul>
            <li>January 2013 - November 2013</li>
            <li>Various Client Work</li>
          </ul>
        </div>
        <div className="overview__section">
          <h3>
            {/* <FontAwesomeIcon icon={faGraduationCap} className="heading__icon" />{" "} */}
            Education
          </h3>
          <dl>
            <dt>Diploma</dt>
            <dd>
              BS &#8212; Computer Graphics Technology (focused in web
              development)
            </dd>
            <dt>school</dt>
            <dd>Purdue University &#8212; College of Technology</dd>
            <dt>Minors</dt>
            <dd>Computer Science</dd>
            <dd>History</dd>
          </dl>
          <h3>
            {/* <FontAwesomeIcon icon={faStar} className="heading__icon" /> */}
            Hobbies
          </h3>
          <ul>
            <li>
              Reading: Believe it or not, I only just recently finished the
              entire Harry Potter series over the summer.
            </li>
            <li>
              CrossFit: I’ve been going to crossfit since February 2018 because
              I need someone to yell at me to work out.
            </li>
            <li>
              Hiking: Being originally a flat-lander from Indiana, I love
              soaking in the views of the Rocky Mountains.
            </li>
          </ul>
        </div>
      </div>
      <h2>FAQ</h2>
      {/* <Accordions classButtonToggle="accordion__button--open" classContent="accordion__content" classContentToggle="accordion__content--visible"> */}
      <button className="accordion__button" role="heading" aria-level={3}>
        Where are you based?{" "}
        {/* <FontAwesomeIcon icon={faArrowAltRight} className="accordion__icon" /> */}
      </button>
      <p>
        I currently live within driving distance of Boulder and Denver,
        Colorado. I have been working remotely for Purdue&apos;s Office of
        Marketing and Media, which is based in Indiana, since August 2017.
      </p>
      <button className="accordion__button" role="heading" aria-level="3">
        What exactly is it that you do?{" "}
        {/* <FontAwesomeIcon icon={faArrowAltRight} className="accordion__icon" /> */}
      </button>
      <p>
        In my current role as a senior front-end developer for Purdue Marketing
        and Media, I have a wide range of duties:
      </p>
      <ul>
        <li>
          create sites based on mockups provided by UX/UI designers (HTML, CSS,
          and JS)
        </li>
        <li>
          setup sites within the university&apos;s content management system
          (Cascade Server)
        </li>
        <li>train end-users in using the content management system</li>
        <li>
          setup and improve the team&apos;s development workflows and standards
        </li>
        <li>guide other web developers on the team</li>
      </ul>
      <p>
        In the end, I like to think of myself a problem-solver. If something
        doesn&apos;t work well or efficiently, I like to find out how to make it
        better, and it shows with the changes I&apos;ve made while at Purdue:
      </p>
      <ul>
        <li>implemented Gulp.js to automate the development workflow</li>
        <li>added SCSS to our toolkit to improve styles management</li>
        <li>
          created reusable patterns using BEM CSS class structuring reducing CSS
          specificity to 1 - 2 levels
        </li>
        <li>improved JS bundling to decrease page load times</li>
        <li>
          instituted and documented the development team’s Git branching model
          creating uniformity and accountability through code reviews
        </li>
        <li>
          developed an automatic, custom SVG parser within our CMS to eliminate
          developer intervention when implementing inline SVGs
        </li>
        <li>
          initiated and developed an improved UI within our content management
          system
        </li>
      </ul>
      <button className="accordion__button" role="heading" aria-level={3}>
        How did you get into web development?{" "}
        {/* <FontAwesomeIcon icon={faArrowAltRight} className="accordion__icon" /> */}
      </button>
      <p>
        Since my first programming class in high school, I&apos;ve known that
        I&apos;ve wanted to have a career in development. To move in that
        direction, I applied to and was accepted into Purdue University&apos;s
        Computer Science program.
      </p>
      <p>
        After a year in the program I learned there was a caveat to my career
        choice; it needed to be visually-rewarding. While the Computer Science
        program gave me a great foundation, I felt I was missing out on applying
        it. I looked around for something a bit more practical and decided to
        take an introduction to web development, which was part of the Computer
        Graphics Technology (CGT) program.
      </p>
      <p>
        Long story short, I fell in love with web development, switched to the
        CGT program, and the rest is history.
      </p>
      <button className="accordion__button" role="heading" aria-level={3}>
        What do you love about front-end development?{" "}
        {/* <FontAwesomeIcon icon={faArrowAltRight} className="accordion__icon" /> */}
      </button>
      <p>
        During my time at Purdue, I was exposed to and practiced various
        skillsets involved with creating a final product for the web:
      </p>
      <ul>
        <li>UI/UX research and design</li>
        <li>front-end development</li>
        <li>back-end development</li>
      </ul>
      <p>
        While each of these skillsets have some overlap and are interesting in
        their own way, front-end development was where I found a home. It is the
        perfect combination of <mark>creativity</mark> and <mark>logic</mark>{" "}
        while also having a <mark>visually-rewarding</mark> product as the
        end-result.
      </p>
      <button className="accordion__button" role="heading" aria-level={3}>
        How do you take your coffee?{" "}
        {/* <FontAwesomeIcon icon={faArrowAltRight} className="accordion__icon" /> */}
      </button>
      <p>
        Black&hellip; but sometimes I need to splurge on a dessert-in-a-cup
        mocha.
      </p>
      <button className="accordion__button" role="heading" aria-level={3}>
        Would you rather fight a horse-sized duck or a hundred duck-sized
        horses?{" "}
        {/* <FontAwesomeIcon icon={faArrowAltRight} className="accordion__icon" /> */}
      </button>
      <p>
        I would definitely fight a horse-sized duck. Battling a hundred of
        anything would be tiring.
      </p>
      {/* </Accordions> */}
      {/* </Disclosure> */}
    </div>
  </div>
  // </Layout>
);

export default IndexPage;
