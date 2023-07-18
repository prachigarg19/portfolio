import Project from "../components/Project/Project";
import styles from "../styles/projects.module.scss";

const Projects = () => {
  const projects = [
    {
      img: "/social-gram.png",
      name: "Social Gram",
      description:
        "Developed social media app with seamless login. Implemented feed, post creation, like/dislike system, and follow/unfollow system.",
      tech: ["MongoDB", "ExpressJs", "NodeJs", "ReactJs"],
      github: "https://github.com/prachigarg19/social_gram",
      deployment: "",
    },
    {
      img: "/scoop-haven.jpg",
      name: "Scoop Haven",
      description:
        "This is a responsive and interactive landing page that is meticulously designed to allow users to immerse themselves in an engaging experience",
      github: "https://github.com/prachigarg19/scoop-haven",
      tech: ["React Js", "ChakraUI"],
      deployment: "https://main--scoop-haven.netlify.app/",
    },
    {
      img: "/Attendance.png",
      name: "Attendance Manager",
      description:
        "Automating the time-consuming attendance marking process in online classes via attendees list given by Microsoft Teams",
      github: "https://github.com/prachigarg19/Attendance_Manager/",
      tech: ["ElectronJs", "NodeJs", "CSV & XLSX Scraping"],
      deployment: "",
    },
    {
      img: "/mind-match.jpg",
      name: "Mind Match",
      description:
        "Mind Match is a web-based memory game where the objective is to find matching pairs of cards. ",
      github: "https://github.com/prachigarg19/mind-match",
      tech: ["HTML", "CSS", "Javascript"],
      deployment: "https://prachigarg19.github.io/mind-match/",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <h1>projects</h1>
      {projects.map((p, index) => (
        <Project data={p} key={index} />
      ))}
    </div>
  );
};

export default Projects;
