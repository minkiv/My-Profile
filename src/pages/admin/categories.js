import { Adminmenus } from "@/data";

import style from "./projects.module.css";
import { useEffect, useState } from "@/lib";
// import Category from "@/components/Category";
// import Projects from "@/components/projects";
const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        // Xóa local
        const newCategories = categories.filter(
          (category) => category.id != id
        );
        setCategories(newCategories);
        // Xóa server
        fetch(`http://localhost:3000/categories/${id}`, {
          method: "DELETE",
        }).then(() => alert("Xóa thành công!"));
      });
    }
  });

  return `<div class = "${style.admin_h}">
  <nav id = "navba" class = "backdrop-blur-lg z-10 px-8 shadow-md ${
    style.nav
  }" >
  ${Adminmenus.map(
    (menu) =>
      `<div class = "${style.nava}"><a  href="${menu.link}">${menu.name}</a></div>`
  ).join("")}
</nav></div>
  <div class = "${style.editform}">
  <h1 class="text-blue-700 ${style.inline}">Quản Lý danh mục</h1> 
  <a href = "/admin/categories/add"><button class = "btn btn-primary ${
    style.inline
  }">Add</button></a>
  <table class="table table-bordered ">
  <thead class="thead-dark">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  ${categories.map(
    (category) => `<tr>
    <td>${category.id}</td>
    <td>${category.name}</td>
    <td class = "${style.projectAction}">
            <button data-id = "${category.id}" class = "btn btn-remove btn-danger">Remove</button>
            <a href = "/admin/categories/${category.id}/edit"><button class="btn btn-primary">Edit</button></a>
        </td>
        </tr>
  `
  )}
  </tbody>
</table>
</div>`;
};

export default CategoriesPage;
