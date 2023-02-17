import header from "../components/header";
import footer from "@/components/footer";
const AboutPage = () => {
  return ` ${header(`<h1 class = "ab-tt">ABOUT ME</h1>`)}
    <div class="ab-content">
      <div class="ab-ct1">
        <img width="400px" src="./src/images/pic3.jpg" alt="" />
        <div class="about">
          <h2>Nguyễn Thị Hiệp</h2>
          <h6>Student of FPT Polytechnic</h6>
          <p>
            Hiện tại, em đang là sinh viên năm 2 tại trường FPT Polytechnic. Em
            bắt đầu học lập trình từ tháng 10 năm 2021 vì cảm thấy yêu thích
            công việc này. Em có đi làm thêm ở một số nơi nhưng ngoài những giờ
            học trên trường thì em giành nhiều thời gian ở nhà để ôn lại kiến
            thức và tìm hiểu những kiến thức mới.Mục tiêu hiện tại của em là trở
            thành một front-end developer.
          </p>
          <button>
            <a
              href="https://www.linkedin.com/in/nguy%E1%BB%85n-th%E1%BB%8B-hi%E1%BB%87p-088689221/"
              >Linkedin</a
            >
          </button>
        </div>
      </div>
      <div class="ab-ct2">
        <h2>Quá trình học vấn</h2>
        <div class="ab-ct-edu">
          <div class="ab-edu-tt">
            <h6>Trường FPT Polytechnic</h6>
            <p>10/2021 - 1/2024</p>
          </div>
          <div class="ab-edu-ct">
            <p>Web Programming</p>
          </div>
        </div>
        <div class="ab-ct-edu">
          <div class="ab-edu-tt">
            <h6>Chứng chỉ đạt được</h6>
            <p>2021 - 2023</p>
          </div>
          <div class="ab-edu-ct">
            <ul>
              <li>
                <a
                  href="file:///C:/Users/HP/OneDrive/Desktop/certificate/certificate_google%20digital%20garage.pdf"
                  >Google digital garage Certificate</a
                >
              </li>
              <li>
                <a
                  href="file:///C:/Users/HP/OneDrive/Desktop/certificate/CertificateOfCompletion_Learning%20Excel%20for%20the%20web%20Office%20365Microsoft%20365%20(1).pdf"
                >
                  Learnig Excel for the web(Microsoft 365)</a
                >
              </li>
              <li>
                <a
                  href="file:///C:/Users/HP/OneDrive/Desktop/certificate/CertificateOfCompletion_Digital%20Networking%20Strategies.pdf"
                  >Digital Networking strategies</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="ab-ct-edu">
          <div class="ab-edu-tt">
            <h6>Chứng chỉ Tiếng Anh</h6>
            <p>2021 - 2023</p>
          </div>
          <div class="ab-edu-ct">
            <ul>
              <li>
                <a
                  href="file:///C:/Users/HP/OneDrive/Desktop/certificate/EF%20SET%20Certificate.pdf"
                  >EF SET Certificate</a
                >
              </li>
              <li>
                <a
                  href="file:///C:/Users/HP/OneDrive/Desktop/certificate/english-for-healthcare_certificate_of_achievement_2ucy90e.pdf"
                >
                  English for Health Care Certificate</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="ab-ct3">
        <div class="about">
          <h2>Thông Tin Cơ Bản</h2>
          <p>Email: Nguyenthihiep2003@gmail.com</p>
          <p>Điện Thoại: 0989328421</p>
          <p>Địa chỉ: Sóc Sơn - Hà Nội</p>
          <p>Nghề nghiệp: Web Developer</p>
        </div>
      </div>
    </div>
    ${footer()}`;
};
export default AboutPage;
