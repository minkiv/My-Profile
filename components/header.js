import { menus } from "../data";

const header = () => {
    return `
        <nav>
            ${menus.map(menu => `<a href="${menu.link}">${menu.name}</a>`).join('')}
        </nav>
    `
};
export default header;