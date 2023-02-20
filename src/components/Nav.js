import { menus } from "@/data";
import { useEffect } from "@/lib";
// import style from "./nav.module.css";

const Nav = () => {
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
  return `<nav id = "navba" class = "backdrop-blur-lg z-10 px-8 shadow-md " >
  ${menus.map((menu) => `<a  href="${menu.link}">${menu.name}</a>`).join("")}
</nav>`;
};

export default Nav;
