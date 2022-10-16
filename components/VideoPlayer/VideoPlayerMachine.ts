import { StateFrom, StateValueFrom } from "xstate";
import { createModel } from "xstate/lib/model";

interface VideoPlayerContext {
  canPlayThrough: boolean;
  currentTime: number;
  duration?: number;
}

interface VideoPlayerEvents {
  events: {
    DONE: () => Record<string, never>;
    END: () => Record<string, never>;
    LOADED: (duration: number) => { duration: number };
    PAUSE: () => Record<string, never>;
    PLAY: () => Record<string, never>;
    PLAY_AGAIN: () => Record<string, never>;
    UPDATE_CURRENT_TIME: (currentTime: number) => { currentTime: number };
  };
}

const videoPlayerModel = createModel<VideoPlayerContext, VideoPlayerEvents>(
  { canPlayThrough: false, currentTime: 0, duration: undefined },
  {
    events: {
      DONE: () => ({}),
      END: () => ({}),
      LOADED: (duration: number) => ({ duration }),
      PAUSE: () => ({}),
      PLAY: () => ({}),
      PLAY_AGAIN: () => ({}),
      UPDATE_CURRENT_TIME: (currentTime: number) => ({ currentTime }),
    },
  }
);

const videoPlayerMachine = videoPlayerModel
  .createMachine(
    {
      tsTypes: {} as import("./VideoPlayerMachine.typegen").Typegen0,
      context: videoPlayerModel.initialContext,
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
    {
      guards: {
        canNotPlayThrough: (context) => {
          return !context.canPlayThrough;
        },
      },
    }
  )
  .withConfig({
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
  });

export type VideoPlayerState = StateFrom<typeof videoPlayerMachine>;
export type VideoPlayerStateValue = StateValueFrom<typeof videoPlayerMachine>;

export default videoPlayerMachine;
