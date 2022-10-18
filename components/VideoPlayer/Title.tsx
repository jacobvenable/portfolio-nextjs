import { faVideo } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

import styles from "./Title.module.scss";
import Typography, { TypographyProps } from "components/Typography";

type VideoPlayerControlsProps = TypographyProps<{
  className?: string;
  id: string;
}>;

const Title: React.FC<VideoPlayerControlsProps> = ({
  children,
  className,
  id,
  ...props
}) => {
  return (
    <Typography
      className={classNames(styles.title, className)}
      iconProps={{ icon: faVideo }}
      id={id}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Title;
