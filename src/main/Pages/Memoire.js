import { React, useEffect, useState } from "react";

const MemoirePresentation = ({
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

function Memoire({ title, langToShow }) {
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
  let [PresentationMemoire, setPresentationMemoire] = useState(false);
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
    setPresentationMemoire((PresentationMemoire) => true);
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
    setPresentationMemoire((PresentationMemoire) => false);
  };

  return (
    <div id="Memoire" className=".all">
      <div className="Nimp">gggg</div>
      <div id="Article-title">
        {langToShow === "En" ? <h1>Memory In The Mirror</h1> : <h1>{title}</h1>}
      </div>
      {langToShow === "En" ? (
        <p className="the-paragraph">
          The history of a country, the destiny of a community, or the life of a
          family are not written solely from a male perspective, but also, and
          equally so, from a female one. Many women acted for the common good,
          particularly for the recognition of women's rights. Remembering the
          activism of our elders is a matter of duty. The preservation of this
          fragile memory demands a committed act of transmission. Through her
          photographic approach, Ina Thiam forges a connection she hopes will be
          unbreakable with those who are no longer with us. During her stay in
          Kédougou, Ina Thiam met eleven women aged 18 to 25. She invited them
          to reflect on one of their elders with a remarkable life story. A
          visual mirror was created before the photographer's lens: the first
          portrait, embodied by the young woman, evokes her role model as an
          influential woman. Ina Thiam uses staging, adorning the young woman
          with clothing and makeup, creating a palimpsest, a symbol of the
          threat of oblivion or a promise of remembrance. The second portrait
          shows this same young woman in her contemporary life, inspired by the
          activism of her predecessor. These illustrious figures include
          revolutionaries, writers, high-level athletes, and a beloved
          grandmother, described as "courageous" and even "warrior." Kédougou, a
          reflection of the world? Memory in a mirror reveals the universal
          nature of the need to remember committed women. For, beyond the
          tribute paid to them, they are a model for all.
        </p>
      ) : (
        <p className="the-paragraph">
          L’histoire d’un pays, le destin d’une communauté ou bien la vie d’une
          famille ne s’écrivent pas seulement au masculin, mais aussi à part
          entière au féminin. Nombreuses sont celles qui agirent pour le bien de
          tous, pour la reconnaissance des droits des femmes en particulier. Le
          souvenir du militantisme de nos aînées ressort du devoir. La
          persistance de cette mémoire si fragile, exige un acte de transmission
          engagé. Par sa démarche photographique, Ina Thiam tisse un lien
          qu’elle souhaite indéfectible avec les absentes. Lors de son séjour à
          Kédougou, Ina Thiam rencontre onze femmes âgées de 18 à 25 ans. Elle
          les invite à se remémorer une de leurs aînées au parcours remarquable.
          Un miroir visuel se construit devant l’objectif de la photographe : le
          premier portrait, incarné par la jeune femme, évoque son modèle de
          femme influente. Ina Thiam recourt à une mise en scène en parant la
          jeune femme de vêtements et d’un maquillage, créant un palimpseste,
          symbole de la menace de l’oubli ou promesse du souvenir. Le second
          portrait montre cette même jeune femme dans sa contemporanéité,
          inspirée par l’activisme de celle qui l’a précédée. Ces illustres
          personnalités sont des révolutionnaires, des écrivaines, des sportives
          de haut niveau ou encore une grand-mère chérie, « courageuse » et même
          « guerrière ». Kédougou, reflet du monde ? Mémoire en miroir révèle le
          caractère universel de la nécessité de se souvenir des femmes
          engagées. Car, au-delà de l’hommage qui leur est rendu, elles sont un
          modèle pour tous.
        </p>
      )}

      {PresentationMemoire && (
        <MemoirePresentation
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
          title="Khadidjatou Diallo"
        >
          <p>Kedougou 2021</p>{" "}
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Khadidjatou Diallo"
        >
          <p>Kedougou 2021</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Khadidjatou Diallo"
        >
          <p>Kedougou 2021</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Saro Mali"
        >
          <p>Kedougou 2021</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Mariama Diallo"
        >
          <p>Kedougou 2021</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Fatou Souaré"
        >
          <p>Kedougou 2021</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Aminata Diouf"
        >
          <p>Kedougou 2021</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Aya Ndiaye"
        >
          <p>Kedougou 2021</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Mariama Diallo"
        >
          <p>Kedougou 2021</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Aline Sitoé"
        >
          <p>Kedougou 2021</p>
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

export default Memoire;
