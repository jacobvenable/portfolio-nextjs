// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "": { type: "" };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions:
      | "resetCurrentTime"
      | "assignCanPlayThrough"
      | "assignDuration"
      | "assignCurrentTime";
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
  matchesStates: "ended" | "idle" | "loading" | "paused" | "playing";
  tags: never;
}
