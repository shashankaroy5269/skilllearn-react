import { useId } from "react";

const ProgressSvg = ({ size = 30 }) => {
  const patternId = useId();
  const imageId = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="30" height="30" rx="5" fill="#097877" />

      <rect
        x="6"
        y="6"
        width="18"
        height="18"
        fill={`url(#${patternId})`}
      />

      <defs>
        <pattern
          id={patternId}
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref={`#${imageId}`}
            transform="scale(0.001953125)"
          />
        </pattern>

        <image
          id={imageId}
          width="512"
          height="512"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,PASTE_YOUR_BASE64_HERE"
        />
      </defs>
    </svg>
  );
};

export default ProgressSvg;
