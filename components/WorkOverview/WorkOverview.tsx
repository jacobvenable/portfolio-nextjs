import { faClipboardList, faToolbox } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import styles from "./WorkOverview.module.scss";
import Grid from "components/Grid";
import Typography from "components/Typography";

type WorkOverviewProps = {
  responsibilities: string[];
  tech: Record<string, string>;
};

const WorkOverview: React.FC<WorkOverviewProps> = ({
  responsibilities,
  tech,
}) => {
  return (
    <section aria-labelledby="overview" className={styles.container}>
      <Typography id="overview" variant="h2">
        Overview
      </Typography>
      <Grid.Container>
        <Grid.Item medium={50} mobile={100}>
          <Typography iconProps={{ icon: faToolbox }} variant="h3">
            Tech
          </Typography>
          <dl>
            {Object.entries(tech).map(([key, value]) => {
              return (
                <React.Fragment key={key}>
                  <dt>{key}</dt>
                  <dd>{value}</dd>
                </React.Fragment>
              );
            })}
          </dl>
        </Grid.Item>
        <Grid.Item medium={50} mobile={100}>
          <Typography iconProps={{ icon: faClipboardList }} variant="h3">
            Responsibilities
          </Typography>
          <ul>
            {responsibilities.map((responsibility) => {
              return <li key={responsibility}>{responsibility}</li>;
            })}
          </ul>
        </Grid.Item>
      </Grid.Container>
    </section>
  );
};

export default WorkOverview;
