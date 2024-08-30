import { css } from "@emotion/react";
import YouTube from "react-youtube";

type Props = {
  videoId: string;
  elementId: string;
  start?: number;
};

const YoutubePlayer = ({ videoId, elementId, start }: Props) => {
  const opts = {
    playerVars: {
      start: start ?? 0, // 60초(1분)부터 재생
    },
  };
  return <YouTube videoId={videoId} id={elementId} opts={opts} css={S} />;
};

const S = css`
  iframe {
    width: 100%;
    max-width: 640px;
    aspect-ratio: 16/9;
  }
`;

export default YoutubePlayer;
