import classnames from "classnames";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { useMemo } from "react";

import styles from "./Image.module.scss";

interface ImageProps extends NextImageProps {
  alt?: string;
  caption?: string;
  classname?: string;
}

const Image: React.FC<ImageProps> = ({
  alt = "",
  caption,
  classname,
  height,
  placeholder = "blur",
  src,
  width,
}) => {
  const img = useMemo(
    () => (
      <NextImage
        alt={alt}
        className={classnames(styles.image, classname)}
        height={height}
        placeholder={placeholder}
        src={src}
        width={width}
      />
    ),
    [alt, classname, height, placeholder, src, width]
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
