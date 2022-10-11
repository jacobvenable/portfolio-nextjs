import { useActor, useInterpret } from "@xstate/react";
import { useRef } from "react";
import { createModel } from "xstate/lib/model";

import Stack from "components/Stack";

const videoPlayerModel = createModel(
  // Initial context
  {},
  {
    // Event creators
    events: {
      DONE: () => ({}),
      TOGGLE: () => ({}),
    },
  }
);

const videoPlayerMachine = videoPlayerModel.createMachine({
  context: videoPlayerModel.initialContext,
  initial: "idle",
  states: {
    idle: {
      on: {
        TOGGLE: "playing",
      },
    },
    playing: {
      on: {
        DONE: "idle",
        TOGGLE: "paused",
      },
    },
    paused: {
      on: {
        TOGGLE: "playing",
      },
    },
  },
});

interface VideoPlayerProps {
  id: string;
  poster: string;
  src: string;
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  id,
  poster,
  src,
  title,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  console.log("videoRef: ", videoRef.current);
  const videoService = useInterpret(videoPlayerMachine, {}, async (state) => {
    if (!videoRef.current) {
      return;
    }
    switch (state.value) {
      case "playing":
        await videoRef.current.play();
        break;
      case "paused":
        videoRef.current.pause();
        break;
      default:
        break;
    }
  });
  const [state, send] = useActor(videoService);
  const titleId = `${id}-title`;

  return (
    <Stack direction="vertical">
      <p>{title}</p>
      <video
        aria-labelledby={titleId}
        controls={false}
        id={id}
        // onCanPlayThrough={this.bufferedVideo}
        // onEnded={this.resetVideo}
        // onTimeUpdate={this.updateProgress}
        poster={poster}
        preload="none"
        ref={videoRef}
      >
        <source src={src} type="video/mp4" />
      </video>
      {videoRef.current && (
        <button onClick={() => send("TOGGLE")}>
          {state.value !== "playing" ? "Play" : "Pause"}
        </button>
      )}
    </Stack>
  );
};

export default VideoPlayer;
