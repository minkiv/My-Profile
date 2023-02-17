import footer from "@/components/footer";
import header from "../components/header";

const HomePage = () => {
  return `
    ${header(`<img src="./src/images/profilePicture.jpg" class = "" width = "100"alt="">
    <h1>Nguyễn thị Hiệp </h1>
    <p id = "intro"></p>
    <a href="https://github.com/minkiv/"><i class="fa fa-github" aria-hidden="true"></i></a>
    <a href=""><i class="fa fa-twitter" aria-hidden="true" title = "@Minkiv3"></i></a>
    <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
    <a href="mailto:hiepntph28717@fpt.edu.vn" title = "hiepntph28717@fpt.edu.vn"><i class="fa fa-envelope" aria-hidden="true"></i></a>
    <a href=""><i class="fa fa-steam-square" aria-hidden="true"></i></a>
    `)}
    <div class = "content">
    <h2>Hey!</h2>
    <p id = "about">I'm Hiệp from Viet Nam! <br>
    I love programming, as well as running, taking photos and learning new things! <br>
    Feel free to get in touch or take a look at my past work below.</p>
    </div>
    ${footer()}
  `;
};

export default HomePage;
