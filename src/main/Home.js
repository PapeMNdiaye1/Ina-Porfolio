import React, {
  Fragment,
  Suspense,
  useState,
  useEffect,
  componentWillUnmount,
} from "react";

import LeftBare from "./LeftBare";
import TopBare from "./TopBare";
// import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import ContactB from "./Pages/ContactB";

const Intro = React.lazy(() => import("./Pages/Intro"));
// const Design = React.lazy(() => import("./Pages/Design"));
// const Logos = React.lazy(() => import("./Pages/Logos"));
const Lenvers = React.lazy(() => import("./Pages/Lenvers"));
const Andadon = React.lazy(() => import("./Pages/Andadon"));
const Memoire = React.lazy(() => import("./Pages/Memoire"));
const Magnifique = React.lazy(() => import("./Pages/Magnifique"));
const Temple = React.lazy(() => import("./Pages/Temple"));
const Caillou = React.lazy(() => import("./Pages/Caillou"));
const Une = React.lazy(() => import("./Pages/Une"));
const Vagabonde = React.lazy(() => import("./Pages/Vagabonde"));
const Tn = React.lazy(() => import("./Pages/Tn"));
const Meilleur = React.lazy(() => import("./Pages/Meilleur"));
const Sama = React.lazy(() => import("./Pages/Sama"));
const Obstacle = React.lazy(() => import("./Pages/Obstacle"));
const Issue = React.lazy(() => import("./Pages/Issue"));
// const Work = React.lazy(() => import("./Pages/Work"));

function Home() {
  const [tabToShow, setTabToShow] = useState("Accueil");
  const [langToShow, setLangToShow] = useState("Fr");
  const changeTab = (newTab) => {
    setTabToShow(newTab);
    changeTheTab(tabToShow);
  };
  const changeLang = (newLang) => {
    setLangToShow(newLang);
    console.log(newLang);
  };

  const changeTheTab = (theNewTab) => {
    switch (theNewTab) {
      case "Accueil":
        return <Intro title="Ina Makosi" langToShow={langToShow} />;

      case "Lenvers":
        return <Lenvers title="l'Envers Du Décor" langToShow={langToShow} />;
      case "Magnifique":
        return <Magnifique title="Tu Es Magnifique" langToShow={langToShow} />;
      case "Issue":
        return <Issue title="Issue De Secours" langToShow={langToShow} />;
      case "Andadon":
        return <Andadon title="Andadon" langToShow={langToShow} />;
      case "Memoire":
        return <Memoire title="La Memoire En Miroir" langToShow={langToShow} />;
      case "Temple":
        return <Temple title="th Temple" langToShow={langToShow} />;
      case "Caillou":
        return <Caillou title="Caillou" langToShow={langToShow} />;
      case "Une":
        return <Une title="A la Une" langToShow={langToShow} />;
      case "Vagabonde":
        return <Vagabonde title="Vagabonde" langToShow={langToShow} />;
      case "Meilleur":
        return <Meilleur title="Meilleur" langToShow={langToShow} />;
      case "Tn":
        return <Tn title="Tn" langToShow={langToShow} />;
      case "Sama":
        return <Sama title="Sama" langToShow={langToShow} />;
      case "Obstacle":
        return <Obstacle title="Obstacle" langToShow={langToShow} />;

      case "Contact":
        return <Contact />;
      case "ContactB":
        return <ContactB />;
    }
  };

  return (
    <Fragment>
      <LeftBare langToShow={langToShow} onChangeTab={changeTab} />
      <TopBare onChangeLang={changeLang} langToShow={langToShow} />
      {/* ############################################### */}
      <div id="home-container">
        <Suspense
          fallback={
            <div class="Loaders">
              <div class="a">
                <div></div>
                <div></div>
              </div>
            </div>
          }
        >
          {changeTheTab(tabToShow)}
        </Suspense>
      </div>
    </Fragment>
  );
}

export default Home;
