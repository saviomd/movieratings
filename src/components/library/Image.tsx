import type { CSSProperties } from "react";

import type { ImgType } from "src/types";

interface IProps {
  src?: string;
  title: string;
  type: ImgType;
}

function Image({ src, title, type }: IProps) {
  const types = {
    backdrop: {
      height: 720,
      width: 1280,
    },
    logo: {
      height: 48,
      width: 48,
    },
    poster: {
      height: 1169,
      width: 780,
    },
    profile: {
      height: 632,
      width: 421,
    },
  };
  const dimensions = types[type];
  if (src) {
    return (
      <img
        alt={`${type} for ${title}`}
        className="bg-secondary img-fluid"
        height={dimensions.height}
        loading="lazy"
        src={src}
        width={dimensions.width}
      />
    );
  }
  const wrapperStyle = {
    "--bs-aspect-ratio": `${String((dimensions.height / dimensions.width) * 100)}%`,
  } as CSSProperties;
  return (
    <div
      className="bg-secondary ratio overflow-hidden text-white"
      style={wrapperStyle}
    >
      <div className="p-3 small text-center">{`No ${type} image available for ${title}`}</div>
    </div>
  );
}

export default Image;
