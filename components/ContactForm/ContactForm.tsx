import classNames from "classnames";
import React from "react";

import styles from "./ContactForm.module.scss";
import Button from "components/Button";
import Input from "components/Input";

const ContactForm: React.FC = () => {
  return (
    <form
      action="/contact"
      className={styles.form}
      data-netlify="true"
      data-netlify-honeypot="sweet-honey"
      data-netlify-recaptcha="true"
      method="post"
      name="contact"
    >
      <Input
        className={classNames([styles.input, styles.detail])}
        error="oh no!"
        label="What is your name?"
        name="name"
        required={true}
      />
      <Input
        className={classNames([styles.input, styles.detail])}
        error="oh no!"
        label="What is your email?"
        name="email"
        required={true}
        type="email"
      />
      <Input
        className={classNames([styles.input, styles.message])}
        error="oh no!"
        label="What would you like to talk about?"
        name="message"
        required={true}
        type="textarea"
      />
      <Button className={styles.button} color="yellow-light" type="submit">
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
