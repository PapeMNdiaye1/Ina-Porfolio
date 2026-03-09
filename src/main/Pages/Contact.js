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
          <div class="Logos"></div>
          <div class="Logos"></div>
          <div class="Logos"> </div>
          <div class="Logos"></div>
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
