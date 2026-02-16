import { React, useEffect, useState } from "react";

const SamaPresentation = ({
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

function Sama({ title, langToShow }) {
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
  let [PresentationSama, setPresentationSama] = useState(false);
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
    setPresentationSama((PresentationSama) => true);
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
    setPresentationSama((PresentationSama) => false);
  };

  return (
    <div id="Sama" className=".all">
      <div className="Nimp">gggg</div>
      <div id="Article-title">
        {langToShow === "En" ? <h1>My Medina</h1> : <h1>{title}</h1>}
      </div>
      {langToShow === "En" ? (
        <p className="the-paragraph">
          As a self-taught photographer, Ina Makosi creates images that capture
          the energies of cities and urban cultures. Exploring the relationship
          between body and space, person and place, she has begun a project at
          Jardin Rouge focusing on memory and the transformation of places.
          Portraiture takes on the role of a symbolic mirror, bearing witness to
          continuous metamorphoses. Through a subjective interpretation of the
          city, Ina Makosi's photographs create a fluid dialogue between the
          body and its environment, honoring the spontaneity of gesture. By
          Ousseynou Wade
        </p>
      ) : (
        <p className="the-paragraph">
          En tant que photographe autodidacte, Ina Makosi crée des images
          retraçant les énergies des villes et des cultures urbaines.
          Interrogeant le lien qui se tisse entre le corps et l’espace, la
          personne et le lieu, elle entame à Jardin Rouge un travail sur la
          mémoire et la transformation des lieux. Le portrait y assume le rôle
          de miroir symbolique, témoignant de métamorphoses continues. À travers
          une retranscription subjective de la ville, les photographies d’Ina
          Makosi créent un dialogue mouvant entre le corps et son environnement,
          honorant la spontanéité du geste. Par Ousseynou Wade
        </p>
      )}

      {PresentationSama && (
        <SamaPresentation
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
          title="ABDALAH "
        >
          <p>Medina De Marrakech 2023</p>{" "}
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="ABDALAH "
        >
          <p>Medina De Marrakech 2023</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="ABDASSAMAD "
        >
          <p>Medina De Marrakech 2023</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="ABDASSAMAD "
        >
          <p>Medina De Marrakech 2023</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="HASSANE "
        >
          <p>Medina De Marrakech 2023</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="HASSANE"
        >
          <p>Medina De Marrakech 2023</p>{" "}
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="KHADIJA"
        >
          <p>Medina De Marrakech 2023</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="KHADIJA"
        >
          <p>Medina De Marrakech 2023</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="OUMEYMA"
        >
          <p>Medina De Marrakech 2023</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="OUMEYMA"
        >
          <p>Medina De Marrakech 2023</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="TAAHA"
        >
          <p>Medina De Marrakech 2023</p>{" "}
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="TAAHA"
        >
          <p>Medina De Marrakech 2023</p>
        </div>

        <div className="one-Image-container Horizontal" title="---">
          Senegal
        </div>

        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="DOCTA"
        >
          <p>Medina De Dakar 2023</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="DOCTA"
        >
          <p>Medina De Dakar 2023</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="DOUTS"
        >
          <p>Medina De Dakar 2023</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="DOUTS"
        >
          <p>Medina De Dakar 2023</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="N.S BA"
        >
          <p>Medina De Dakar 2023</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="N.S BA"
        >
          <p>Medina De Dakar 2023</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="SADIO"
        >
          <p>Medina De Dakar 2023</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="SADIO"
        >
          <p>Medina De Dakar 2023</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="SOPHIE"
        >
          <p>Medina De Dakar 2023</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="SOPHIE"
        >
          <p>Medina De Dakar 2023</p>
        </div>
      </div>
      <div className="network">
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
    </div>
  );
}

export default Sama;
