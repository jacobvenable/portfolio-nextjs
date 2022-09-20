import classNames from "classnames";
import React from "react";

import styles from "./Input.module.scss";

interface BaseInputProps {
  disabled?: boolean;
  error?: string;
  label: string;
  name: string;
}

type InputElementProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
interface TextInputProps extends InputElementProps {
  type?: "email" | "hidden" | "text";
}
type TextAreaElementProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;
interface TextAreaInputProps extends TextAreaElementProps {
  type: "textarea";
}

type InputProps = BaseInputProps & (TextInputProps | TextAreaInputProps);

const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(function Input(
  { className, disabled, error = "", label, name, type = "text", ...props },
  ref
) {
  const tooltipId = `${name}-tooltip`;

  return (
    <div
      className={classNames([
        className,
        styles.container,
        { [styles.disabled]: disabled },
      ])}
    >
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          aria-describedby={error ? tooltipId : undefined}
          className={styles.textarea}
          disabled={disabled}
          id={name}
          name={name}
          ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
          {...(props as TextAreaElementProps)}
        />
      ) : (
        <input
          aria-describedby={error ? tooltipId : undefined}
          className={styles.input}
          disabled={disabled}
          id={name}
          name={name}
          ref={ref as React.ForwardedRef<HTMLInputElement>}
          type={type}
          {...(props as InputElementProps)}
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
});

export default Input;
