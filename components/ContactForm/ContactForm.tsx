import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ajvResolver } from "@hookform/resolvers/ajv";
import type { JSONSchemaType } from "ajv";
import axios from "axios";
import classNames from "classnames";
import React, { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import styles from "./ContactForm.module.scss";
import Button from "components/Button";
import Input from "components/Input";
import Recaptcha from "components/Recaptcha";

const NETLIFY_FORM_NAME = "contact";
const NETLIFY_HONEY_POT_FIELD = "bees knees";
const NETLIFY_RECAPTCHA_FIELD = "g-recaptcha-response";

interface ContactFormData {
  email: string;
  message: string;
  name: string;
  [NETLIFY_HONEY_POT_FIELD]?: string;
  [NETLIFY_RECAPTCHA_FIELD]: string;
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
    [NETLIFY_HONEY_POT_FIELD]: {
      type: "string",
      nullable: true,
    },
    [NETLIFY_RECAPTCHA_FIELD]: {
      type: "string",
      minLength: 1,
    },
  },
  required: ["email", "name", "message", NETLIFY_RECAPTCHA_FIELD],
  additionalProperties: true,
};

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const contactForm = useForm<ContactFormData>({
    resolver: ajvResolver<ContactFormData>(schema),
  });
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      void contactForm.handleSubmit(async (formData: ContactFormData) => {
        setIsSubmitting(true);
        console.log("formData: ", formData);
        const data = {
          ...formData,
          "form-name": NETLIFY_FORM_NAME,
        };
        try {
          await axios.post(
            "/contact",
            Object.keys(data)
              .map(
                (key) =>
                  encodeURIComponent(key) +
                  "=" +
                  encodeURIComponent(data[key] as keyof ContactFormData)
              )
              .join("&"),
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
    [contactForm]
  );

  return (
    <FormProvider {...contactForm}>
      <form
        action="/contact"
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot={NETLIFY_HONEY_POT_FIELD}
        data-netlify-recaptcha="true"
        method="POST"
        name={NETLIFY_FORM_NAME}
        onSubmit={handleSubmit}
      >
        <Input
          label="Leave this blank if you're human."
          type="hidden"
          {...contactForm.register(NETLIFY_HONEY_POT_FIELD)}
        />
        <Input
          className={classNames([styles.input, styles.detail])}
          disabled={isSubmitting}
          error={contactForm.formState.errors.name?.message}
          label="What is your name?"
          required={true}
          type="text"
          {...contactForm.register("name")}
        />
        <Input
          className={classNames([styles.input, styles.detail])}
          disabled={isSubmitting}
          error={contactForm.formState.errors.email?.message}
          label="What is your email?"
          required={true}
          type="email"
          {...contactForm.register("email")}
        />
        <Input
          className={classNames([styles.input, styles.message])}
          disabled={isSubmitting}
          error={contactForm.formState.errors.message?.message}
          label="What would you like to talk about?"
          required={true}
          type="textarea"
          {...contactForm.register("message")}
        />
        <Recaptcha
          className={classNames([styles.input, styles.recaptcha])}
          name={NETLIFY_RECAPTCHA_FIELD}
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
    </FormProvider>
  );
};

export default ContactForm;
