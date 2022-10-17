import {
  faPlay,
  faPause,
  faRedo,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";

import styles from "./VideoPlayerControls.module.scss";
import { VideoPlayerStateValue } from "./VideoPlayerMachine";
import Typography from "components/Typography";

interface VideoPlayerControlsProps {
  onPause: () => void;
  onPlay: () => void;
  onPlayAgain: () => void;
  percentageProgress: number;
  stateValue: VideoPlayerStateValue;
  title: string;
  titleId: string;
  videoId: string;
}

const ButtonIconMap: Record<string, IconDefinition> = {
  playing: faPause,
  ended: faRedo,
  default: faPlay,
};

const ButtonTextMap: Record<string, string> = {
  playing: "pause",
  ended: "play again",
  default: "play",
};

const VideoPlayerControls: React.FC<VideoPlayerControlsProps> = ({
  onPause,
  onPlay,
  onPlayAgain,
  percentageProgress,
  stateValue,
  title,
  titleId,
  videoId,
}) => {
  const handleClick = useCallback(() => {
    switch (stateValue) {
      case "playing":
        return onPause();
      case "ended":
        return onPlayAgain();
      default:
        return onPlay();
    }
  }, [onPause, onPlay, onPlayAgain, stateValue]);

  return (
    <>
      <p className={styles.title} id={titleId}>
        {title}
      </p>
      <button
        aria-controls={videoId}
        className={styles.button}
        onClick={handleClick}
      >
        <FontAwesomeIcon
          icon={ButtonIconMap[stateValue] || ButtonIconMap.default}
        />
        <Typography variant="sr-only">
          {ButtonTextMap[stateValue] || ButtonTextMap.default}
        </Typography>
      </button>

      <div
        className={styles.progress}
        style={{ width: `${percentageProgress}%` }}
      />
    </>
  );
};

export default VideoPlayerControls;
