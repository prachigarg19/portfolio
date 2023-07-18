import React, { useState } from "react";
import styles from "./project.module.scss";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

const Project = ({ data }) => {
  return (
    <div className={styles.container}>
      <Image
        src={data.img}
        height={350}
        width={500}
        alt="project-image"
        className={styles.image}
      />
      <div className={styles.text_container}>
        <h3>{data.name}</h3>
        <div className={styles.description}>{data.description}</div>
        <ul className={styles.tech}>
          {data.tech.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
        <div className={styles.icon}>
          <a href={data.github} target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a href={data.deployment} target="_blank" rel="noreferrer">
            {data.deployment.length > 0 && <LinkIcon />}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
