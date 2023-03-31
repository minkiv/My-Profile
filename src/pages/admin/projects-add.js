import { Adminmenus } from "@/data";
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
    const des = document.querySelector("#des");
    const link = document.querySelector("#link");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      validateInputs();
    });
    // projects.push({
    //   id: projects.length + 1,
    //   name: name.value,
    // });
    // localStorage.setItem("projects", JSON.stringify(projects));
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
      const categoryValue = categoryID.value.trim();
      const authorValue = author.value.trim();
      const descValue = des.value.trim();
      let err = 0;

      if (projectnameValue === "") {
        setError(name, "Project name is required");
        err += 1;
      } else {
        setSuccess(name);
      }

      if (categoryValue === "") {
        setError(categoryID, "Category is required");
        err += 1;
      } else {
        setSuccess(categoryID);
      }

      if (authorValue === "") {
        setError(author, "Author is required");
        err += 1;
      } else {
        setSuccess(author);
      }
      if (descValue === "") {
        setError(des, "Description is required");
        err += 1;
      } else {
        setSuccess(des);
      }
      if (err === 0) {
        const formData = {
          name: name.value,
          categoryID: categoryID.value,
          author: author.value,
          img: img.value,
          des: des.value,
          link: link.value,
        };
        fetch("http://localhost:3000/projects", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then(() => router.navigate("/admin/projects"));
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
        <small id="names" class="form-text text-muted">Project Name</small><br />
        <input type="text" id="name" class="border" />
        <div class="error ${style.error}"></div>
        </div>
      <div class="form-group">
        <label for="categoryid">Category<spand class = "required">*</spand></label><br />
        <small id="categoryids" class="form-text text-muted">Shop/Information</small><br />
        <input type="number" max="" id="categoryID" class="border" />
        <div class="error ${style.error}"></div>
        </div>
      <div class="form-group">
        <label for="author">Author<spand class = "required">*</spand></label><br />
        <small id="authors" class="form-text text-muted">Author</small><br />
        <input type="text" id="author" class="border" />
        <div class="error ${style.error}"></div>
        </div>
      <div class="form-group">
        <label for="img">Image</label><br />
        <small id="imgs" class="form-text text-muted">image</small><br />
        <input type = "file" id="img" >
        
      </div>
      <div class="form-group">
        <label for="des">Description<spand class = "required">*</spand></label><br />
        <small id="dess" class="form-text text-muted">Description</small><br />
        <input type="text" id="des" class="border" />
        <div class="error ${style.error}"></div>
        </div>
      <div class="form-group">
        <label for="link">Link</label><br />
        <small id="links" class="form-text text-muted">Link</small><br />
        <input type="text" id="link" class="border" />
      </div>
      <button class="btn btn-primary">Thêm</button>
  </form>
</div>`;
};

export default ProjectAdd;
