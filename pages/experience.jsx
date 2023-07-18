import styles from "../styles/experience.module.scss";
import { useState } from "react";

const experience = () => {
  let arr = {
    skyware: {
      name: "Skyware",
      title: "Software intern",
      duration: "Jan 2022 - March 2022",
      location: "New Delhi, India",
      description: [
        `Optimized a SAAS dashboard using React Js for the project “Intelligent
      Monitoring and prediction system for storage warehouses”`,
        `Migrated the client’s multi-page user experience into a single page app using
      React which improved customer engagement by 8%`,
        `Conceptualized and Implemented Recharts library to display real-time data
      hence enhancing the acquisition of new customers by 30%
      `,
      ],
      logo: "/skyware.jpeg",
      letter:
        "https://drive.google.com/file/d/1bH5go-wyXf4VJ3MBx-GyAu-mxn56g68H/view",
    },
    pfp: {
      name: "Plant-for-the-Planet",
      title: "React developer",
      duration: "June 2022 - Present",
      location: "Uffing, Germany",
      description: [
        `Implemented 18 000+ lines of code to the organization’s GitHub repositories
to enhance version control and software development workflows`,
        `Debugged existing software and rectified defects thus improving user
      experience by 5%`,
        `Authored 171+ commits to the organization’s GitHub repository to ensure
efficient collaboration and code management`,
      ],
      logo: "/plant-for-the-planet.png",
      letter: "",
    },
  };

  const [menuItem, setMenuItem] = useState("pfp");

  return (
    <div className={styles.container}>
      <h1>experience</h1>
      <div className={styles.content}>
        <div className={styles.left}>
          {Object.entries(arr)
            .reverse()
            .map(([key, value] = entry) => (
              <button
                key={key}
                onClick={() => setMenuItem(key)}
                className={menuItem === key ? `${styles.selected}` : ""}
              >
                {value.name}
              </button>
            ))}
        </div>
        <div className={styles.right}>
          {
            <>
              <h3>
                {arr[menuItem].title} <span>{`@ ${arr[menuItem].name}`}</span>
              </h3>
              <p>{arr[menuItem].duration}</p>
              <ul>
                {arr[menuItem].description.map((d, index) => (
                  <li key={index}>
                    <span>•</span> {d}
                  </li>
                ))}
              </ul>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default experience;
