import { Adminmenus } from "@/data";

import style from "./projects.module.css";
import { router, useEffect, useState } from "@/lib";
const CategoryEdit = ({ id }) => {
  // const projects = JSON.parse(localStorage.getItem("projects")) || [];
  // const currentProject = projects.find((project) => project.id == id);
  const [category, setCategory] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/categories/" + id)
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);
  useEffect(() => {
    const form = document.querySelector("#form-edit");
    const name = document.querySelector("#name");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      validateInputs();
    });
    const setError = (element, message) => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector(".error");

      errorDisplay.innerText = message;
      inputControl.classList.add("error");
      inputControl.classList.remove("success");
    };

    const setSuccess = (element) => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector(".error");

      errorDisplay.innerText = "";
      inputControl.classList.add("success");
      inputControl.classList.remove("error");
    };
    const validateInputs = () => {
      const projectnameValue = name.value.trim();
      let err = 0;

      if (projectnameValue === "") {
        setError(name, "Project name is required");
        err += 1;
      } else {
        setSuccess(name);
      }

      if (err === 0) {
        const formData = {
          name: name.value,
        };
        fetch("http://localhost:3000/categories/" + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then(() => router.navigate("/admin/categories"))
          .catch((error) => console.log(error));
      }
    };
  }, []);

  return `
  <div class = "${style.admin_h}">
  <nav id = "navba" class = "backdrop-blur-lg z-10 px-8 shadow-md ${
    style.nav
  }" >
  ${Adminmenus.map(
    (menu) =>
      `<div class = "${style.nava}"><a  href="${menu.link}">${menu.name}</a></div>`
  ).join("")}
</nav></div>
  <div class = "${style.editform}">
<h1>Edit Project</h1>
<form id="form-edit" class = "${style.form_grid}">
            <div class="form-group">
            <label for="name">Name<spand class = "required">*</spand></label><br />
            <small id="names" class="form-text text-muted">Project Name</small> <br>
            <input type="text" id="name" class="border" value="${
              category.name
            }" />
        <div class="error ${style.error}"></div>
            <button class="btn btn-primary">Sửa</button>
        </form>
    </div>
   `;
};

export default CategoryEdit;
