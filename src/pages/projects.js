import header from "../components/header";
import ProjectsList from "../components/ProjectsList";
import { projects } from "../data";
import footer from "@/components/footer";

const ProjectsPage = () => {
  return `
    ${header(`<h1>My Projects</h1>`)}
    
    ${ProjectsList({ projects })}${footer()}`;
};
export default ProjectsPage;
