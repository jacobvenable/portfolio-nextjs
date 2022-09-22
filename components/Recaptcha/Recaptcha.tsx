import { faWarning } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import GoogleRecaptcha from "react-google-recaptcha";
import { Controller } from "react-hook-form";

import Tooltip from "components/Tooltip";

interface RecaptchaProps {
  className?: string;
  name: string;
}

const Recaptcha: React.FC<RecaptchaProps> = ({ className, name }) => {
  return (
    <Controller
      name={name}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <div className={classNames(className)}>
          <GoogleRecaptcha
            onChange={onChange}
            sitekey={process.env.NEXT_PUBLIC_SITE_RECAPTCHA_KEY}
            theme="dark"
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
