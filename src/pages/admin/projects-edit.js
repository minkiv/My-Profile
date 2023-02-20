import { menus } from "@/data";

import style from "./projects.module.css";
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
    const categoryID = document.querySelector("#categoryID");
    const author = document.querySelector("#author");
    const img = document.querySelector("#img");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // const newProject = {
      //   id: currentProject.id,
      //   name: name.value,
      // };
      const formData = {
        name: name.value,
        categoryID: categoryID.value,
        author: author.value,
        img: img.value,
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
  }, [project.author]);

  return `
  <div class = "${style.admin_h}">
  <nav id = "navba" class = "backdrop-blur-lg z-10 px-8 shadow-md ${
    style.nav
  }" >
  ${menus
    .map(
      (menu) =>
        `<div class = "${style.nava}"><a  href="${menu.link}">${menu.name}</a></div>`
    )
    .join("")}
</nav></div>
 
  <div class = "${style.editform}">
        <form id="form-edit">
            <div class="form-group">
            <label for="name">Name</label><br />
            <small id="names" class="form-text text-muted">Project Name</small> <br>
            <input type="text" id="name" class="border" value="${
              project.name
            }" />
          </div>
          <div class="form-group">
            <label for="categoryid">Category</label><br />
            <small id="categoryids" class="form-text text-muted">Shop/Information</small><br>
            <input type="number" id="categoryID" class="border" value="${
              project.categoryID
            }" />
          </div>
          <div class="form-group">
            <label for="author">Author</label><br />
            <small id="authors" class="form-text text-muted">Author</small><br>
            <input type="text" id="author" class="border" value="${
              project.author
            }" />
          </div>
          <div class="form-group">
            <label for="img">Image</label><br />
            <small id="imgs" class="form-text text-muted">image</small><br>
            <input type="text" id="img" class="border" value="${project.img}" />
          </div>
            <button class="btn btn-primary">Sửa</button>
        </form>
    </div>
   `;
};

export default ProjectEdit;
