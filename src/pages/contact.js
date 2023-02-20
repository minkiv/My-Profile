import footer from "@/components/footer";
import { router, useEffect } from "@/lib";
import header from "../components/header";

const ContactPage = () => {
  useEffect(() => {
    const form = document.querySelector("#form-contact");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const address = document.querySelector("#address");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = {
        email: email.value,
        phone: phone.value,
        address: address.value,
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
    });
  });
  return `
    ${header(`
    <p class = "stranger">Dont't be A Stranger</p>
    <h1>CONTACT ME.</h1>`)}
    <div class = "contact">
    <H1>Let's Work Together. <br> Drop Me A Line.</H1>
    <form id = "form-contact">
      <div class="form-group">
        <label for="Email1">Email address</label> <br />
        <small id="emails" class="form-text text-muted"
          >Nguyenthihiep2003@gmail.com</small
        >
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group">
        <label for="phoneNumber">Phone Number</label> <br />
        <small id="phoneNumbers" class="form-text text-muted">0989328421</small>
        <input type="number" class="form-control" id="phone" />
      </div>
      <div class="form-group">
        <label for="address">My Address</label><br />
        <small id="addresses" class="form-text text-muted">Hà Nội</small>
        <input type="text" class="form-control" id="address" />
      </div>
      <div>
      <button type="submit" class="btn btn-primary">Send</button>
      </div>
    </form>
    </div>
    ${footer()}`;
};
export default ContactPage;
