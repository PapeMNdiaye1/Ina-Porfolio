import { React, useEffect, useState } from "react";

const VagabondePresentation = ({
  ImageBack,
  parentCallback,
  Title,
  ImageDescription,
  IsImageVertical,
}) => {
  const onClickOnTab = () => {
    parentCallback();
    let LeftBareContainer = document.querySelector("#LeftBare-container");
    LeftBareContainer.style.display = "block";
  };

  return (
    <div className="Image-presentation-container">
      <div className="Image-container">
        {IsImageVertical ? (
          <div
            className="show-horizontal-image"
            style={{ backgroundImage: ImageBack }}
          ></div>
        ) : (
          <div
            className="show-vertical-image"
            style={{ backgroundImage: ImageBack }}
          ></div>
        )}
        <div className="show-vertical-image-text">
          <span>{Title}</span>
          <p>{ImageDescription}</p>
        </div>
        <button onClick={onClickOnTab} className="close-Image-presantation">
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

function Vagabonde({ title, langToShow }) {
  // let [TheImageReloader, setTheImageReloader] = useState();

  useEffect(() => {
    let Pictures = document.querySelectorAll(".one-Image-container");
    let PicturesTester = document.querySelector(".Nimp");
    let i = 0;
    let intervalId = setInterval(() => {
      if (i < Pictures.length) {
        let OneImage = getComputedStyle(Pictures[i]).backgroundImage;
        // setTheImageReloader(TheImageReloader => OneImage);
        PicturesTester.style.backgroundImage = OneImage;
        i++;
        // console.log(TheImageReloader);
      } else {
        i = 0;
      }
      console.log(i);
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  let [TheImage, setTheImage] = useState();
  let [PresentationVagabonde, setPresentationVagabonde] = useState(false);
  let [ImageTitle, setImageTitle] = useState("");
  let [ImageDescription, setImageDescription] = useState("");
  let [IsImageVertical, setIsImageVertical] = useState(true);
  let leftBar = document.querySelector("#tabs");
  console.log(leftBar);

  const clickOnImage = (e) => {
    let thImg = e.target;
    let theImageUrl = getComputedStyle(thImg).backgroundImage;
    setTheImage((TheImage) => theImageUrl);
    console.log(theImageUrl);
    setPresentationVagabonde((PresentationVagabonde) => true);
    setImageTitle((ImageTitle) => thImg.title);
    setImageDescription((ImageDescription) => thImg.childNodes[0].innerText);
    console.log(thImg.childNodes[0].innerText);
    console.log(thImg.classList[1]);
    if (thImg.classList[1] == "vertical") {
      console.log("vertical");
      setIsImageVertical((IsImageVertical) => false);
    } else {
      setIsImageVertical((IsImageVertical) => true);
    }
    let LeftBareContainer = document.querySelector("#LeftBare-container");
    LeftBareContainer.style.display = "none";
    console.log(LeftBareContainer);
  };

  const callback = () => {
    setPresentationVagabonde((PresentationVagabonde) => false);
  };

  return (
    <div id="Vagabonde" className=".all">
      <div className="Nimp">gggg</div>
      <div id="Article-title">
        {langToShow === "En" ? <h1>Emergency Exit</h1> : <h1>{title}</h1>}
      </div>
      {langToShow === "En" ? (
        <p className="the-paragraph">
          In a world of constant change, where physical and symbolic borders are
          blurring, where encounters and exchanges shape our perceptions,
          identity becomes a fluid concept. It is here that the idea for a
          Belgian-Senegalese collaboration on a sound and photography project
          germinated, a project that seeks out artists with fluid identities,
          sometimes rooted in certain cultures, sometimes in others, and
          accepting that these roots can lead to multiple evolutions. Our
          project is structured around a series of portraits and short audio
          pieces capturing encounters and discussions with artists based in
          Brussels and from diverse diasporas. The aim is to challenge
          simplistic notions about what constitutes a diaspora, which is
          sometimes not perceived as such or only partially identified with
          these terms. It is also about listening to what artists with multiple
          or singular identities have to say about their vision of the search
          for identity. Each artwork invites you to contemplate, feel, and
          reflect on the multifaceted nature of human identity, which, like an
          endless adventure, is constantly searching, reinventing, and
          confronting itself. Beyond aesthetics and technique, these works
          invite us to rethink our own relationship to identity, to consider the
          richness of our differences and the fluidity of our individual
          journeys. "Wandering Identity" is not a fixed destination, but rather
          a perpetual voyage where each step, each encounter, each experience
          contributes to shaping who we are. By Gnilane Jeanne Diiouf
        </p>
      ) : (
        <p className="the-paragraph">
          Dans un monde en perpétuelle mutation, ou les frontières physiques et
          symboliques s'estompent, où les rencontres et les échanges façonnent
          nos perceptions, l’identité devient un concept en mouvement. C'est ici
          qu'a germé l'idée d'une collaboration belgo-sénégalaise autour d'un
          projet sono-photographique partant à la rencontre d'artistes aux
          identités vagabondes, s'enracinant parfois dans certaines cultures,
          parfois dans d'autres et acceptant que ces ancrages soient propices à
          plusieurs évolutions. Notre projet s'articule donc autour d'une série
          de portraits et de courts audio immortalisant des rencontres et des
          discussions avec des artistes basées à Bruxelles et issues de
          différentes diasporas. L'objectif est d'interroger les idées
          laconiques sur ce que représente une diaspora, qui parfois ne se vit
          pas comme telle ou ne s’identifie que partiellement à ces termes. Il
          est aussi question d'écouter ce que des artistes aux identités
          multiples ou singulières ont à raconter sur leur vision de la
          recherche identitaire. Chacune des œuvres vous invite à contempler, à
          ressentir et à réfléchir sur les multiples facettes de l'identité
          humaine, qui, telle une aventure sans fin, se cherche, se réinvente,
          se confronte. Au-delà de l'esthétique et de la technique, ces œuvres
          nous invitent à repenser notre propre rapport à l'identité, à
          considérer la richesse de nos différences et la fluidité de nos
          parcours individuels. « Identité Vagabonde » n'est pas une destination
          fixe, mais plutôt un voyage perpétuel où chaque pas, chaque rencontre,
          chaque expérience contribue à façonner qui nous sommes. Par Gnilane
          Jeanne Diouf
        </p>
      )}

      {PresentationVagabonde && (
        <VagabondePresentation
          parentCallback={callback}
          ImageBack={TheImage}
          ImageDescription={ImageDescription}
          Title={ImageTitle}
          IsImageVertical={IsImageVertical}
        />
      )}
      <div className="Image-container">
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Portrait Digital"
        >
          <p>Peinture de portrait sur commande [ ‎18 ‎01 ‎2022]</p>{" "}
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Anna"
        >
          <p>Digital oil painting[‎12 ‎01 ‎2022]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Boubacar Ndiaye"
        >
          <p>Compositing and montage [07 ‎06 ‎2021]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container vertical"
          title="Boubacar Ndiaye"
        >
          <p>Image-4 [07 ‎06 ‎2021]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Boubacar Ndiaye"
        >
          <p>Image-5 [07 ‎06 ‎2021]</p>
        </div>
      </div>
      <div className="network">
        <div className="network_container">
          <a
            href="https://api.whatsapp.com/send?phone=221777278655&text=The message"
            target="_blank"
          >
            <div className="network">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
          </a>

          <a
            href="https://www.instagram.com/pape_momar_ndiaye/"
            target="_blank"
          >
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
    </div>
  );
}

export default Vagabonde;
