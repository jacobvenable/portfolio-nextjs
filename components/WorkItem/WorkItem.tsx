import classnames from "classnames";
import ImageData from "images/.png";

import styles from "./WorkItem.module.scss";
import Button from "components/Button";
import Image from "components/Image";
import Link, { LinkProps } from "components/Link";
import Tags from "components/Tags";
import Typography from "components/Typography";

export type WorkItemDefinition = {
  blurb: string;
  roles: string[];
  route: string;
  tech: string[];
  thumb: typeof ImageData;
  title: string;
};

type WorkItemProps = WorkItemDefinition & {
  reverse?: boolean;
};

const WorkItem: React.FC<WorkItemProps> = ({
  blurb,
  reverse,
  roles,
  route,
  tech,
  thumb,
  title,
}) => {
  return (
    <section
      aria-labelledby={title}
      className={classnames(styles.section, { [styles.reverse]: reverse })}
    >
      <div
        className={classnames(styles.container, styles.details, {
          [styles.reverse]: reverse,
        })}
      >
        <Typography className={styles.heading} id={title} variant="h2">
          {title}
        </Typography>
        <Typography component="h3" variant="sr-only">
          My Role:
        </Typography>
        <Typography className={styles.role}>{roles.join(", ")}</Typography>
      </div>
      <div
        className={classnames(styles.thumb, {
          [styles.reverse]: reverse,
        })}
      >
        <Image alt="" className={styles.image} src={thumb} />
      </div>
      <div
        className={classnames(styles.container, styles.tech, {
          [styles.reverse]: reverse,
        })}
      >
        {tech.length > 0 && (
          <Tags.List>
            {tech.map((tag) => (
              <Tags.Item key={tag}>{tag}</Tags.Item>
            ))}
          </Tags.List>
        )}
      </div>
      <div
        className={classnames(styles.container, styles.summary, {
          [styles.reverse]: reverse,
        })}
      >
        <Typography className={styles.blurb}>{blurb}</Typography>
        <Button<LinkProps>
          aria-describedby={title}
          className={styles.button}
          color="yellow-light"
          component={Link}
          href={route}
        >
          More Info
        </Button>
      </div>
    </section>
  );
};

export default WorkItem;
