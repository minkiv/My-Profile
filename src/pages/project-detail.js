import header from "../components/header";
import { projects } from "../data";
import footer from "@/components/footer";

const ProjectDetailPage = ({ id }) => {
  const currentProject = projects.find((project) => project.id == id);
  if (!currentProject) return "";

  return `
      ${header()}
          <h1>${currentProject.name}</h1>${footer()}
      `;
};
export default ProjectDetailPage;
