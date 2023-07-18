import React from "react";
import styles from "./preloader.module.scss";
import Image from "next/image";

const Preloader = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/coding-image.gif"
        alt="coding-woman"
        width={300}
        height={300}
      />
      <img
        src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&duration=4000&color=FFCC00&vCenter=true&repeat=false&lines=Welcome!;Enjoy+exploring+my+web+creations+%3C3"
        alt="Typing SVG"
      />
    </div>
  );
};

export default Preloader;
