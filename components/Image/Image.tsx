import NextImage, { ImageProps as NextImageProps } from "next/image";

import styles from "./Image.module.scss";

type ImageProps = NextImageProps & {
  alt?: string;
  caption?: string;
  className?: string;
  fullPageWidth?: boolean;
};

const Image: React.FC<ImageProps> = ({
  alt = "",
  caption,
  fullPageWidth,
  placeholder = "blur",
  ...imageProps
}) => {
  const sizes = fullPageWidth
    ? "(max-width: 47.9375em) 100vw, (max-width: 64em) 44.4375em, (max-width: 74.9375em) 100vw, (min-width: 75em) 71.4375em"
    : undefined;

  if (!caption) {
    return (
      <div className={styles.image}>
        <NextImage
          alt={alt}
          placeholder={placeholder}
          sizes={sizes}
          {...imageProps}
        />
      </div>
    );
  }

  return (
    <figure className={styles.figure}>
      <div className={styles.image}>
        <NextImage
          alt={alt}
          placeholder={placeholder}
          sizes={sizes}
          {...imageProps}
        />
      </div>
      <figcaption className={styles.figureCaption}>{caption}</figcaption>
    </figure>
  );
};

export default Image;
