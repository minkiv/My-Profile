
import { render, router } from './lib';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import HomePage from './pages/home';
import PostDetailPage from './pages/post-detail';
import PostsPage from './pages/posts';
import ProjectDetailPage from './pages/project-detail';
import ProjectsPage from './pages/projects';
// alt + shift + o
const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:id", (params) => render(ProjectDetailPage(params.data.id), app));
router.on("/posts", () => render(PostsPage, app));
router.on("/post/:id", () => render(PostDetailPage, app));

router.notFound(() => console.log("not found page"));

router.resolve();