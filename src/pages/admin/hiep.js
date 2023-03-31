import { Adminmenus } from "@/data";
import style from "./projects.module.css";
import { useEffect, useState } from "@/lib";
const hiep = () => {
  const [job, setJob] = useState([]);
  const [edu, setEdu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Hiep")
      .then((response) => response.json())
      .then((data) => setJob(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/Educations")
      .then((response) => response.json())
      .then((data) => setEdu(data));
  }, []);
  useEffect(() => {
    const form = document.querySelector("#form-edit");
    const currentJob = document.querySelector("#currentJob");
    const currentJobDesc = document.querySelector("#currentJobDesc");
    const email = document.querySelector("#email");
    const Address = document.querySelector("#Address");
    const futureJob = document.querySelector("#futureJob");
    const phoneNumber = document.querySelector("#phoneNumber");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = {
        currentJob: currentJob.value,
        email: email.value,
        currentJobDesc: currentJobDesc.value,
        Address: Address.value,
        futureJob: futureJob.value,
        phoneNumber: phoneNumber.value,
      };
      fetch("http://localhost:3000/Hiep", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then(() => router.navigate("/about"))
        .catch((error) => console.log(error));
    });
  }, []);
  return `<div class = "${style.admin_h}">
  <nav id = "navba" class = "backdrop-blur-lg z-10 px-8 shadow-md ${
    style.nav
  }" >
  ${Adminmenus.map(
    (menu) =>
      `<div class = "${style.nava}"><a  href="${menu.link}">${menu.name}</a></div>`
  ).join("")}
</nav>
</div>
<div class = "${style.projects}">
    <h1>Quản lý thông tin cá nhân</h1>
    <form id="form-edit" class = "${style.form_grid} ${style.infor}">
    ${job
      .map(
        (j) => `
            <div class="form-group">
            <label for="currentJob">Current Job</label><br />
            <input type="text" id="currentJob" class="border" value="${j.currentJob}" />
        </div>
          <div class="form-group">
            <label for="currentJobDesc">Description</label><br />
        <textarea class="form-control" id = "currentJobDesc" name="message">${j.currentJobDesc}</textarea>
        </div>
          <div class="form-group">
            <label for="author">Email</label><br />
            <input type="text" id="email" class="border" value="${j.email}" />
        </div>
          <div class="form-group">
            <label for="phoneNumber">Phone Number</label><br />
            <input type = "number" id="phoneNumber"  value="${j.phoneNumber}"  >
          </div>
          <div class="form-group">
        <label for="Address">Address</label><br />
        <input type="text" id="Address" class="border" value="${j.Address}"/>
      </div>
      <div class="form-group">
        <label for="futureJob">Expected Job</label><br />
        <input type="text" id="futureJob" class="border" value="${j.futureJob}"/>
      </div>`
      )
      .join("")}
      ${edu
        .map(
          (ed) => `
          <h5 class="${style.edName}">${ed.name}</h5>
      <div class="form-group">
        <label for="time">Time</label><br />
        <input type="text" id="time" class="border" value="${ed.time}"/>
      </div>
      ${ed.gain
        .map(
          (cer) => `
        <div class="form-group">
        <label for="Clink">Certificate Link</label><br />
        <input type="text" id="Clink" class="border" value="${cer.Clink}"/>
      </div>
      <div class="form-group">
        <label for="Cname">Certificate Name</label><br />
        <input type="text" id="Cname" class="border" value="${cer.Cname}"/>
      </div>`
        )
        .join("")}
      
    `
        )
        .join("")}
            <button class="btn btn-primary">Sửa</button>
        </form>
</div>
`;
};

export default hiep;
