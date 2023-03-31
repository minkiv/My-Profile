import header from "../components/header";
import footer from "@/components/footer";
import { useEffect, useState } from "@/lib";
import ProjectsList from "@/components/ProjectsList";
import Category from "@/components/Category";
import style from "./contact.module.css";

const ProjectsPage = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  const onHandleClick = (id) => {
    fetch(`http://localhost:3000/categories/${id}?_embed=projects`)
      .then((response) => response.json())
      .then((data) => setData(data.projects));
    console.log(id);
  };
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return ` ${header(`<h1>My Projects</h1>`)}
  <div class="${style.project}">
  <p>Take A Look At</p>
  <h1>MY WORK</h1>
  ${Category({ categories, onClick: onHandleClick })}
  </div>
   ${ProjectsList()}
  
    ${footer()}`;
};
export default ProjectsPage;
