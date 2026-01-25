import { React, useEffect, useState } from "react";

const DesignPresentation = ({
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
    <div className="design-presentation-container">
      <div className="design-container">
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
        <button onClick={onClickOnTab} className="close-design">
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

function Design({ title }) {
  // let [TheImageReloader, setTheImageReloader] = useState();

  useEffect(() => {
    let Pictures = document.querySelectorAll(".one-design-container");
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
  let [PresentationDesign, setPresentationDesign] = useState(false);
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
    setPresentationDesign((PresentationDesign) => true);
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
    setPresentationDesign((PresentationDesign) => false);
  };

  return (
    <div id="Design" className=".all">
      <div className="Nimp">gggg</div>
      <div id="design-title">
        <h1>{title}</h1>
      </div>
      {PresentationDesign && (
        <DesignPresentation
          parentCallback={callback}
          ImageBack={TheImage}
          ImageDescription={ImageDescription}
          Title={ImageTitle}
          IsImageVertical={IsImageVertical}
        />
      )}
      <div className="design-container">
        <div
          onClick={clickOnImage}
          className="one-design-container vertical"
          title="Portrait Digital"
        >
          <p>Peinture de portrait sur commande [ ‎18 ‎01 ‎2022]</p>{" "}
        </div>
        <div
          onClick={clickOnImage}
          className="one-design-container vertical"
          title="Anna"
        >
          <p>Digital oil painting[‎12 ‎01 ‎2022]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-design-container vertical"
          title="Boubacar Ndiaye"
        >
          <p>Compositing and montage [07 ‎06 ‎2021]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-design-container vertical"
          title="Portrait Digital"
        >
          <p>Peinture de portrait sur commande [‎14 ‎01 ‎2022]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-design-container vertical"
          title="Portrait Digital"
        >
          <p>Peinture de portrait sur commande [‎26 ‎01 ‎2022]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-design-container vertical"
          title="Anna"
        >
          <p>Digital oil painting [07 ‎06 ‎2021] [09 ‎06 ‎2021]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-design-container vertical"
          title="Portrait Digital"
        >
          <p>Peinture de portrait sur commande [‎14 ‎01 ‎2022]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-design-container vertical"
          title="Pape"
        >
          <p>Digital oil painting [27 ‎05 ‎2021]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-design-container vertical"
          title="In Jap"
        >
          <p>Digital oil painting [27 ‎05 ‎2021]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-design-container vertical"
          title="No Mor Eyes On Me"
        >
          <p>Compositing and montage [‎09 ‎08 ‎2021]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-design-container vertical"
          title="Japan Lover"
        >
          <p>Montage [19 04 ‎2021]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-design-container vertical"
          title="News Papers"
        >
          <p>Paper collage art [06 01 2022]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-design-container vertical"
          title="Nightmare"
        >
          <p>Compositing and montage [02 08 2021]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-design-container vertical"
          title="Nightmare"
        >
          <p>Compositing and montage [02 08 2020]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-design-container vertical"
          title="Mor Head"
        >
          <p>Compositing and montage [0‎2 08 ‎2021]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-design-container vertical"
          title="Ken Kaneki"
        >
          <p>Montage [‎14 ‎06 ‎2021]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-design-container vertical"
          title="Ousmane Sonko"
        >
          <p>Paper collage art [04 01 2022]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-design-container vertical"
          title="Thiam"
        >
          <p>Digital oil painting [07 ‎08 ‎2021]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-design-container vertical"
          title="Ina Makosi"
        >
          <p>Digital oil painting [‎17 03 ‎2021]</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-design-container vertical"
          title="No Mor Eyes On Me"
        >
          <p>Compositing and montage [‎09 ‎08 ‎2021]</p>
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

export default Design;
