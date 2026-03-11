import type { ImgType } from "~/types";
import { getImageDimensions } from "~/utils";

interface Props {
  src?: string;
  title: string;
  type: ImgType;
}

function Image({ src, title, type }: Props) {
  const { aspectRatioStyle, height, width } = getImageDimensions({ type });
  return (
    <div className="ratio" style={aspectRatioStyle}>
      {src ? (
        <img
          alt={`${type} for ${title}`}
          className="bg-secondary img-fluid"
          height={height}
          loading="lazy"
          src={src}
          width={width}
        />
      ) : (
        <div className="bg-secondary overflow-hidden p-3 small text-center text-white">
          {`No ${type} image available for ${title}`}
        </div>
      )}
    </div>
  );
}

export default Image;
