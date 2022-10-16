import {
  DetailedHTMLProps,
  VideoHTMLAttributes,
  useEffect,
  useRef,
} from "react";

import { VideoPlayerStateValue } from "./VideoPlayerMachine";

interface VideoProps
  extends DetailedHTMLProps<
    VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {
  onLoaded: (duration: number) => void;
  onProgressUpdate: (currentTime: number) => void;
  src: string;
  state: VideoPlayerStateValue;
}

const Video: React.FC<VideoProps> = ({
  onLoaded,
  onProgressUpdate,
  src,
  state,
  ...videoProps
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const syncVideo = async () => {
      if (!videoRef.current) {
        return;
      }

      switch (state) {
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
  }, [state]);

  return (
    <video
      onCanPlayThrough={() => {
        if (videoRef.current?.duration) {
          onLoaded(videoRef.current.duration);
        }
      }}
      onTimeUpdate={() => {
        if (videoRef.current?.currentTime) {
          onProgressUpdate(videoRef.current.currentTime);
        }
      }}
      ref={videoRef}
      {...videoProps}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;
