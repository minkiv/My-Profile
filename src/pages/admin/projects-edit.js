import { router, useEffect, useState } from "@/lib";
const ProjectEdit = ({ id }) => {
  // const projects = JSON.parse(localStorage.getItem("projects")) || [];
  // const currentProject = projects.find((project) => project.id == id);
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/projects/" + id)
      .then((response) => response.json())
      .then((data) => setProject(data));
  }, []);
  useEffect(() => {
    const form = document.querySelector("#form-edit");
    const name = document.querySelector("#name");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // const newProject = {
      //   id: currentProject.id,
      //   name: name.value,
      // };
      const formData = {
        name: name.value,
      };

      // const newProjects = projects.map((project) => {
      //   return project.id == newProject.id ? newProject : project;
      // });
      // localStorage.setItem("projects", JSON.stringify(newProjects));

      // router.navigate("/admin/projects");
      fetch("http://localhost:3000/projects/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then(() => router.navigate("/admin/projects"))
        .catch((error) => console.log(error));
    });
  });

  return `<div>
        <form id="form-edit">
            <input type="text" id="name" class="border" value="${project.name}" />
            <button class="btn btn-primary">Sửa</button>
        </form>
    </div>`;
};

export default ProjectEdit;
