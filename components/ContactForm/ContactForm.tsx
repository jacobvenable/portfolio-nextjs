import { ajvResolver } from "@hookform/resolvers/ajv";
import type { JSONSchemaType } from "ajv";
import classNames from "classnames";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";

import styles from "./ContactForm.module.scss";
import Button from "components/Button";
import Input from "components/Input";

interface ContactFormData {
  email: string;
  message: string;
  name: string;
}
const schema: JSONSchemaType<ContactFormData> = {
  type: "object",
  properties: {
    email: {
      type: "string",
      minLength: 1,
      errorMessage: {
        minLength: "Please provide your email.",
      },
    },
    name: {
      type: "string",
      minLength: 1,
      errorMessage: {
        minLength: "Please provide your name.",
      },
    },
    message: {
      type: "string",
      minLength: 1,
      errorMessage: {
        minLength: "Please provide a message.",
      },
    },
  },
  required: ["email", "name", "message"],
  additionalProperties: false,
};

const ContactForm: React.FC = () => {
  const {
    formState: { errors },
    handleSubmit: hookFormHandleSubmit,
    register,
  } = useForm<ContactFormData>({
    resolver: ajvResolver<ContactFormData>(schema),
  });
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      void hookFormHandleSubmit((data: ContactFormData) => {
        console.log(data);
      })(e);
    },
    [hookFormHandleSubmit]
  );

  return (
    <form
      action="/contact"
      className={styles.form}
      data-netlify="true"
      data-netlify-honeypot="sweet-honey"
      data-netlify-recaptcha="true"
      method="post"
      name="contact"
      onSubmit={handleSubmit}
    >
      <Input
        className={classNames([styles.input, styles.detail])}
        error={errors.name?.message}
        label="What is your name?"
        required={true}
        type="text"
        {...register("name")}
      />
      <Input
        className={classNames([styles.input, styles.detail])}
        error={errors.email?.message}
        label="What is your email?"
        required={true}
        type="email"
        {...register("email")}
      />
      <Input
        className={classNames([styles.input, styles.message])}
        error={errors.message?.message}
        label="What would you like to talk about?"
        required={true}
        type="textarea"
        {...register("message")}
      />
      <Button className={styles.button} color="yellow-light" type="submit">
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
