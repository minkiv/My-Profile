// import { projects } from "@/data";
import { useEffect, useState } from "@/lib";
const ProjectsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        // Xóa local
        const newProjects = data.filter((project) => project.id != id);
        setData(newProjects);
        // Xóa server
        fetch(`http://localhost:3000/projects/${id}`, {
          method: "DELETE",
        }).then(() => alert("Xóa thành công!"));
      });
    }
  });

  return `
  <h1 class="text-blue-700">Quản Lý dự án</h1> 
  <button class ="btn btn-primary"><a class="text-blue-700" href = "/admin/projects/add">Thêm</a></button>
  <table class="table table-bordered ">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  ${data
    .map(
      (project, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${project.name}</td>
            <td>
                <button data-id = "${
                  project.id
                }" class = "btn btn-remove btn-danger">Remove</button>
                <a href = "/admin/projects/${project.id}/edit">Sửa</a>
            </td>
        </tr>
  `
    )
    .join("")}
    
  </tbody>
</table>`;
};

export default ProjectsPage;
