import React from "react";
function Contact() {
  const hoverOnContact = (e) => {
    let theContact = e.target;
    console.log(theContact.innerHTML);
  };

  return (
    <div id="Contact" className=".all">
      <div id="contact_title">
        <h1>Contact</h1>
      </div>

      <div class="contact_container_flex">
        <div class="contact_container">
          <a
            href="https://api.whatsapp.com/send?phone=221777278655&text=The message"
            target="_blank"
          >
            <div onMouseOver={hoverOnContact} class="contact_cart">
              Whatsapp
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/pape-momar-ndiaye-37b862199/"
            target="_blank"
          >
            <div onMouseOver={hoverOnContact} class="contact_cart">
              linkedin
            </div>
          </a>
          <a href="https://www.behance.net/papendiay" target="_blank">
            <div onMouseOver={hoverOnContact} class="contact_cart">
              behance
            </div>
          </a>
          <a
            href="https://www.instagram.com/pape_momar_ndiaye/"
            target="_blank"
          >
            <div onMouseOver={hoverOnContact} class="contact_cart">
              instagram
            </div>
          </a>
          <a
            href="mailto:pmomar44@gmail.com?subject=The message"
            target="_blank"
          >
            <div onMouseOver={hoverOnContact} class="contact_cart">
              mail
            </div>
          </a>
        </div>
      </div>
      <div id="tel_gMail">
        Mail: Pmomar44@gmail.com <br />
        Tel: 77 727 86 55
      </div>
    </div>
  );
}

export default Contact;
