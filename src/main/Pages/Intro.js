import { React } from "react";

function Intro({ title }) {
  return (
    <div id="TheIntro">
      <div className="all" id="home">
        <div className="container1">
          <div className="name-container">
            <div id="my_name">
              <h1>
                Ina<strong></strong> Makosi
              </h1>
            </div>
            <br />
            <div id="hello">
              <h1>Artist Photographer</h1>
            </div>
          </div>
          <div className="profile-picture"></div>
        </div>
        <div className="container2">
          <div id="home_logo"></div>

          <div id="name_in_mobil_mode">
            <div id="my_name">
              <h1>
                Ina<strong></strong> Makosi
              </h1>
            </div>
            <br />
            <div id="hello">
              <h1>Artist Photographer</h1>
            </div>
          </div>

          <div id="intro">
            <h4 className="intro_title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl,
              eget ultricies nunc nisl eget nunc.
            </h4>
          </div>

          <div id="tel_gMailin_mobil_mode">
            Mail: Pmomar44@gmail.com <br />
            Tel: 77 727 86 55
          </div>
        </div>
      </div>

      <div className="network_container">
        <a
          href="https://api.whatsapp.com/send?phone=221777278655&text=The message"
          target="_blank"
        >
          <div className="network">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </div>
        </a>

        <a href="https://www.instagram.com/pape_momar_ndiaye/" target="_blank">
          <div className="network">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/pape-momar-ndiaye-37b862199/"
          target="_blank"
        >
          <div className="network">
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>
        </a>

        <a href="https://www.behance.net/papendiay" target="_blank">
          <div className="network">
            <ion-icon name="logo-behance"></ion-icon>
          </div>
        </a>
      </div>

      <div id="tel_gMail">
        Mail: Pmomar44@gmail.com <br />
        Tel: 77 727 86 55
      </div>
    </div>
  );
}

Intro.defaultProps = {
  title: "pape",
};

export default Intro;
