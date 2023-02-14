import projectItem from "./projectItem";

const ProjectsList = ({ projects }) => {
    return `
        ${projects?.map((project) => `${projectItem({ project })}`).join("")}
`;
};
export default ProjectsList;

