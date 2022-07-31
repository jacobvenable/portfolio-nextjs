import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";

export interface LinkProps extends NextLinkProps {
  activeClassName?: string;
  children: ReactNode;
  className?: string;
  // next/link also supports a Url object but we'll only support string for now
  href: string;
}

/**
 * An extension of NextJS's link with support of an activeClassName
 */
const Link: React.FC<LinkProps> = ({
  activeClassName,
  children,
  className,
  ...props
}) => {
  const { asPath, isReady } = useRouter();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (isReady) {
      const linkPath = new URL(props.href, location.href).pathname;
      const currentPath = new URL(asPath, location.href).pathname;
      setIsActive(linkPath === currentPath);
    }
  }, [asPath, isReady, props.href]);

  const combinedClassNames =
    isActive && activeClassName ? `${className} ${activeClassName}` : className;

  return (
    <NextLink {...props}>
      <a className={combinedClassNames}>{children}</a>
    </NextLink>
  );
};

export default Link;
