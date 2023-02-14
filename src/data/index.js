const menus = [
  { id: 1, name: "Trang chủ", link: "/" },
  { id: 2, name: "About Page", link: "/about" },
  { id: 3, name: "Projects Page", link: "/projects" },
  { id: 4, name: "Contact Page", link: "/contact" },
  { id: 5, name: "Admin", link: "/admin/projects" },
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

export { projects, menus };
