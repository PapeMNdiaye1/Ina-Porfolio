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
        {langToShow === "En" ? <h1>Behind the Scenes</h1> : <h1>{title}</h1>}
      </div>
      {langToShow === "En" ? (
        <p className="the-paragraph">
          “The body is the symbol a society uses to talk about its fantasies…
          The body we inhabit is therefore never fully our own. We are permeated
          by the society that runs through us; this body is not my body, it is a
          social image.” Marc-Alain Descamps, The Invention of the Body. The
          female body has not escaped this rule. And this has been the case
          since the dawn of humanity. Might makes right, “It was men who, in the
          primitive hordes of prehistoric times, established their domination
          through physical force; from which followed the values, customs, and
          religions that govern human relations.” These words, taken from an
          article by Moussa Hamidou Talibi entitled “The Body of Woman: From
          Masculinism to the Search for Authentic Femininity,” shook my
          conscience. I realized that all the judgments, prejudices, and many of
          the trends we're led to believe in today as women are very old and
          that the problem runs much deeper. In Senegal, for example, for a long
          time, if you didn't lighten your skin and wear a hairpiece, it was
          difficult for a woman to become a TV presenter or be cast in a series.
          There was a time when you had to be slim to be considered a beautiful
          woman. Today, you have to be curvy and have a flat stomach. As a
          result, everyone is taking up squats and Pilates... We're seeing a
          rise in the lingerie market with fake breasts, fake hips, and products
          to create curves in certain parts of the body... These things have
          profound repercussions for most women who, naturally, have bodies that
          don't conform to these trends. “YOU ARE MAGNIFICENT” is a serie of
          portraits of women, nude or nearly so, in a natural and intimate
          setting. The focus is on the models' bodies to highlight their
          physical differences. Despite these differences, they share a common
          self-confidence; they are aware of their beauty regardless of their
          body type, hair color, eye color, skin tone, or age. The series aims
          to say NO to these primitive hordes and their domination by physical
          force, but also, and above all, to reclaim our bodies as women.
        </p>
      ) : (
        <p className="the-paragraph">
          « Le corps est le symbole dont use une société pour parler de ses
          fantasmes… Le corps que nous vivons n’est donc jamais pleinement
          nôtre. Nous sommes pénétrés par la société qui nous traverse de part
          en part, ce corps n'est pas mon corps c'est une image
          sociale » Marc-Alain Descamps, L’Invention du corps Le corps féminin
          n'a pas échappé à cette règle. Et cela dès le début de l’humanité. La
          force faisant loi, « Ce sont les hommes qui, dans les hordes
          primitives des temps préhistoriques, établirent leur domination par la
          force physique ; d'où suivent les valeurs, les mœurs, les religions
          qui règlent les relations humaines »   Ces écrits tirés d’un article
          de Moussa Hamidou Talibi nommé : « Le Corps de la femme : du
          masculinisme à la recherche d'une féminité authentique » ; ont secoué
          ma conscience. Je me suis rendu compte que tous les jugements, les
          préjugés et bon nombre des tendances qu'on nous fait croire
          aujourd’hui en tant que femmes datent de très longtemps et que le mal
          est plus profond. Au Sénégal par exemple, pendant longtemps, si on ne
          s'éclaircit pas la peau et qu'on ne met pas de faux cheveux il est
          difficile pour une femme d'être présentatrice télé ou sélectionnée
          dans les séries. Il y’a eu un temps où il faut être taille fine pour
          être classée dans la catégorie des belles femmes. Aujourd'hui, il faut
          avoir des rondeurs et un ventre plat. De ce fait, tout le monde se met
          impérativement aux squats et aux pilâtes … On remarque une hausse du
          marché de la lingerie avec des faux seins, des fausses hanches, des
          produits pour créer des rondeurs sur certaines parties du corps…  Ces
          faits ont des répercussions profondes chez la plupart des femmes qui,
          naturellement ont un corps qui ne répond pas aux tendances. « TU ES
          MAGNIFIQUE» est une série de portraits de femmes nues ou presque, dans
          un environnement naturel et intime. Le focus est fait sur le corps des
          models pour montrer la différence physique qu’elles ont. Mais que
          malgré cette différence, elles ont en commun la confiance en elles ;
          elles sont conscientes de leur beauté quel que soit leur corpulence,
          leur type de cheveux, des yeux, la couleur de la peau, l’âge …
          L'objectif de la série est de dire NON à ces hordes primitives avec
          leur domination par la force physique mais aussi et surtout de se
          réapproprier notre corps en tant que femme. 
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
          className="one-Image-container Horizontal"
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

export default Magnifique;
