import { menus } from "@/data";

import style from "./projects.module.css";
import { useEffect, useState } from "@/lib";
const AdminContact = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);
  return `<div class = "${style.admin_h}">
  <nav id = "navba" class = "backdrop-blur-lg z-10 px-8 shadow-md ${
    style.nav
  }" >
  ${menus
    .map(
      (menu) =>
        `<div class = "${style.nava}"><a  href="${menu.link}">${menu.name}</a></div>`
    )
    .join("")}
</nav>
</div>
<div class = "${style.projects}">
  <h1 class="text-blue-700">Quản Lý Liên Hệ</h1> 
  <table class="table table-bordered ">
  <thead class="thead-dark">
    <tr> 
      <th>ID</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
  ${contacts
    .map(
      (contact, index) => ` <tr>
  <td>${index + 1}</td>
  <td>${contact.phone}</td>
  <td>${contact.email}</td>
  <td>${contact.address}</td>
  
</tr>`
    )
    .join("")}
  </tbody>
</table>
</div>
`;
};

export default AdminContact;
