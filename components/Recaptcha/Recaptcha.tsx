import GoogleRecaptcha from "react-google-recaptcha";
import { Controller } from "react-hook-form";

interface RecaptchaProps {
  name: string;
}

const Recaptcha: React.FC<RecaptchaProps> = ({ name }) => {
  return (
    <Controller
      name={name}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <>
          <GoogleRecaptcha
            onChange={onChange}
            sitekey={process.env.NEXT_PUBLIC_SITE_RECAPTCHA_KEY}
            theme="dark"
          />
          {error && "Please prove you aren't a robot."}
        </>
      )}
    />
  );
};
export default Recaptcha;
