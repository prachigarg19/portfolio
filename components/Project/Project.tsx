import React, { useRef, useState } from "react";
import styles from "./project.module.scss";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

interface PropsType {
  img: string;
  name: string;
  description: string;
  tech: string[];
  github: string;
  deployment: string;
  isLastElement: boolean;
}
const Project = ({
  img,
  name,
  description,
  tech,
  github,
  deployment,
  isLastElement,
}: PropsType) => {
  const ref = useRef(null);
  console.log(ref);
  return (
    <div className={styles.container} ref={isLastElement ? ref : null}>
      <Image
        src={img}
        height={350}
        width={500}
        alt="project-image"
        className={styles.image}
      />
      <div className={styles.text_container}>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <ul className={styles.tech}>
          {tech.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
        <div className={styles.icon}>
          <a href={github} target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a href={deployment} target="_blank" rel="noreferrer">
            {deployment.length > 0 && <LinkIcon />}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
