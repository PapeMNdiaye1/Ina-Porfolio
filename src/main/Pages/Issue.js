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

function Issue({ title, langToShow }) {
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
    <div id="Issue" className=".all">
      <div className="Nimp">gggg</div>
      <div id="Article-title">
        {langToShow === "En" ? <h1>Emergency Exit</h1> : <h1>{title}</h1>}
      </div>
      {langToShow === "En" ? (
        <p className="the-paragraph">
          “Justice doesn’t heal the trauma suffered,” says Aminata Libain
          Mbengue. I describe the life of a victim of sexual violence as being
          trapped in a burning building. The smoke makes it impossible to
          breathe. They can’t even see themselves. They run around frantically.
          They’re terrified but try to open every door. Sometimes they open a
          door and realize the fire has spread to that part of the building. In
          that case, they either close it again or go in and perish. It all
          depends on the degree of their trauma. But what they’re really
          searching for is that door marked “Emergency Exit” that would allow
          them to leave the building, to breathe, to see themselves, to exist,
          and to be able to appreciate everything. As a victim, I know this
          building; I lived there for about 20 years. I opened and closed doors,
          but I finally saw the Emergency Exit. My escape route is art, urban
          culture. So, I believe that every victim has the right to find that
          door and free themselves. Emergency Exit is a 105-page photo book that
          combines 10 self-portraits and 10 dialogues. Each photo/dialogue
          pairing describes a stage in my resilience. Working on this project is
          therapeutic for me, a way to accept myself in front of everyone and,
          above all, to move beyond the victim mentality. I am a survivor, and
          the goal is for Emergency Exit to inspire other women.
        </p>
      ) : (
        <p className="the-paragraph">
          La justice ne guérit pas le traumatisme subi dit Aminata Libain
          Mbengue.  Je décris la vie d'une  victime de violence sexuelle comme
          quand une personne est coincée dans un immeuble qui prend feu. L'effet
          du fumé fait que la personne ne peut pas respirer. Elle n'arrive pas à
          se voir elle-même. Elle court dans tous les sens. Elle a peur mais
          essaie d'ouvrir toutes les portes.  Des fois, elle ouvre une porte et
          se rend compte que le feu a gagné cette partie de l'immeuble. Dans ce
          cas soit elle la referme, soit elle y entre et succombe. Tout dépend
          de son degrés de traumatisme. Mais ce qu'elle recherche en réalité
          c'est cette porte ou il est écrit Issue De Secours qui lui
          permettrait de sortir de cet immeuble, de respirer, de se voir,
          d'exister et de pouvoir d'apprécier tout.  En tant que victime, je
          connais cet immeuble, j'y ai vécu pendant environ 20 ans. J'ai ouvert
          et refermé des portes mais j'ai fini par voir l'Issue De Secours. 
          Mon Issue De Secours, c'est l'art, les cultures urbaines. Alors, je
          pense que chaque victime a le droit de trouver cette porte et de se
          libérer.  Issue De Secours est un livre photo de 105 pages qui combine
          10 autoportraits et 10 dialogues. Chaque couple photo/dialogue décrit
          une étape de ma résilience. Travailler sur cette œuvre est une
          thérapie pour moi, une façon de m’assumer devant tout le monde et
          surtout de dépasser l’étape de victime. Je suis une survivante et
          l’objectif est que Issue De Secours puisse inspirer d’autres femmes.
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
          title="Issue"
        >
          <p>Bruxelles 2025</p>{" "}
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Issue"
        >
          <p>Bruxelles 2025</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Issue"
        >
          <p>Bruxelles 2025</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container vertical"
          title="Issue"
        >
          <p>Bruxelles 2025</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Issue"
        >
          <p>Bruxelles 2025</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Issue"
        >
          <p>Bruxelles 2025</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Issue"
        >
          <p>Bruxelles 2025</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Issue"
        >
          <p>Bruxelles 2025</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container Horizontal"
          title="Issue"
        >
          <p>Bruxelles 2025</p>
        </div>
        <div
          onClick={clickOnImage}
          className="one-Image-container vertical"
          title="Issue"
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
          Mail: Pmomar44@gmail.com <br />
          Tel: 77 727 86 55
        </div>
      </div>
    </div>
  );
}

export default Issue;
