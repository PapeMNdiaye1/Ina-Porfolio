import { React, useEffect, useState } from "react";

const UnePresentation = ({
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

function Une({ title, langToShow }) {
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
  let [PresentationUne, setPresentationUne] = useState(false);
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
    setPresentationUne((PresentationUne) => true);
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
    setPresentationUne((PresentationUne) => false);
  };

  return (
    <div id="Une" className=".all">
      <div className="Nimp">gggg</div>
      <div id="Article-title">
        {langToShow === "En" ? <h1>Emergency Exit</h1> : <h1>{title}</h1>}
      </div>
      {langToShow === "En" ? (
        <p className="the-paragraph">
          Population growth, industrial development, and deforestation have made
          the Earth more vulnerable, and disasters are worsening, particularly
          flooding and desertification. Society is facing an acceleration of
          sea-level rise caused by climate change. This situation makes
          coastlines and their inhabitants more vulnerable. The featured image
          is a portrait of a resident of Gandiol against a backdrop. The idea is
          to research everything written about climate change, including images
          and press articles. This will be complemented by the reactions of the
          local population to the topic, their experiences, the solutions they
          propose, and their needs. All this research will be compiled into
          press clippings, photos, and written accounts. These articles will be
          used to create the backdrop and will also serve as clothing for the
          model being photographed. The photoshoot will take place by the sea.
          The photo will be printed at the person's actual size, and the photo
          studio (backdrop and clothing) will serve as a set to showcase the
          work done beforehand. The goal is to create a space where the results
          of our archival research on the topic are displayed, along with
          solutions proposed by the local population or from elsewhere.
        </p>
      ) : (
        <p className="the-paragraph">
          La croissance démographique, le développement industriel, le
          déboisement ont rendu la Terre plus vulnérable et les désastres vont
          en empirant, particulièrement en ce qui concerne les inondations et
          les désertifications. La société se retrouve confrontée à une
          accélération de l’évolution du niveau de la mer provoquée par le
          changement climatique. Cette situation rend ainsi les côtes et leurs
          populations plus vulnérables. A La Une est un portrait d’un(e)
          habitant(e) de Gandiol sur fond. L’idée est de faire des recherches
          sur tout ce qui est écrit concernant les changements climatiques, de
          images, des articles de presse. A s’ajoute les réactions des
          populations sur la thématiques, ce qu’ils ont vécu, les solutions
          qu’ils proposent, leurs besoins… Tous ces recherche feront l’objet de
          coupures de presses, de photos, de récits écrits sur papiers. Ces
          articles seront utiliser pour habiller le font et serviront aussi de
          vêtements pour le model photographier. Le shooting doit se faire au
          bord de la mer. La photo doit être imprimer en taille normal de la
          personne et le studio photo (fond et vêtement) servira d’installation
          pour montrer le travail abattu au préalable. L’objectif est de créer
          un endroit où on retrouve le résultat de nos recherches d’archives sur
          la thématiques mais aussi des solutions proposées soit par les
          populations elles-mêmes ou venant d’ailleurs.
        </p>
      )}

      {PresentationUne && (
        <UnePresentation
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
          className="one-Image-container vertical"
          title="Boubacar Ndiaye"
        >
          <p>Compositing and montage [07 ‎06 ‎2021]</p>
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

export default Une;
