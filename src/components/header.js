import { menus } from "@/data";
import { useEffect } from "@/lib";

const header = () => {
  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };

    var navbar = document.getElementById("navba");
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  });
  return `<div class = "header">
        <nav id = "navba" class = "backdrop-blur-lg z-10 top-0 px-8 shadow-md" >
            ${menus
              .map((menu) => `<a href="${menu.link}">${menu.name}</a>`)
              .join("")}
        </nav>
        <div class = "hct">
        <img src="" alt="">
        <h1>Xin chào, Tôi là Nguyễn thị Hiệp</h1>
        <div class = "font-normal md:font-medium dark:text-white my-4 flex items-center">
        <span >Tôi làm</span>
        <span>Web Developer</span>
        </div>
        </div>
        </div>
    `;
};
export default header;
