import {
  faPlay,
  faPause,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useCallback } from "react";

import styles from "./PlayPauseButton.module.scss";
import Typography from "components/Typography";

interface PlayPauseButtonProps {
  className?: string;
  ended: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onPause: () => void;
  onPlay: () => void;
  onPlayAgain: () => void;
  playing: boolean;
  videoId: string;
}

const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({
  className,
  ended,
  onFocus,
  onBlur,
  onPause,
  onPlay,
  onPlayAgain,
  playing,
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
    <button
      aria-controls={videoId}
      className={classNames(styles.button, className)}
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
  );
};

export default PlayPauseButton;
