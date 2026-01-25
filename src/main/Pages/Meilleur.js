import { React, useEffect, useState } from "react";

const MeilleurPresentation = ({
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

function Meilleur({ title, langToShow }) {
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
  let [PresentationMeilleur, setPresentationMeilleur] = useState(false);
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
    setPresentationMeilleur((PresentationMeilleur) => true);
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
    setPresentationMeilleur((PresentationMeilleur) => false);
  };

  return (
    <div id="Meilleur" className=".all">
      <div className="Nimp">gggg</div>
      <div id="Article-title">
        {langToShow === "En" ? <h1>Emergency Exit</h1> : <h1>{title}</h1>}
      </div>
      {langToShow === "En" ? (
        <p className="the-paragraph">
          This serie explores a domestic space undergoing a gradual climate
          transformation. The heat and dust, now permanent, are no longer
          accidents but living conditions. They shape bodies, postures, and
          silences. The interior is no longer a refuge; it becomes the site
          where the slow violence of climate change is inscribed. The
          impossibility of leaving reveals a political reality: staying is not a
          choice, but the consequence of a world where mobility is unequally
          distributed. While media discourse on climate change circulates
          remotely, its effects take root and become permanent in the most
          vulnerable spaces. Within these walls, hope takes the form of
          projected images: a distant landscape, a promise of freshness and
          greenery; symbols of a desirable but unattainable future. The
          imagination then becomes a territory of resistance against an imposed
          present. « For Better and For Worse » explores intimacy as a political
          arena, where climate, relationships, and housing intertwine. The
          series highlights a forced coexistence with a warming world, revealing
          the imbalances between those who are subjected to these changes and
          those who still have a choice.
        </p>
      ) : (
        <p className="the-paragraph">
          Cette série explore un espace domestique soumis à une transformation
          climatique progressive. La chaleur et la poussière, devenues
          permanentes, ne sont plus des accidents mais des conditions de vie.
          Elles façonnent les corps, les postures, les silences. L’intérieur
          n’est plus un refuge, il devient le lieu où s’inscrit la violence
          lente du dérèglement climatique. L’impossibilité de partir révèle une
          réalité politique : rester n’est pas un choix, mais la conséquence
          d’un monde où la mobilité est inégalement répartie. Tandis que les
          discours médiatiques sur le changement climatique circulent à
          distance, les effets, eux, s’installent durablement dans les espaces
          les plus fragiles. Entre ces murs, l’espoir prend la forme d’images
          projetées ; un paysage lointain, une promesse de fraîcheur et de
          verdure ; symboles d’un avenir désirable mais hors d’atteinte.
          L’imaginaire devient alors un territoire de résistance face à un
          présent imposé. Pour le meilleur et pour le pire interroge l’intimité
          comme champ politique, où le climat, le couple et l’habitat se
          confondent. La série met en lumière une coexistence contrainte avec un
          monde qui se réchauffe, révélant les déséquilibres entre ceux qui
          subissent et ceux qui peuvent encore choisir.
        </p>
      )}

      {PresentationMeilleur && (
        <MeilleurPresentation
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
          <p>Bousso [ DAKAR 2021]</p>{" "}
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
          Mail: makosiprod@gmail.com <br />
          Tel: +221 76 611 75 08
        </div>
      </div>
    </div>
  );
}

export default Meilleur;
