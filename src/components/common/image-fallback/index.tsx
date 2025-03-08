import { ComponentProps, FC } from "react";

type TimageFallback = ComponentProps<"img"> & {
  src: string | undefined;
  alt: string;
  fallback: string;
  ClassName? : string;
};

const ImageFallBack: FC<TimageFallback> = ({ src, alt, fallback , ClassName }) => {
  console.log(src)

  if (src == null || src == "" || src == undefined) {
    src = fallback;
  }

  return (
    <img
    className={ClassName}
      src={src}
      alt={alt}
      onError={() => {
        return (src = fallback);
      }}

    />
  );
};

export default ImageFallBack;
