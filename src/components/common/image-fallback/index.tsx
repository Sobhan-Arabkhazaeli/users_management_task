import React, { FC, useState } from "react";
import { Box, SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";

interface TImageFallbackProps {
  src: string | undefined;
  alt: string;
  fallback: string;
  sx?: SxProps<Theme>;
}

const ImageFallBack: FC<TImageFallbackProps> = ({ src, alt, fallback, sx }) => {
  // Use the fallback if src is null, empty, or undefined.
  const [imgSrc, setImgSrc] = useState(src && src !== "" ? src : fallback);

  return (
    <Box
      component="img"
      src={imgSrc}
      alt={alt}
      sx={sx}
      onError={() => setImgSrc(fallback)}
    />
  );
};

export default ImageFallBack;
