import classnames from "classnames";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { useMemo } from "react";

import styles from "./Image.module.scss";

type ImageProps = NextImageProps & {
  alt?: string;
  caption?: string;
  className?: string;
};

const Image: React.FC<ImageProps> = ({
  alt = "",
  caption,
  className,
  height,
  placeholder = "blur",
  src,
  width,
}) => {
  const img = useMemo(
    () => (
      <NextImage
        alt={alt}
        className={classnames(styles.image, className)}
        height={height}
        placeholder={placeholder}
        src={src}
        width={width}
      />
    ),
    [alt, className, height, placeholder, src, width]
  );

  if (caption) {
    return (
      <figure className={styles.figure}>
        {img}
        <figcaption className={styles.figureCaption}>{caption}</figcaption>
      </figure>
    );
  }

  return img;
};

export default Image;
