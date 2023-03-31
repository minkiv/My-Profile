import footer from "@/components/footer";
import { router, useEffect } from "@/lib";
import header from "../components/header";
import style from "./contact.module.css";

const ContactPage = () => {
  useEffect(() => {
    const form = document.querySelector("#contact-form");
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const address = document.querySelector("#address");
    const message = document.querySelector("#message");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      validateInputs();
    });
    const setError = (element, message) => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector(".error");

      errorDisplay.innerText = message;
      inputControl.classList.add("error");
      inputControl.classList.remove("success");
    };

    const setSuccess = (element) => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector(".error");

      errorDisplay.innerText = "";
      inputControl.classList.add("success");
      inputControl.classList.remove("error");
    };

    const isValidEmail = (email) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    const validateInputs = () => {
      const usernameValue = name.value.trim();
      const emailValue = email.value.trim();
      const phoneValue = phone.value.trim();
      let err = 0;

      if (usernameValue === "") {
        setError(name, "Username is required");
        err += 1;
      } else {
        setSuccess(name);
      }

      if (emailValue === "") {
        setError(email, "Email is required");
        err += 1;
      } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address");
      } else {
        setSuccess(email);
      }

      if (phoneValue === "") {
        setError(phone, "Phone number is required");
        err += 1;
      } else if (phoneValue.length < 8) {
        setError(phone, "Phone number must be at least 10 character.");
      } else {
        setSuccess(phone);
      }
      if (err === 0) {
        const formData = {
          name: name.value,
          email: email.value,
          phone: phone.value,
          address: address.value,
          message: message.value,
        };
        fetch("http://localhost:3000/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then(() => alert("Thank you!"))
          .then(() => router.navigate("/contact"));
      }
    };
  });
  return `
    ${header(`
    <p class = "${style.stranger}">Dont't be A Stranger</p>
    <h1>CONTACT ME.</h1>`)}
    <div class = "${style.contact}">
    <H1>Let's Work Together. <br> Drop Me A Line.</H1>
    <form id = "contact-form" class = "${style.contact_form}">
    <div class="form-group ${style.input_control}">
        <label for="name">Name <spand class = "required">*</spand></label><br />
        <small id="names" class="form-text text-muted">Nguyễn Thị Hiệp</small>
        <input type="text" class="form-control" id="name" name="user_name" />
        <div class="error ${style.error}"></div>
      </div>
      <div class="form-group ${style.input_control}">
      <input type="hidden" name="contact_number">
        <label for="Email1">Email address<spand class = "required">*</spand></label> <br />
        <small id="emails" class="form-text text-muted"
          >Nguyenthihiep2003@gmail.com</small
        >
        <input
        type="text" name="user_email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
        <div class="error ${style.error}"></div>
      </div>
      <div class="form-group ${style.input_control}">
        <label for="phoneNumber">Phone Number<spand class = "required">*</spand></label> <br />
        <small id="phoneNumbers" class="form-text text-muted">0989328421</small>
        <input type="number" class="form-control" id="phone" />
        <div class="error ${style.error}"></div>
      </div>
      <div class="form-group ${style.input_control}">
        <label for="address">My Address</label><br />
        <small id="addresses" class="form-text text-muted">Hà Nội</small>
        <input type="text" class="form-control" id="address" />
      </div>
      <div class="form-group ${style.input_control}">
        <label for="address">Message</label><br />
        <textarea class="form-control" id = "message" name="message"></textarea>
      </div>
      <div>
      <button type="submit" class="btn btn-primary">Send</button>
      </div>
    </form>
    </div>
    ${footer()}`;
};
export default ContactPage;
