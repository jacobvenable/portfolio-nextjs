import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ajvResolver } from "@hookform/resolvers/ajv";
import type { JSONSchemaType } from "ajv";
import axios from "axios";
import classNames from "classnames";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./ContactForm.module.scss";
import Button from "components/Button";
import Input from "components/Input";

const NETLIFY_FORM_NAME = "contact";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const {
    formState: { errors },
    handleSubmit: hookFormHandleSubmit,
    register,
  } = useForm<ContactFormData>({
    resolver: ajvResolver<ContactFormData>(schema),
  });
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      void hookFormHandleSubmit(async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
          await axios.post(
            "/",
            { ...data, "form-name": NETLIFY_FORM_NAME },
            {
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
            }
          );
          setSubmitMessage(
            "Thanks! Your message has been dispatched with two droids to the planet's surface."
          );
        } catch {
          setSubmitMessage(
            "Whoops. Looks like some wires got crossed and I didn't receive your message. Maybe try again?"
          );
        } finally {
          setIsSubmitting(false);
        }
      })(e);
    },
    [hookFormHandleSubmit]
  );

  return (
    <>
      <form
        action="/contact"
        className={styles.form}
        data-netlify="true"
        method="POST"
        name={NETLIFY_FORM_NAME}
        onSubmit={handleSubmit}
      >
        <Input
          className={classNames([styles.input, styles.detail])}
          disabled={isSubmitting}
          error={errors.name?.message}
          label="What is your name?"
          required={true}
          type="text"
          {...register("name")}
        />
        <Input
          className={classNames([styles.input, styles.detail])}
          disabled={isSubmitting}
          error={errors.email?.message}
          label="What is your email?"
          required={true}
          type="email"
          {...register("email")}
        />
        <Input
          className={classNames([styles.input, styles.message])}
          disabled={isSubmitting}
          error={errors.message?.message}
          label="What would you like to talk about?"
          required={true}
          type="textarea"
          {...register("message")}
        />
        <Button
          className={styles.button}
          color="yellow-light"
          disabled={isSubmitting}
          iconProps={{
            icon: isSubmitting ? faSpinner : faPaperPlane,
            spin: isSubmitting,
          }}
          type="submit"
        >
          Send
        </Button>
      </form>
      <p
        aria-hidden={!submitMessage}
        className={classNames(styles.submitMessage, {
          [styles.visible]: !!submitMessage,
        })}
      >
        {submitMessage}
      </p>
    </>
  );
};

export default ContactForm;
