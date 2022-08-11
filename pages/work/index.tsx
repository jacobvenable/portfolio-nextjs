import { definition as PortfolioGatsbyDefinition } from "./portfolio-gatsby";
import ContentContainer from "components/ContentContainer";
import Head from "components/Head";
import WorkItem from "components/WorkItem";

const workItems = [PortfolioGatsbyDefinition];

const WorkPage = () => {
  return (
    <ContentContainer>
      <Head
        description="Examples of Jacob Venable's past projects including web sites and applications."
        title="My Work"
      />
      <h1>My Work</h1>
      {workItems.map((workItem) => (
        <WorkItem key={workItem.title} {...workItem} />
      ))}
    </ContentContainer>
  );
};

export default WorkPage;
