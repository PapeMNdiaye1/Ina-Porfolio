import { React } from "react";

function Intro({ title, langToShow }) {
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
              {langToShow === "En" ? (
                <h1>Artist Photographer</h1>
              ) : (
                <h1>Artist Photographe</h1>
              )}
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
              {langToShow === "En" ? (
                <h1>Artist Photographer</h1>
              ) : (
                <h1>Artist Photographe</h1>
              )}
            </div>
          </div>

          <div id="intro">
            {langToShow === "En" ? (
              <h4 className="intro_title">
                Ina Makosi, whose real name is Ndeye Fatou Thiam, is a
                contemporary Senegalese artist born in Dakar. Trained in
                audiovisual production at Africulturban, she has pursued her
                career through several artist residencies and international
                exhibitions. Her work explores the links between the body as a
                site of memory, urban space, and collective narratives. This
                work is done through portrait photography and documentary
                filmmaking, where the writings and individual stories of
                communities play a significant role in the work. Her objectives
                are to use photography and video as soft power and a means of
                social and feminist engagement.
              </h4>
            ) : (
              <h4 className="intro_title">
                Ina Makosi, de son vrai nom Ndeye Fatou Thiam, est une artiste
                contemporaine sénégalaise née à Dakar. Formée en audiovisuel à
                Africulturban, elle poursuit sa carrière à travers plusieurs
                résidences artistiques et expositions internationales. Son
                travail explore les liens entre le corps comme lieu de mémoire,
                l’espace urbain et les récits collectifs. Ce travail est fait à
                travers la photographie de portraits ou encore le documentaire
                où les écrits et les histoires singulières des communautés
                prennent une place importante sur l’ouvre. Ses objectifs sont
                d’utiliser la photo et la vidéo comme soft power et un moyen
                d’engagement social et féministe.
              </h4>
            )}
          </div>

          <div id="tel_gMailin_mobil_mode">
            Mail: makosiprod@gmail.com <br />
            Tel: +221 76 611 75 08
          </div>
        </div>
      </div>

      <div className="network_container">
        <a
          href="https://www.facebook.com/share/1DNHhzrKZ2/?mibextid=wwXIfr"
          target="_blank"
        >
          <div className="network">
            <ion-icon name="logo-facebook"></ion-icon>
          </div>
        </a>

        <a
          href="https://www.instagram.com/ina_makosi?igsh=MWFwaTh0cjdqZHUwNQ=="
          target="_blank"
        >
          <div className="network">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/ina-thiam-b13bb5281/"
          target="_blank"
        >
          <div className="network">
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>
        </a>

        <a
          href="https://x.com/inanfthiam?s=21&t=oSME2Spx7YOFp0F-kXd1CQ"
          target="_blank"
        >
          <div className="network">
            <ion-icon name="logo-twitter"></ion-icon>
          </div>
        </a>
      </div>

      <div id="tel_gMail">
        Mail: makosiprod@gmail.com <br />
        Tel: +221 76 611 75 08
      </div>
    </div>
  );
}

Intro.defaultProps = {
  title: "pape",
};

export default Intro;
