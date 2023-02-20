import header from "../components/header";
import footer from "@/components/footer";
import { useEffect, useState } from "@/lib";
import ProjectsList from "@/components/ProjectsList";

const ProjectsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return ` ${header(`<h1>My Projects</h1>`)}
  <p>Take A Look At</p>
  <h1>MY WORK</h1>
   ${ProjectsList()}
   
    ${footer()}`;
};
export default ProjectsPage;
