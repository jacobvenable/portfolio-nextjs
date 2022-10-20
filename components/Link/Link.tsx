import classnames from "classnames";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

export type LinkProps = NextLinkProps & {
  activeClassName?: string;
  children: ReactNode;
  className?: string;
  // next/link also supports a Url object but we'll only support string for now
  href: string;
};

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

  return (
    <NextLink {...props}>
      <a
        aria-current={isActive ? "page" : undefined}
        className={classnames(
          className,
          activeClassName && {
            [activeClassName]: isActive,
          }
        )}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
