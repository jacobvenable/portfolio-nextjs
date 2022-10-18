import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInterpret, useSelector } from "@xstate/react";
import classNames from "classnames";

import PlayPauseButton from "./PlayPauseButton";
import ProgressMeter from "./ProgressMeter";
import Title from "./Title";
import Video from "./Video";
import styles from "./VideoPlayer.module.scss";
import videoPlayerMachine, {
  VideoPlayerState,
  selectVideoControlsHidden,
  selectVideoLoading,
  selectVideoEnded,
  selectVideoPaused,
  selectVideoPlaying,
} from "./VideoPlayerMachine";

interface VideoPlayerProps {
  id: string;
  poster: string;
  src: string;
  title: string;
}

const selectPercentageProgress = (state: VideoPlayerState) => {
  if (!state.context.duration || !state.context.currentTime) {
    return 0;
  }
  return (state.context.currentTime / state.context.duration) * 100;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  id,
  poster,
  src,
  title,
}) => {
  const videoService = useInterpret(videoPlayerMachine);
  const percentageProgress = useSelector(
    videoService,
    selectPercentageProgress
  );
  const isVideoControlsHidden = useSelector(
    videoService,
    selectVideoControlsHidden
  );
  const isVideoLoading = useSelector(videoService, selectVideoLoading);
  const isVideoEnded = useSelector(videoService, selectVideoEnded);
  const isVideoPaused = useSelector(videoService, selectVideoPaused);
  const isVideoPlaying = useSelector(videoService, selectVideoPlaying);

  const titleId = `${id}-title`;

  return (
    <div
      className={classNames(styles.container, {
        [styles.hidden]: isVideoControlsHidden,
      })}
      onMouseMove={() => videoService.send("INTERACT_MOUSE")}
    >
      <Title hidden={isVideoControlsHidden} id={titleId}>
        {title}
      </Title>
      <PlayPauseButton
        ended={isVideoEnded}
        hidden={isVideoControlsHidden}
        onBlur={() => videoService.send("INTERACT_MOUSE")}
        onFocus={() => videoService.send("INTERACT_KEYBOARD")}
        onPause={() => videoService.send("PAUSE")}
        onPlay={() => {
          videoService.send("PLAY");
        }}
        onPlayAgain={() => videoService.send("PLAY_AGAIN")}
        playing={isVideoPlaying}
        videoId={id}
      />
      <ProgressMeter
        hidden={isVideoControlsHidden}
        percentageProgress={percentageProgress}
      />
      {isVideoLoading && (
        <FontAwesomeIcon
          aria-label="loading"
          className={styles.loading}
          icon={faSpinner}
          spinPulse
        />
      )}
      <Video
        aria-labelledby={titleId}
        controls={false}
        id={id}
        loading={isVideoLoading}
        loop={false}
        onEnded={() => videoService.send("END")}
        onLoaded={(duration) => {
          videoService.send({
            type: "LOADED",
            duration,
          });
        }}
        onProgressUpdate={(currentTime) => {
          videoService.send({
            type: "UPDATE_CURRENT_TIME",
            currentTime,
          });
        }}
        paused={isVideoPaused}
        playing={isVideoPlaying}
        poster={poster}
        preload="none"
        src={src}
      />
    </div>
  );
};

export default VideoPlayer;
