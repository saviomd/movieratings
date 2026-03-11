import type { CSSProperties } from "react";

import type { ImgType } from "~/types";

interface Params {
  type: ImgType;
}

const types = {
  backdrop: {
    height: 720,
    width: 1280,
  },
  logo: {
    height: 500,
    width: 500,
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

const getImageDimensions = ({ type }: Params) => {
  const { height, width } = types[type];
  return {
    aspectRatioStyle: {
      "--bs-aspect-ratio": `${String((height / width) * 100)}%`,
    } as CSSProperties,
    height,
    width,
  };
};

export default getImageDimensions;
