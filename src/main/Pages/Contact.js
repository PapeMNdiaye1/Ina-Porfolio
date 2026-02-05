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
            href="https://api.whatsapp.com/send?phone=221766117508&text="
            target="_blank"
          >
            <div onMouseOver={hoverOnContact} class="contact_cart">
              Whatsapp
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/ina-thiam-b13bb5281/"
            target="_blank"
          >
            <div onMouseOver={hoverOnContact} class="contact_cart">
              linkedin
            </div>
          </a>
          <a
            href="https://x.com/inanfthiam?s=21&t=oSME2Spx7YOFp0F-kXd1CQ"
            target="_blank"
          >
            <div onMouseOver={hoverOnContact} class="contact_cart">
              twitter
            </div>
          </a>
          <a
            href="https://www.instagram.com/ina_makosi?igsh=MWFwaTh0cjdqZHUwNQ=="
            target="_blank"
          >
            <div onMouseOver={hoverOnContact} class="contact_cart">
              instagram
            </div>
          </a>
          <a href="mailto:makosiprod@gmail.com?subject=" target="_blank">
            <div onMouseOver={hoverOnContact} class="contact_cart">
              mail
            </div>
          </a>
        </div>
      </div>
      <div id="tel_gMail">
        Mail: makosiprod@gmail.com <br />
        Tel: +221 76 611 75 08
      </div>
    </div>
  );
}

export default Contact;
