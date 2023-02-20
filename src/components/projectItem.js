import { useEffect, useState } from "@/lib";
const projectItem = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return `
  ${data
    .map(
      (project) => `
<li>
<a href="https://github.com/minkiv" class="card-gg">
<img src="${project.img}" class="card__image" alt="" />
<div class="card__overlay">
  <div class="card__header">
    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
    <img class="card__thumb" src="./src/images/pic3.jpg" alt="" />
    <div class="card__header-text">
      <h3 class="card__title">${project.name}</h3>
      <span class="card__status">${project.author}</span>
    </div>          
  </div>
  <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
</div>
</a>
</li>    
`
    )
    .join("")}
  `;
};

export default projectItem;
