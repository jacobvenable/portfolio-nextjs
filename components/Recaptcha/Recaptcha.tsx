import { faWarning } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { useState } from "react";
import GoogleRecaptcha from "react-google-recaptcha";
import { Controller } from "react-hook-form";

import styles from "./Recaptcha.module.scss";
import Tooltip from "components/Tooltip";
import { useLightMode } from "context/LightMode";

type RecaptchaProps = {
  className?: string;
  name: string;
};

const Recaptcha: React.FC<RecaptchaProps> = ({ className, name }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLightMode] = useLightMode();

  return (
    <Controller
      name={name}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <div
          className={classNames(
            styles.container,
            { [styles.loading]: isLoading },
            className
          )}
        >
          <GoogleRecaptcha
            asyncScriptOnLoad={() => setIsLoading(false)}
            onChange={onChange}
            sitekey={process.env.NEXT_PUBLIC_SITE_RECAPTCHA_KEY}
            theme={isLightMode ? "light" : "dark"}
          />
          <Tooltip iconProps={{ icon: faWarning }} visible={!!error}>
            Please prove you aren&apos;t a robot.
          </Tooltip>
        </div>
      )}
    />
  );
};
export default Recaptcha;
