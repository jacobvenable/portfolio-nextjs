import { useActor, useInterpret, useSelector } from "@xstate/react";
import { useEffect, useRef } from "react";

import videoPlayerMachine from "./VideoPlayerMachine";
import Stack from "components/Stack";

interface VideoPlayerProps {
  id: string;
  poster: string;
  src: string;
  title: string;
}

const selectPercentageProgress = (state) => {
  if (!state.context.duration || !state.context.currentTime) {
    return 0;
  }
  return (state.context.currentTime / state.context.duration) * 100;
};
const selectStateValue = (state) => state.value;

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  id,
  poster,
  src,
  title,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoService = useInterpret(videoPlayerMachine, {});
  const percentageProgress = useSelector(
    videoService,
    selectPercentageProgress
  );
  const stateValue = useSelector(videoService, selectStateValue);
  const [_, send] = useActor(videoService);
  const titleId = `${id}-title`;

  useEffect(() => {
    const syncVideo = async () => {
      if (!videoRef.current) {
        return;
      }

      switch (stateValue) {
        case "loading":
          videoRef.current.load();
          break;
        case "playing":
          await videoRef.current.play();
          break;
        case "paused":
          videoRef.current.pause();
          break;
        default:
          break;
      }
    };

    void syncVideo();
  }, [stateValue]);

  return (
    // <Stack direction="vertical">
    <>
      <p>{title}</p>
      <video
        aria-labelledby={titleId}
        controls={false}
        id={id}
        loop={false}
        onCanPlayThrough={() => {
          if (!videoRef.current?.duration) {
            return;
          }
          send({
            type: "LOADED",
            duration: videoRef.current?.duration,
          });
        }}
        onEnded={() => send("END")}
        onTimeUpdate={() => {
          if (!videoRef.current?.currentTime) {
            return;
          }
          send({
            type: "UPDATE_CURRENT_TIME",
            currentTime: videoRef.current.currentTime,
          });
        }}
        poster={poster}
        preload="none"
        ref={videoRef}
      >
        <source src={src} type="video/mp4" />
      </video>
      <button
        onClick={() => {
          switch (stateValue) {
            case "playing":
              return send("PAUSE");
            case "ended":
              return send("PLAY_AGAIN");
            default:
              return send("PLAY");
          }
        }}
      >
        {(() => {
          switch (stateValue) {
            case "playing":
              return "Pause";
            case "ended":
              return "Play Again";
            default:
              return "Play";
          }
        })()}
      </button>
      percentage progress: {percentageProgress}
    </>
    // </Stack>
  );
};

export default VideoPlayer;
