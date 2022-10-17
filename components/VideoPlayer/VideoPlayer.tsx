import { useInterpret, useSelector } from "@xstate/react";

import Video from "./Video";
import styles from "./VideoPlayer.module.scss";
import VideoPlayerControls from "./VideoPlayerControls";
import videoPlayerMachine, {
  VideoPlayerState,
  VideoPlayerStateValue,
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
const selectStateValue = (state: VideoPlayerState): VideoPlayerStateValue =>
  state.value as VideoPlayerStateValue;

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
  const stateValue = useSelector(videoService, selectStateValue);
  const titleId = `${id}-title`;

  return (
    <div className={styles.container}>
      <VideoPlayerControls
        onPause={() => videoService.send("PAUSE")}
        onPlay={() => {
          videoService.send("PLAY");
        }}
        onPlayAgain={() => videoService.send("PLAY_AGAIN")}
        percentageProgress={percentageProgress}
        stateValue={stateValue}
        title={title}
        titleId={titleId}
        videoId={id}
      />
      <Video
        aria-labelledby={titleId}
        controls={false}
        id={id}
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
        poster={poster}
        preload="none"
        src={src}
        stateValue={stateValue}
      />
    </div>
  );
};

export default VideoPlayer;
