
import Navigo from "navigo";
const router = new Navigo("/", { linksSelector: "a", hash: true });
const render = (content, container) => {
    if (typeof content === "function") {
        container.innerHTML = content();
    } else {
        container.innerHTML = content;
    }
};
export { render, router };
