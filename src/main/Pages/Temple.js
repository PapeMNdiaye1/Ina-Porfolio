import { React, useEffect, useState } from "react";

const TemplePresentation = ({
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

function Temple({ title, langToShow }) {
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
  let [PresentationTemple, setPresentationTemple] = useState(false);
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
    setPresentationTemple((PresentationTemple) => true);
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
    setPresentationTemple((PresentationTemple) => false);
  };

  return (
    <div id="Temple" className=".all">
      <div className="Nimp">gggg</div>
      <div id="Article-title">
        {langToShow === "En" ? <h1>Emergency Exit</h1> : <h1>{title}</h1>}
      </div>
      {langToShow === "En" ? (
        <p className="the-paragraph">
          Women, land, and matriarchy are interconnected themes in Africa, as
          women often play a central role in natural resource management and
          agriculture. In many traditional African societies, women are the
          primary food producers and the keepers of knowledge related to the use
          of natural resources. Matriarchal societies are those in which women
          hold dominant positions within family and social structures, and these
          societies often have environmentally sound and sustainable natural
          resource management systems. This series highlights the valiant women
          of the Saloum Islands and their relationship to the marine ecosystem.
          They are the guardians of the temple, in the sense that they are the
          bridge between humans and the ocean, the land, and the protective
          spirits of the mangroves. They are responsible for reforestation,
          seafood harvesting, cultivating the land, and developing initiatives
          to combat climate change. They preserve the pact that their ancestors
          made with nature, since before colonization.
        </p>
      ) : (
        <p className="the-paragraph">
          Les femmes, la terre et les matriarcats sont des sujets liés en
          Afrique car les femmes jouent souvent un rôle central dans la gestion
          des ressources naturelles et l'agriculture. Dans de nombreuses
          sociétés traditionnelles en Afrique, les femmes sont les principales
          productrices alimentaires et les gardiennes des connaissances
          relatives à l'utilisation des ressources naturelles. Les matriarcats
          sont des sociétés où les femmes ont une position dominante dans les
          structures familiales et sociales, et ces sociétés ont souvent des
          systèmes de gestion des ressources naturelles qui sont respectueux de
          l'environnement et durables.. Cette série met en lumière les
          Vaillantes femmes des îles du Saloum et leur rapport à l'écosystème
          marin  . Elles sont les Gardiennes du temple , dans le sens ou elles
          sont le pont entre les humains et l'océan , la terre , et les esprits
          protecteurs de la mangrove . Elles sont en charge du reboisement , de
          la collecte des fruits de mer , de cultiver la terre , et proposent
          des initiatives pour la lutte face aux changements climatiques . Elles
          préservent le pacte que leurs ancêtres ont fait avec la nature ,
          depuis avant la colonisation . 
        </p>
      )}

      {PresentationTemple && (
        <TemplePresentation
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

export default Temple;
