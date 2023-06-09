import { useState, useEffect, router } from "@/lib";
import style from "./nav.module.css";

const Projects = ({ projects }) => {
  // { projects: []} // projects.projects
  const [pjs, setPjts] = useState([]);
  //   const [categories, setCategories] = useState([]);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        // Xóa local
        const newProjects = pjs.filter((project) => project.id != id);
        setPjts(newProjects);
        // Xóa server
        fetch(`http://localhost:3000/projects/${id}`, {
          method: "DELETE",
        })
          .then(() => alert("Xóa thành công!"))
          .then(() => router.navigate("/admin/projects"));
      });
    }
  });
  return `<div>
        ${projects
          .map(
            (project, index) => ` <tr>
        <td>${index + 1}</td>
        <td>${project.name}</td>
        <td>${project.author}</td>
        <td><img width = "400px" src = "${project.img}"></td>
        <td class = "${style.projectDesc}">${project.des}</td>
        <td class = "${style.projectLink}"><a href ="${project.link}">${
              project.name
            }</a></td>
        <td class = "${style.projectAction}">
            <button data-id = "${
              project.id
            }" class = "btn btn-remove btn-danger">Remove</button>
            <a href = "/admin/projects/${
              project.id
            }/edit"><button class="btn btn-primary">Edit</button></a>
        </td>
    </tr>`
          )
          .join("")}
    </div> `;
};

export default Projects;
