import { Adminmenus } from "@/data";

import style from "./projects.module.css";
import { router, useEffect, useState } from "@/lib";
const AdminContact = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        const newContacts = contacts.filter((contact) => contact.id != id);
        setContacts(newContacts);
        fetch(`http://localhost:3000/contacts/${id}`, {
          method: "DELETE",
        })
          .then(() => alert("Xóa thành công!"))
          .then(() => router.navigate("/admin/contacts"));
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
</nav>
</div>
<div class = "${style.projects}">
  <h1 class="text-blue-700">Quản Lý Liên Hệ</h1> 
  <table class="table table-bordered ">
  <thead class="thead-dark">
    <tr> 
      <th>ID</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Address</th>
      <th>Message</th>
      <th>Action</th>
      </tr>
  </thead>
  <tbody>
  ${contacts
    .map(
      (contact, index) => ` <tr>
  <td>${index + 1}</td>
  <td>${contact.name}</td>
  <td>${contact.phone}</td>
  <td>${contact.email}</td>
  <td>${contact.address}</td>
  <td>${contact.message}</td>
  <td>
  <button data-id = "${
    contact.id
  }" class = "btn btn-remove btn-danger">Remove</button></td>
</tr>`
    )
    .join("")}
  </tbody>
</table>
</div>
`;
};

export default AdminContact;
