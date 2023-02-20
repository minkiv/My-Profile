import projectItem from "./projectItem";

const ProjectsList = () => {
  return `<div class="projects">
  <ul class="cards">
  ${projectItem()}
  </ul>
  </div>
`;
};
export default ProjectsList;
// ${projects?.map((project) => `${projectItem({ project })}`).join("")}
