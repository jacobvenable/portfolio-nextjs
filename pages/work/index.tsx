import { definition as PortfolioGatsbyDefinition } from "./portfolio-gatsby";
import { definition as PurdueConferencesDefinition } from "./purdue-conferences";
import ContentContainer from "components/ContentContainer";
import Head from "components/Head";
import TriangleMask from "components/TriangleMask";
import WorkItem from "components/WorkItem";

const workItems = [PortfolioGatsbyDefinition, PurdueConferencesDefinition];

const WorkPage = () => {
  return (
    <ContentContainer>
      <Head
        description="Examples of Jacob Venable's past projects including web sites and applications."
        title="My Work"
      />
      <h1>My Work</h1>
      {workItems.map((workItem, index) => (
        <WorkItem
          key={workItem.title}
          reverse={index % 2 !== 0}
          {...workItem}
        />
      ))}
      <TriangleMask />
    </ContentContainer>
  );
};

export default WorkPage;
