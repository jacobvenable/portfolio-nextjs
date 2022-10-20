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
  selectVideoControlsHidden,
  selectVideoCurrentTime,
  selectVideoDuration,
  selectVideoLoading,
  selectVideoEnded,
  selectVideoPaused,
  selectVideoPlaying,
} from "./VideoPlayerMachine";

type VideoPlayerProps = {
  id: string;
  poster: string;
  src: string;
  title: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  id,
  poster,
  src,
  title,
}) => {
  const videoService = useInterpret(videoPlayerMachine);
  const isVideoControlsHidden = useSelector(
    videoService,
    selectVideoControlsHidden
  );
  const videoCurrentTime = useSelector(videoService, selectVideoCurrentTime);
  const videoDuration = useSelector(videoService, selectVideoDuration);
  const isVideoLoading = useSelector(videoService, selectVideoLoading);
  const isVideoEnded = useSelector(videoService, selectVideoEnded);
  const isVideoPaused = useSelector(videoService, selectVideoPaused);
  const isVideoPlaying = useSelector(videoService, selectVideoPlaying);

  const titleId = `${id}-title`;
  const progressMeterId = `${id}-progressMeter`;

  return (
    <div
      className={classNames(styles.container, {
        [styles.hidden]: isVideoControlsHidden,
      })}
      onMouseMove={() => videoService.send("INTERACT_MOUSE")}
    >
      <Title
        className={classNames(styles.hidable, {
          [styles.hidden]: isVideoControlsHidden,
        })}
        id={titleId}
      >
        {title}
      </Title>
      <PlayPauseButton
        className={classNames(styles.hidable, {
          [styles.hidden]: isVideoControlsHidden,
        })}
        ended={isVideoEnded}
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
        className={classNames(styles.hidable, {
          [styles.hidden]: isVideoControlsHidden,
        })}
        currentTime={videoCurrentTime}
        duration={videoDuration}
        id={progressMeterId}
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
        aria-describedby={progressMeterId}
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
