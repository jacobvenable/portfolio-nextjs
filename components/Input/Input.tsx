import classNames from "classnames";
import React from "react";

import styles from "./Input.module.scss";
import Typography from "components/Typography";

interface BaseInputProps {
  error?: string;
  label: string;
  required?: boolean;
}

interface TextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: "email" | "text";
}

interface TextareaInputProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  type: "textarea";
}

type InputProps = BaseInputProps & (TextInputProps | TextareaInputProps);

const Input: React.FC<InputProps> = ({
  className,
  error = "",
  label,
  name,
  required,
  type = "text",
}) => {
  const tooltipId = `${name}-tooltip`;

  return (
    <div className={classNames([className, styles.container])}>
      <label className={styles.label} htmlFor={name}>
        {label}
        {required && (
          <Typography component="span" variant="sr-only">
            (required)
          </Typography>
        )}
      </label>
      {type === "textarea" ? (
        <textarea
          aria-describedby={error ? tooltipId : undefined}
          className={styles.textarea}
          id={name}
          name={name}
        />
      ) : (
        <input
          aria-describedby={error ? tooltipId : undefined}
          className={styles.input}
          id={name}
          name={name}
          type={type}
        />
      )}
      <p
        className={classNames([
          styles.tooltip,
          {
            [styles.visible]: !!error,
          },
        ])}
        id={tooltipId}
      >
        {error}
      </p>
    </div>
  );
};

export default Input;
