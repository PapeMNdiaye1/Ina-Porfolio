import { React, useEffect, useState } from "react";

const LenversPresentation = ({
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

function Magnifique({ title, langToShow }) {
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
  let [PresentationLenvers, setPresentationLenvers] = useState(false);
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
    setPresentationLenvers((PresentationLenvers) => true);
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
    setPresentationLenvers((PresentationLenvers) => false);
  };

  return (
    <div id="Magnifique" className=".all">
      <div className="Nimp">gggg</div>
      <div id="Article-title">
        {langToShow === "En" ? <h1>You Are Beautiful</h1> : <h1>{title}</h1>}
      </div>
      {langToShow === "En" ? (
        <p className="the-paragraph">
          Traditions remain strong in the Lebou community. In their cosmology,
          the "tuur" and the "rab" are important beings. They embody the souls
          of ancestors (tuur), or occult forces, often guardians of a territory,
          or they coexist with humans. To inhabit a place where a rab lives,
          prior religious rites and ceremonies were required to establish
          harmony with all these forces of creation. It is within this context
          that ANDANDO takes shape, a series of portraits depicting the
          relationship between five women entrepreneurs from Ouakam and the
          protective spirit that accompanies them in their daily activities The
          moments of shooting tell us about the evolution of their day; fadiar,
          tisbar, takussane, timiss and guéwé, these hours of prayer, which are
          also moments, in the popular imagination the spirits roam in the
          streets… just like these women who work at all hours… The idea is to
          highlight this companionship between the spirits and the women which
          dates back to the first inhabitants of Ouakam.
        </p>
      ) : (
        <p className="the-paragraph">
          Les traditions restent vives dans la communauté « lébou ». Dans leur
          Cosmogonie les « tuur » et les « rab » sont des Êtres importants. Ils
          incarnent les âmes des ancêtres (tuur), ou des forces occultes,
          souvent gardiens d'un territoire, ou ils cohabitent avec des humains.
          Pour pouvoir habiter un lieu où vit un rab, il fallait des rites et
          cérémonies religieuses préalables, afin d'établir une harmonie avec
          toutes ces forces de la création. C’est dans ce contexte que s’inscrit
          ANDANDO, une série de portraits qui met en scène le compagnonnage
          entre Cinq femmes entrepreneurs ouakamoises et l’esprit protecteur qui
          les accompagne dans leurs activités quotidiennes. Les moments de prise
          de vue nous racontent l’évolution de leur journée ; fadiar, tisbar,
          takussane, timiss et guéwé, ces heures de prières, qui sont aussi des
          moments, dans l’imaginaire populaire les esprits rôdent dans les rues…
          tout comme ces femmes qui travaillent à toute heure … L’idée est de
          mettre en lumière ce compagnonnage entre Les esprits et les femmes qui
          date depuis les premiers habitants de Ouakam.
        </p>
      )}

      {PresentationLenvers && (
        <LenversPresentation
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
          title="Bousso"
        >
          <p>Dakar 2021</p>{" "}
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Karen"
        >
          <p>Montreal 2019</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Karen"
        >
          <p>Montreal 2019</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Roxy"
        >
          <p>Montreal 2019</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Steffi"
        >
          <p>Bruxelles 2025</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Steffi"
        >
          <p>Bruxelles 2025</p>
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

export default Magnifique;
