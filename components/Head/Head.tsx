import NextHead from "next/head";

import OgImageDefault from "images/meta_og-image-default.png";

type OgImage = {
  alt: string;
  src: string;
};

type HeadProps = {
  children?: React.ReactNode;
  description: string;
  mergeTitle?: boolean;
  ogImage?: OgImage;
  title: string;
};

export const BASE_TITLE = "Jacob Venable: Web Software Engineer";
const OG_IMAGE_ALT_DEFAULT = "Jacob Venable logo";

const Head: React.FC<HeadProps> = ({
  children,
  description,
  mergeTitle = true,
  ogImage,
  title,
}) => {
  return (
    <NextHead>
      <title>{mergeTitle ? `${title} - ${BASE_TITLE}` : title}</title>
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
