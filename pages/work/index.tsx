import { definition as BoilerLifeDefinition } from "./boiler-life";
import { definition as Life360Definition } from "./life-360";
import { definition as PccrDefinition } from "./pccr-40th-anniversary";
import { definition as PortfolioGatsbyDefinition } from "./portfolio-gatsby";
import { definition as PurdueConferencesDefinition } from "./purdue-conferences";
import { definition as PurdueHomePageDefinition } from "./purdue-home-page";
import { definition as PurdueTemplatesDefinition } from "./purdue-templates";
import ContentContainer from "components/ContentContainer";
import Head from "components/Head";
import TriangleMask from "components/TriangleMask";
import WorkItem, { WorkItemDefinition } from "components/WorkItem";

const workItemDefintions: WorkItemDefinition[] = [
  PortfolioGatsbyDefinition,
  PurdueConferencesDefinition,
  PurdueHomePageDefinition,
  PccrDefinition,
  PurdueTemplatesDefinition,
  Life360Definition,
  BoilerLifeDefinition,
];

const WorkPage = () => {
  return (
    <ContentContainer>
      <Head
        description="Examples of Jacob Venable's past projects including web sites and applications."
        title="My Work"
      />
      <h1>My Work</h1>
      {workItemDefintions.map((workItem, index) => (
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
