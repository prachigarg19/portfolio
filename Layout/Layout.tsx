import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./layout.module.scss";
import useDownloader from "react-use-downloader";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { download } = useDownloader();
  const [menuItem, setMenuItem] = useState<String>("home");
  return (
    <div className={styles.container}>
      <Head>
        <title>PRACHI GARG</title>
      </Head>
      <main></main>
      <div className={styles.content_container}>
        <div className={styles.navbar_container}>
          <div className={styles.navbar_container_left}>
            <p>PRACHI.</p>
          </div>
          <div className={styles.navbar_container_right}>
            <ul>
              <Link href="/" onClick={() => setMenuItem("home")}>
                <li className={menuItem === "home" ? `${styles.selected}` : ""}>
                  Home
                </li>
              </Link>
              <Link
                href="/experience"
                onClick={() => setMenuItem("experience")}
              >
                <li
                  className={
                    menuItem === "experience" ? `${styles.selected}` : ""
                  }
                >
                  Experience
                </li>
              </Link>
              <Link href="/projects" onClick={() => setMenuItem("projects")}>
                <li
                  className={
                    menuItem === "projects" ? `${styles.selected}` : ""
                  }
                >
                  Projects
                </li>
              </Link>
              <Link href="/contact" onClick={() => setMenuItem("contact")}>
                <li
                  className={menuItem === "contact" ? `${styles.selected}` : ""}
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className={styles.content_container_left}>{children}</div>
        <div className={styles.content_container_right}>
          <div className={styles.content}>
            <p>Hello! My name is </p>
            <h1>prachi garg</h1>
            <p>Full Stack Developer, Open Source Developer</p>
            <button onClick={() => download("/resume.pdf", "PRACHI-GARG.pdf")}>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
