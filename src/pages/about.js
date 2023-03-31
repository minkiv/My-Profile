import header from "../components/header";
import footer from "@/components/footer";

import { useEffect, useState } from "@/lib";
const AboutPage = () => {
  const [job, setJob] = useState([]);
  const [edu, setEdu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Hiep")
      .then((response) => response.json())
      .then((data) => setJob(data));
  }, [job.currentJob]);
  useEffect(() => {
    fetch("http://localhost:3000/Educations")
      .then((response) => response.json())
      .then((data) => setEdu(data));
  }, []);
  return ` ${header(`<h1 class = "ab-tt">ABOUT ME</h1>`)}
    <div class="ab-content">
      <div class="ab-ct1">
        <img width="400px" src="./src/images/pic3.jpg" alt="" />
        <div class="about">
          <h2>Nguyễn Thị Hiệp</h2>
          ${job
            .map(
              (j) => `<h6>${j.currentJob}</h6>
              <p>${j.currentJobDesc}
              </p>`
            )
            .join("")}
          <button>
            <a
              href="https://www.linkedin.com/in/nguy%E1%BB%85n-th%E1%BB%8B-hi%E1%BB%87p-088689221/"
              >Linkedin</a
            >
          </button>
        </div>
      </div>
      <div class="ab-ct2">
        <h2>Quá trình học vấn</h2>
        ${edu
          .map(
            (ed) => `<div class="ab-ct-edu">
        <div class="ab-edu-tt">
          <h6>${ed.name}</h6>
          <p>${ed.time}</p>
        </div>
        <div class="ab-edu-ct">
        <ul>
        ${ed.gain
          .map((cer) => `<li><a href="${cer.Clink}">${cer.Cname}</a> </li>`)
          .join("")}
        </ul>
        </div>
      </div>`
          )
          .join("")}
      </div>
      <div class="ab-ct3">
        <div class="about">
          <h2>Thông Tin Cơ Bản</h2>
          ${job
            .map(
              (j) => `<p>Email: ${j.email}</p>
              <p>Điện Thoại:  ${j.phoneNumber}</p>
              <p>Địa chỉ:  ${j.Address}</p>
              <p>Nghề nghiệp:  ${j.futureJob}</p>`
            )
            .join("")}
        </div>
      </div>
    </div>
    ${footer()}`;
};
export default AboutPage;
