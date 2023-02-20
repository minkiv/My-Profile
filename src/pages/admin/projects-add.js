import { menus } from "@/data";
import style from "./projects.module.css";
import { router, useEffect } from "@/lib";
// import { projects } from "../../data";
const ProjectAdd = () => {
  // const projects = JSON.parse(localStorage.getItem("projects")) || [];

  useEffect(() => {
    const form = document.querySelector("#form-add");
    const name = document.querySelector("#name");
    const categoryID = document.querySelector("#categoryID");
    const author = document.querySelector("#author");
    const img = document.querySelector("#img");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // projects.push({
      //   id: projects.length + 1,
      //   name: name.value,
      // });
      // localStorage.setItem("projects", JSON.stringify(projects));
      const formData = {
        name: name.value,
        categoryID: categoryID.value,
        author: author.value,
        img: img.value,
      };
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then(() => router.navigate("/admin/projects"));
    });
  });
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
  
  <h1>Add Project</h1>
  <form id="form-add">
  <div class="form-group">
        <label for="name">Name</label><br />
        <small id="names" class="form-text text-muted">Project Name</small><br />
        <input type="text" id="name" class="border" />
      </div>
      <div class="form-group">
        <label for="categoryid">Category</label><br />
        <small id="categoryids" class="form-text text-muted">Shop/Information</small><br />
        <input type="number" max="" id="categoryID" class="border" />
      </div>
      <div class="form-group">
        <label for="author">Author</label><br />
        <small id="authors" class="form-text text-muted">Author</small><br />
        <input type="text" id="author" class="border" />
      </div>
      <div class="form-group">
        <label for="img">Image</label><br />
        <small id="imgs" class="form-text text-muted">image</small><br />
        <input type="text" id="img" class="border" />
      </div>
      <button class="btn btn-primary">Thêm</button>
  </form>
</div>`;
};

export default ProjectAdd;
