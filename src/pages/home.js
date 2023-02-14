import footer from "@/components/footer";
import header from "../components/header";

const HomePage = () => {
  return `
    ${header()}
    <div class = "content">
    <h1>Home Page</h1>
    </div>
    ${footer()}`;
};
export default HomePage;
