import { React, useEffect, useState } from "react";

const CaillouPresentation = ({
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

function Caillou({ title, langToShow }) {
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
  let [PresentationCaillou, setPresentationCaillou] = useState(false);
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
    setPresentationCaillou((PresentationCaillou) => true);
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
    setPresentationCaillou((PresentationCaillou) => false);
  };

  return (
    <div id="Caillou" className=".all">
      <div className="Nimp">gggg</div>
      <div id="Article-title">
        {langToShow === "En" ? <h1>Emergency Exit</h1> : <h1>{title}</h1>}
      </div>
      {langToShow === "En" ? (
        <p className="the-paragraph">
          “Caillou” brings together women from the Atlantic coast: lands of
          France, Senegal, and Guadeloupe. These women are dancers, dance
          facilitators, and videographers. They have explored the memory and
          present of their territories, encountering streets, spaces, and people
          through immersive dance and film experiences. In this journey, not
          without unequal administrative hurdles, they have been confronted and
          challenged by the intricacies of contemporary issues rooted in the
          past: the migration and climate crises. The encounter between these
          women, born and living on lands linked by the crimes against humanity
          of the transatlantic slave trade and colonization, has allowed dance
          to open sacred spaces for dialogue, healing, reconstruction, and
          humanism. “Caillou” is a project, with a show, films, a process… 2024,
          2025… “Caillou” will become “Kayou”, a phoenix project that we wish to
          deliver to the world in multiple ways.
        </p>
      ) : (
        <p className="the-paragraph">
          « Caillou » réunit des femmes de l Atlantique : terres de France, du
          Sénégal et de Guadeloupe. Des femmes danseuses, passeuse de danse et
          vidéastes. Qui sont allées à la rencontre de la mémoire et du présent
          de leurs territoires, à la rencontre des rues, des espaces, des
          populations, à l’occasion d’immersion dansées et filmées. Dans cette
          circulation, non sans difficultés administratives inégales, elles ont
          été confrontée et bousculée aux tenants et aboutissants de
          problématiques d’aujourd’hui, qui prennent racines dans le passé: les
          crises migratoires et climatiques. La rencontre de ces femmes nées et
          qui habitent des terres liées par les crimes contre l’humanité de la
          traite transatlantique et de la colonisation, a permis par la danse
          d’ouvrir des espaces sacrés de dialogue, de réparation, de
          reconstructions, d’humanisme. « Caillou » c est un projet, avec un
          spectacle, des films, un processus…2024, 2025… « Caillou » deviendra
          «Kayou », projet phénix que nous souhaitons livrer au monde de
          multiples manières
        </p>
      )}

      {PresentationCaillou && (
        <CaillouPresentation
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
          Mail: Pmomar44@gmail.com <br />
          Tel: 77 727 86 55
        </div>
      </div>
    </div>
  );
}

export default Caillou;
