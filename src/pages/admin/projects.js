import { Adminmenus } from "@/data";

import style from "./projects.module.css";
import { useEffect, useState } from "@/lib";
import Category from "@/components/Category";
import Projects from "@/components/projects";
const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  const onHandleClick = (id) => {
    fetch(`http://localhost:3000/categories/${id}?_embed=projects`)
      .then((response) => response.json())
      .then((data) => setProjects(data.projects));
    console.log(id);
  };
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);
  // useEffect(() => {
  //   const btns = document.querySelectorAll(".btn-remove");
  //   for (let btn of btns) {
  //     btn.addEventListener("click", function () {
  //       const id = this.dataset.id;
  //       // Xóa local
  //       const newProjects = data.filter((project) => project.id != id);
  //       setProjects(newProjects);
  //       // Xóa server
  //       fetch(`http://localhost:3000/projects/${id}`, {
  //         method: "DELETE",
  //       }).then(() => alert("Xóa thành công!"));
  //     });
  //   }
  // });

  return `<div class = "${style.admin_h}">
  <nav id = "navba" class = "backdrop-blur-lg z-10 px-8 shadow-md ${
    style.nav
  }" >
  ${Adminmenus.map(
    (menu) =>
      `<div class = "${style.nava}"><a  href="${menu.link}">${menu.name}</a></div>`
  ).join("")}
</nav></div>
  <div class = "${style.projects}">
  <h1 class="text-blue-700 ${style.inline}">Quản Lý dự án</h1> 
  <a href = "/admin/projects/add"><button class = "btn btn-primary ${
    style.inline
  }">Add</button></a>
  ${Category({ categories, onClick: onHandleClick })}
  <table class="table table-bordered ">
  <thead class="thead-dark">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Author</th>
      <th>Image</th>
      <th>Description</th>
      <th>Link</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  ${Projects({ projects })}
  </tbody>
</table>
</div>`;
};

export default ProjectsPage;
