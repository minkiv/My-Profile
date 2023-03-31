import "bootstrap/dist/css/bootstrap.min.css";
import { render, router } from "./src/lib";
import AboutPage from "./src/pages/about";
import ContactPage from "./src/pages/contact";
import HomePage from "./src/pages/home";
import PostDetailPage from "./src/pages/post-detail";
import PostsPage from "./src/pages/posts";
import ProjectDetailPage from "./src/pages/project-detail";
import ProjectsPage from "./src/pages/projects";
import adminProjectsPage from "./src/pages/admin/projects";
import adminProjectAddPage from "./src/pages/admin/projects-add";
import adminProjectEditPage from "./src/pages/admin/projects-edit";
import AdminContact from "@/pages/admin/contacts";
import hiep from "@/pages/admin/hiep";
import CategoriesPage from "@/pages/admin/categories";
import CategoryAdd from "@/pages/admin/category-add";
import CategoryEdit from "@/pages/admin/category-edit";
// alt + shift + o
const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:id", ({ data }) =>
  render(() => ProjectDetailPage(data), app)
);
router.on("/posts", () => render(PostsPage, app));
router.on("/post/:id", () => render(PostDetailPage, app));

router.on("/admin/projects", () => render(adminProjectsPage, app));
router.on("/admin/projects/add", () => render(adminProjectAddPage, app));
router.on("/admin/projects/:id/edit", ({ data }) =>
  render(() => adminProjectEditPage(data), app)
);
router.on("/admin/categories", () => render(CategoriesPage, app));
router.on("/admin/categories/add", () => render(CategoryAdd, app));
router.on("/admin/categories/:id/edit", ({ data }) =>
  render(() => CategoryEdit(data), app)
);
router.on("/admin/contacts", () => render(AdminContact, app));
router.on("/admin/information", () => render(hiep, app));
router.notFound(() => console.log("not found page"));

router.resolve();
