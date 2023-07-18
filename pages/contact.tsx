import styles from "../styles/contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Get in Touch</h1>
      <div className={styles.content}>
        <p>
          Thankyou for visiting my portfolio! I&apos;m always interested in
          working on new projects. Whether you want to collaborate or just want
          to say hi, I&apos;ll try my best to get back to you!
        </p>
        <form action="mailto:prachigarg1923@gmail.com">
          <button>Say Hello</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
