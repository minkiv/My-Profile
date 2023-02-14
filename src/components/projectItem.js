const projectItem = ({ project }) => {
  return `
    <div><a href = "/project/${project.id}">${project.name}</a></div>
  `;
};

export default projectItem;
