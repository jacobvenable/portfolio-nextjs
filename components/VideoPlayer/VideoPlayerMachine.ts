import { StateFrom } from "xstate";
import { createModel } from "xstate/lib/model";

interface VideoPlayerContext {
  canPlayThrough: boolean;
  currentTime: number;
  duration?: number;
}

interface VideoPlayerEvents {
  events: {
    END: () => Record<string, never>;
    HIDE: () => Record<string, never>;
    INTERACT_KEYBOARD: () => Record<string, never>;
    INTERACT_MOUSE: () => Record<string, never>;
    LOADED: (duration: number) => { duration: number };
    PAUSE: () => Record<string, never>;
    PLAY: () => Record<string, never>;
    PLAY_AGAIN: () => Record<string, never>;
    UPDATE_CURRENT_TIME: (currentTime: number) => { currentTime: number };
  };
}

const videoPlayerModel = createModel<VideoPlayerContext, VideoPlayerEvents>(
  {
    canPlayThrough: false,
    currentTime: 0,
    duration: undefined,
  },
  {
    events: {
      END: () => ({}),
      HIDE: () => ({}),
      INTERACT_KEYBOARD: () => ({}),
      INTERACT_MOUSE: () => ({}),
      LOADED: (duration: number) => ({ duration }),
      PAUSE: () => ({}),
      PLAY: () => ({}),
      PLAY_AGAIN: () => ({}),
      UPDATE_CURRENT_TIME: (currentTime: number) => ({ currentTime }),
    },
  }
);

const videoPlayerMachine = videoPlayerModel.createMachine(
  {
    predictableActionArguments: true,
    tsTypes: {} as import("./VideoPlayerMachine.typegen").Typegen0,
    context: videoPlayerModel.initialContext,
    type: "parallel",
    states: {
      video: {
        initial: "idle",
        states: {
          idle: {
            on: {
              PLAY: "playing",
            },
          },
          ended: {
            on: {
              PLAY_AGAIN: {
                target: "playing",
                actions: ["resetCurrentTime"],
              },
            },
          },
          loading: {
            on: {
              LOADED: {
                actions: ["assignCanPlayThrough", "assignDuration"],
                target: ["playing"],
              },
            },
          },
          paused: {
            on: {
              PLAY: "playing",
            },
          },
          playing: {
            always: [
              {
                cond: "canNotPlayThrough",
                target: "loading",
              },
            ],
            on: {
              END: "ended",
              PAUSE: "paused",
              UPDATE_CURRENT_TIME: {
                actions: ["assignCurrentTime"],
              },
            },
          },
        },
      },
      videoControlVisibility: {
        initial: "visible",
        states: {
          visible: {
            on: {
              HIDE: "hidden",
              PLAY: "temporarilyVisible",
              PLAY_AGAIN: "temporarilyVisible",
            },
          },
          temporarilyVisible: {
            after: {
              1500: { target: "hidden" },
            },
            on: {
              END: "visible",
              PAUSE: "visible",
            },
          },
          hidden: {
            on: {
              END: "visible",
              INTERACT_KEYBOARD: "visible",
              INTERACT_MOUSE: "temporarilyVisible",
              PAUSE: "visible",
            },
          },
        },
      },
    },
  },
  {
    actions: {
      assignCanPlayThrough: videoPlayerModel.assign({
        canPlayThrough: true,
      }),
      assignDuration: videoPlayerModel.assign({
        duration: (context, event) => {
          if (!("duration" in event)) {
            return context.duration;
          }
          return event.duration;
        },
      }),
      assignCurrentTime: videoPlayerModel.assign({
        currentTime: (context, event) => {
          if (!("currentTime" in event)) {
            return context.currentTime;
          }
          return event.currentTime;
        },
      }),
      resetCurrentTime: videoPlayerModel.assign({
        currentTime: 0,
      }),
    },
    guards: {
      canNotPlayThrough: (context) => {
        return !context.canPlayThrough;
      },
    },
  }
);

export type VideoPlayerState = StateFrom<typeof videoPlayerMachine>;

export const selectVideoEnded = (state: VideoPlayerState) =>
  state.matches("video.ended");
export const selectVideoPlaying = (state: VideoPlayerState) =>
  state.matches("video.playing");
export const selectVideoPaused = (state: VideoPlayerState) =>
  state.matches("video.paused");
export const selectVideoLoading = (state: VideoPlayerState) =>
  state.matches("video.loading");
export const selectVideoControlsHidden = (state: VideoPlayerState) =>
  state.matches("videoControlVisibility.hidden");

export default videoPlayerMachine;
