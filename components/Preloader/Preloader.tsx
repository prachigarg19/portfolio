import React from "react";
import styles from "./preloader.module.scss";
import Image from "next/image";

const Preloader = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/profilePic.png"
        alt="coding-woman"
        width={300}
        height={300}
        className={styles.profile}
      />
      <img
        src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&duration=4000&color=66FCF1&center=true&vCenter=true&width=350&repeat=false&lines=Welcome;Enjoy+my+web+creations+ <3"
        alt="Typing SVG"
        style={{ margin: "30px 10px" }}
      />
    </div>
  );
};

export default Preloader;
