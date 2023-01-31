import header from "../components/header";
import ProjectsList from "../components/ProjectsList";
import { projectsFake } from "../data";

const ProjectsPage = () => {
    return `
    ${header()}
    <h1>Projects Page</h1>
    ${ProjectsList({ projects: projectsFake })}`;
};
export default ProjectsPage;