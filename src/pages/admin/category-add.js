import { Adminmenus } from "@/data";
import style from "./projects.module.css";
import { router, useEffect } from "@/lib";
// import { projects } from "../../data";
const CategoryAdd = () => {
  // const projects = JSON.parse(localStorage.getItem("projects")) || [];

  useEffect(() => {
    const form = document.querySelector("#form-add");
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
        setError(name, "Category name is required");
        err += 1;
      } else {
        setSuccess(name);
      }
      if (err === 0) {
        const formData = {
          name: name.value,
        };
        fetch("http://localhost:3000/categories", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then(() => router.navigate("/admin/categories"));
      }
    };
  });
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
  
  <h1>Add Project</h1>
  <form id="form-add" class = "${style.form_grid}">
  <div class="form-group">
        <label for="name">Name<spand class = "required">*</spand></label><br />
        <small id="names" class="form-text text-muted">Category Name</small><br />
        <input type="text" id="name" class="border" />
        <div class="error ${style.error}"></div>
        </div>
      
      <button class="btn btn-primary ${style.btn}">Thêm</button>
  </form>
</div>`;
};

export default CategoryAdd;
