import { useActor, useInterpret, useSelector } from "@xstate/react";

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
  const videoService = useInterpret(videoPlayerMachine, {});
  const percentageProgress = useSelector(
    videoService,
    selectPercentageProgress
  );
  const stateValue = useSelector(videoService, selectStateValue);
  const [_, send] = useActor(videoService);
  const titleId = `${id}-title`;

  return (
    <div className={styles.container}>
      <VideoPlayerControls
        onPause={() => send("PAUSE")}
        onPlay={() => {
          console.log("play!");
          send("PLAY");
        }}
        onPlayAgain={() => send("PLAY_AGAIN")}
        percentageProgress={percentageProgress}
        state={stateValue}
        title={title}
        videoId={id}
      />
      <Video
        aria-labelledby={titleId}
        controls={false}
        id={id}
        loop={false}
        onEnded={() => send("END")}
        onLoaded={(duration) => {
          send({
            type: "LOADED",
            duration,
          });
        }}
        onProgressUpdate={(currentTime) => {
          send({
            type: "UPDATE_CURRENT_TIME",
            currentTime,
          });
        }}
        poster={poster}
        preload="none"
        src={src}
        state={stateValue}
      />
    </div>
  );
};

export default VideoPlayer;
