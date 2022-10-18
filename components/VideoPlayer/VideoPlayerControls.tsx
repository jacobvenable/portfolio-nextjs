import {
  faPlay,
  faPause,
  faSpinner,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useCallback } from "react";

import styles from "./VideoPlayerControls.module.scss";
import Typography from "components/Typography";

interface VideoPlayerControlsProps {
  ended: boolean;
  hidden: boolean;
  loading: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onPause: () => void;
  onPlay: () => void;
  onPlayAgain: () => void;
  percentageProgress: number;
  playing: boolean;
  title: string;
  titleId: string;
  videoId: string;
}

const VideoPlayerControls: React.FC<VideoPlayerControlsProps> = ({
  ended,
  hidden,
  loading,
  onFocus,
  onBlur,
  onPause,
  onPlay,
  onPlayAgain,
  percentageProgress,
  playing,
  title,
  titleId,
  videoId,
}) => {
  const handleClick = useCallback(() => {
    if (playing) {
      return onPause();
    }
    if (ended) {
      return onPlayAgain();
    }
    return onPlay();
  }, [ended, onPause, onPlay, onPlayAgain, playing]);

  return (
    <>
      <p
        className={classNames(styles.title, { [styles.hidden]: hidden })}
        id={titleId}
      >
        {title}
      </p>
      {loading && (
        <FontAwesomeIcon
          aria-label="loading"
          className={classNames(styles.spinner, { [styles.hidden]: hidden })}
          icon={faSpinner}
          spinPulse
        />
      )}
      <button
        aria-controls={videoId}
        className={classNames(styles.button, { [styles.hidden]: hidden })}
        onBlur={onBlur}
        onClick={handleClick}
        onFocus={onFocus}
      >
        <FontAwesomeIcon
          icon={(playing && faPause) || (ended && faRotateLeft) || faPlay}
        />
        <Typography variant="sr-only">
          {(playing && "pause") || (ended && "play again") || "play"}
        </Typography>
      </button>

      <div
        className={classNames(styles.progress, { [styles.hidden]: hidden })}
        style={{ width: `${percentageProgress}%` }}
      />
    </>
  );
};

export default VideoPlayerControls;
