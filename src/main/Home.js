import React, {
  Fragment,
  Suspense,
  useState,
  useEffect,
  componentWillUnmount,
} from "react";

import LeftBare from "./LeftBare";
import TopBare from "./TopBare";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import ContactB from "./Pages/ContactB";

const Intro = React.lazy(() => import("./Pages/Intro"));
// const Design = React.lazy(() => import("./Pages/Design"));
// const Logos = React.lazy(() => import("./Pages/Logos"));
const Lenvers = React.lazy(() => import("./Pages/Lenvers"));
const Magnifique = React.lazy(() => import("./Pages/Magnifique"));
const Issue = React.lazy(() => import("./Pages/Issue"));
const Work = React.lazy(() => import("./Pages/Work"));

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
      // case "Tableaux":
      //   return <Design title="Tableaux" />;
      // case "Logos":
      //   return <Logos title="Logos" />;
      case "Lenvers":
        return <Lenvers title="l'Envers Du Décor" langToShow={langToShow} />;
      case "Magnifique":
        return <Magnifique title="Tu Es Magnifique" langToShow={langToShow} />;
      case "Issue":
        return <Issue title="Issue de Secours" langToShow={langToShow} />;
      case "Web":
        return <Work />;
      case "Skills":
        return <Skills />;
      case "Contact":
        return <Contact />;
      case "ContactB":
        return <ContactB />;
    }
  };

  return (
    <Fragment>
      <LeftBare langToShow={langToShow} onChangeTab={changeTab} />
      <TopBare onChangeLang={changeLang} />
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
