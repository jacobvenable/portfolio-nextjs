// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "": { type: "" };
    "xstate.after(1500)#(machine).videoControlVisibility.temporarilyVisible": {
      type: "xstate.after(1500)#(machine).videoControlVisibility.temporarilyVisible";
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingActions: {
    assignCanPlayThrough: "LOADED";
    assignCurrentTime: "UPDATE_CURRENT_TIME";
    assignDuration: "LOADED";
    resetCurrentTime: "PLAY_AGAIN";
  };
  eventsCausingServices: {};
  eventsCausingGuards: {
    canNotPlayThrough: "";
  };
  eventsCausingDelays: {};
  matchesStates:
    | "video"
    | "video.ended"
    | "video.idle"
    | "video.loading"
    | "video.paused"
    | "video.playing"
    | "videoControlVisibility"
    | "videoControlVisibility.hidden"
    | "videoControlVisibility.temporarilyVisible"
    | "videoControlVisibility.visible"
    | {
        video?: "ended" | "idle" | "loading" | "paused" | "playing";
        videoControlVisibility?: "hidden" | "temporarilyVisible" | "visible";
      };
  tags: never;
}
