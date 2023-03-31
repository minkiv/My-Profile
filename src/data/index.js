const menus = [
  { id: 1, name: "Trang chủ", link: "/" },
  { id: 2, name: "About Me", link: "/about" },
  { id: 3, name: "My Projects", link: "/projects" },
  { id: 4, name: "Contact", link: "/contact" },
  // { id: 5, name: "Admin", link: "/contact#/admin/projects" },
];
const Adminmenus = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Categories", link: "/admin/categories" },
  { id: 3, name: "Projects", link: "/contact#/admin/projects" },
  { id: 4, name: "Contacts", link: "/admin/contacts" },
  { id: 5, name: "Informations", link: "/admin/information" },
];
const projects = [
  {
    id: 1,
    name: "Dự án 1",
    teams: [
      { id: 1, name: "Đạt" },
      { id: 2, name: "Kiên" },
      { id: 3, name: "Tùng" },
    ],
  },
  {
    id: 2,
    name: "Dự án mẫu",
  },
  {
    id: 3,
    name: "Dự án tốt nghiệp",
    teams: [
      { id: 1, name: "Đạt" },
      { id: 2, name: "Kiên" },
      { id: 3, name: "Tùng" },
    ],
  },
];

export { projects, menus, Adminmenus };
