import { css } from "@emotion/react";
import YouTube, { YouTubeProps } from "react-youtube";
import { event } from "@/lib/gTag";
type Props = {
  videoId: string;
  elementId: string;
  start?: number;
} & YouTubeProps;

const YoutubePlayer = ({ videoId, elementId, start, ...rest }: Props) => {
  const opts = {
    playerVars: {
      start: start ?? 0, // 60초(1분)부터 재생
    },
  };
  return (
    <YouTube
      videoId={videoId}
      id={elementId}
      opts={opts}
      css={S}
      onPlay={() => {
        event({
          action: "play",
          category: "post-detail",
          label: "post-detail_youtube",
          value: videoId,
        });
      }}
    />
  );
};

const S = css`
  iframe {
    width: 100%;
    max-width: 640px;
    aspect-ratio: 16/9;
  }
`;

export default YoutubePlayer;
