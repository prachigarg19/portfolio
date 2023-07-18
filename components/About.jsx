import styles from "../styles/about.module.scss";
import Image from "next/image";
const About = () => {
  const skills = [
    "NextJs",
    "TypeScript",
    "ReactJs",
    "NodeJs",
    "ExpressJs",
    "MongoDB",
  ];
  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      <div className={styles.content}>
        {/* <div className={styles.left}>
          <Image
            src={"/profile_pic.jpeg"}
            height={250}
            width={210}
            alt="profile-pic"
          />
        </div> */}
        <div className={styles.right}>
          <h3>Welcome</h3>
          <h5>Nice to meet you!</h5>
          <p>
            Experienced web developer passionate about creating visually
            appealing and user-friendly websites. Dedicated to delivering
            exceptional results and collaborating effectively. Continuously
            learning and adapting to provide cutting-edge solutions for clients.
          </p>
          <p>Some Technologies that I've worked with are: </p>
        </div>
        <div className={styles.tech_stack}>
          <ul>
            {skills.map((s) => (
              <li>
                <span>•</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
