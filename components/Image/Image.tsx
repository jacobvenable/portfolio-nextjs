import classnames from "classnames";
import ImageData from "images/.png";
import NextImage from "next/image";
import { useMemo } from "react";

import styles from "./Image.module.scss";

type ImageDataProps = typeof ImageData;
interface ImageProps extends ImageDataProps {
  alt?: string;
  caption?: string;
  classname?: string;
}

const Image: React.FC<ImageProps> = ({
  alt = "",
  caption,
  classname,
  height,
  placeholder,
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
