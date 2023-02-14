import { menus } from "@/data";
const footer = () => {
  return `
  <div class = "footer">
    <div class="inf">
  <div class="ct-me">
  <h2>Contact Me</h2>
        <p>Email: <a>hiepntph28717@fpt.edu.vn</a></p>
        <p>Twitter: <a>minkiv22</a></p>
      </div>
      <div class="sitemap">
      <h2>Site Map</h2>
        <ul class="">
          ${menus
            .map((menu) => `<li href="${menu.link}">${menu.name}</li>`)
            .join("")}
        </ul>
      </div>
    </div>
    <div class="cp"></div>
    </div>
  `;
};

export default footer;
