import {
  DetailedHTMLProps,
  VideoHTMLAttributes,
  useEffect,
  useRef,
} from "react";

interface VideoProps
  extends DetailedHTMLProps<
    VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {
  loading: boolean;
  paused: boolean;
  playing: boolean;
  onLoaded: (duration: number) => void;
  onProgressUpdate: (currentTime: number) => void;
  src: string;
}

const Video: React.FC<VideoProps> = ({
  loading,
  paused,
  playing,
  onLoaded,
  onProgressUpdate,
  src,
  ...videoProps
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const syncVideo = async () => {
      if (!videoRef.current) {
        return;
      }

      if (loading) {
        return videoRef.current.load();
      }
      if (playing) {
        return videoRef.current.play();
      }
      if (paused) {
        return videoRef.current.pause();
      }
    };

    void syncVideo();
  }, [loading, paused, playing]);

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
