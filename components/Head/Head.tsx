import NextHead from "next/head";

import OgImageDefault from "images/meta_og-image-default.png";

interface OgImage {
  alt: string;
  src: string;
}

interface Props {
  children?: React.ReactNode;
  description: string;
  ogImage?: OgImage;
  title?: string;
}

const BASE_TITLE = "Jacob Venable: Front-End Developer";
const OG_IMAGE_ALT_DEFAULT = "Jacob Venable logo";

const Head: React.FC<Props> = ({
  children,
  description,
  ogImage,
  title: passedTitle,
}) => {
  const title = passedTitle ? `${passedTitle} - ${BASE_TITLE}` : BASE_TITLE;

  return (
    <NextHead>
      <title>{title}</title>
      <meta
        content={description}
        name="description"
        property="og:description"
      />
      <meta
        content={`https://www.jacobvenable.com${
          ogImage?.src || OgImageDefault.src
        }`}
        name="twitter:image"
        property="og:image"
      />
      <meta
        content={ogImage?.alt || OG_IMAGE_ALT_DEFAULT}
        name="twitter:image:alt"
        property="og:image:alt"
      />
      {children}
    </NextHead>
  );
};

export default Head;
