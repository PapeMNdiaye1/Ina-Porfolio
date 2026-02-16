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

function Lenvers({ title, langToShow }) {
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
    <div id="Lenvers" className=".all">
      <div className="Nimp">gggg</div>
      <div id="Article-title">
        {langToShow === "En" ? <h1>Behind The Scenes</h1> : <h1>{title}</h1>}
      </div>
      {langToShow === "En" ? (
        <p className="the-paragraph">
          This series is rooted in the observation of urban areas where
          unsanitary conditions are a daily reality. From the neighborhoods of
          Pikine and Thiaroye to Colobane and Sacré-Cœur, inhabited spaces are
          transformed into zones of garbage, stagnant water, or informal
          settlements, forcing residents to coexist with filth. The photographs
          depict well-groomed bodies, dressed as if for school or work, placed
          at the heart of these degraded environments. This contrast reveals a
          silent tension between human dignity and urban neglect. The places are
          not mere backdrops: they are alive, naturally traversed by children,
          adults, and everyday activities. Nothing is displaced, nothing is
          contrived. “Behind the Scenes” explores the coexistence of human
          dignity and environmental degradation. The series highlights a
          contradiction: that of a population forced to live, play, work, and
          envision their future in spaces that deny these very aspirations. This
          work invites us to look at things differently, to recognize these
          realities as an integral part of the city, and to question our
          collective responsibility in the face of what we accept as normal.
        </p>
      ) : (
        <p className="the-paragraph">
          Cette série prend racine dans l’observation de territoires urbains où
          l’insalubrité fait partie du quotidien. Des quartiers de Pikine,
          Thiaroye à Colobane, jusqu’à Sacré-Cœur, des espaces habités se
          transforment en zones de déchets, d’eaux stagnantes ou d’usages
          informels, imposant à leurs habitants une cohabitation forcée avec la
          saleté. Les photographies mettent en scène des corps soignés, habillés
          comme pour aller à l’école ou au travail, placés au cœur de ces
          environnements dégradés. Ce contraste révèle une tension silencieuse
          entre dignité humaine et abandon urbain. Les lieux ne sont pas des
          décors : ils sont vivants, traversés naturellement par des enfants,
          des adultes, des gestes quotidiens. Rien n’est déplacé, rien n’est
          provoqué. « L’Envers du décor » interroge ainsi la coexistence entre
          dignité humaine et dégradation environnementale. La série met en
          lumière une contradiction : celle d’une population contrainte de
          vivre, de jouer, de travailler et de se projeter dans des espaces qui
          nient pourtant ces mêmes aspirations. Ce travail est une invitation à
          regarder autrement, à reconnaître ces réalités comme faisant
          pleinement partie de la ville, et à questionner notre responsabilité
          collective face à ce que nous acceptons comme normal.
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
          title="Aissatou"
        >
          <p>Diamagueune 2017</p>{" "}
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Aissatou"
        >
          <p>Diamagueune 2017</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Daba"
        >
          <p>Rufisque 2018</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Venus"
        >
          <p>Thiaroye 2018</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Wasso"
        >
          <p>Hann Pecheur 2017</p>
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

export default Lenvers;
