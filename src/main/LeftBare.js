import { React, useEffect, useState } from "react";
let Tabs = "";
let TheLeftBare = "";

let ScreenWidth = window.innerWidth;

const Tab = ({
  tabTitleToShow,
  tabTitleToShowEn,
  tabTitle,
  tabId,
  class2,
  parentCallback,
  TablangToShow,
}) => {
  const [clickTab, setClickTab] = useState();

  console.log("Tab");
  console.log(TablangToShow);

  const onClickOnTab = (e) => {
    let tab = e.target;
    Tabs.forEach((tab) => {
      tab.style.background = "";
      tab.style.left = "";
      tab.style.color = "";
      tab.classList.remove("activeTag");
      tab.classList.remove("activeTag0");
    });
    tab.classList.add("activeTag0");
    TheLeftBare.style.width = "";
    parentCallback(clickTab);

    document.querySelector(".App").scrollTop = "0";
    let theMenu = document.querySelector(".Menu");
    theMenu.classList.remove("Menu_On");
    // theMenu.style.background = "red";
  };

  const onMouseOverTab = (e) => {
    let tab = e.target;
    if (ScreenWidth > 1000) {
      e.stopPropagation();
      if (tab.classList[0] === "tab") {
        Tabs.forEach((tab) => {
          tab.classList.remove("activeTag");
        });
        tab.classList.add("activeTag");
      }
      TheLeftBare.style.width = "9em";
    }
    setClickTab((clickTab) => tabTitle);
  };

  const onMouseOutTab = (e) => {
    e.stopPropagation();
    TheLeftBare.style.width = "";
    Tabs.forEach((tab) => {
      tab.classList.remove("activeTag");
    });
  };

  return (
    <>
      {TablangToShow === "En" ? (
        <div
          onClick={onClickOnTab}
          onMouseOver={onMouseOverTab}
          onMouseOut={onMouseOutTab}
          class={`tab ${class2}`}
          id={tabId}
        >
          {tabTitleToShowEn}
        </div>
      ) : (
        <div
          onClick={onClickOnTab}
          onMouseOver={onMouseOverTab}
          onMouseOut={onMouseOutTab}
          class={`tab ${class2}`}
          id={tabId}
        >
          {tabTitleToShow}
        </div>
      )}
    </>
  );
};

const LeftBare = ({ onChangeTab, langToShow }) => {
  const callback = (count) => {
    onChangeTab(count);
  };

  const onClickOnMenu = (e) => {
    let theMenu = document.querySelector(".Menu");
    let theTabsContainer = document.querySelector("#tabs");
    console.log(theTabsContainer);
    console.log("clicked");

    if (theMenu.classList.length > 1) {
      theTabsContainer.style.left = "-100%";
      theMenu.classList.remove("Menu_On");
    } else {
      theTabsContainer.style.left = "";
      theMenu.classList.add("Menu_On");
    }
  };

  useEffect(() => {
    let theTabsContainer = document.querySelector("#tabs");
    TheLeftBare = document.querySelector("#LeftBare-container");
    Tabs = document.querySelector("#tabs").childNodes;

    if (ScreenWidth < 1000) {
      theTabsContainer.style.left = "-100vw";
    }
  });

  return (
    <div id="LeftBare-container" className="Menu_Of">
      <div className="LeftBare-Closer-container">
        <div onClick={onClickOnMenu} className="Menu"></div>
      </div>

      <div id="tabs">
        <Tab
          TablangToShow={langToShow}
          parentCallback={callback}
          tabTitle="Accueil"
          tabTitleToShow="Accueil"
          tabTitleToShowEn="Home"
          tabId="tab1"
          class2="activeTag0"
        />
        <Tab
          TablangToShow={langToShow}
          parentCallback={callback}
          tabTitle="Lenvers"
          tabTitleToShow="L'Envers Du Decor"
          tabTitleToShowEn="Behind The Scenes"
          tabId="tab2"
        />
        <Tab
          TablangToShow={langToShow}
          parentCallback={callback}
          tabTitleToShow="Tu Es Magnifique"
          tabTitleToShowEn="You Are Beautiful"
          tabTitle="Magnifique"
          tabId="tab3"
        />
        <Tab
          TablangToShow={langToShow}
          parentCallback={callback}
          tabTitleToShow="Issue De Secours"
          tabTitleToShowEn="Emergency Exit"
          tabTitle="Issue"
          tabId="tab4"
        />
        <Tab
          TablangToShow={langToShow}
          parentCallback={callback}
          tabTitleToShow="Andadon"
          tabTitleToShowEn="Andando"
          tabTitle="Andadon"
          tabId="tab5"
        />
        <Tab
          TablangToShow={langToShow}
          parentCallback={callback}
          tabTitleToShow="La Memoire en Miroir"
          tabTitleToShowEn="Memory in the Mirror"
          tabTitle="Memoire"
          tabId="tab6"
        />
        <Tab
          TablangToShow={langToShow}
          parentCallback={callback}
          tabTitleToShow="les Gradiennes Du Temple"
          tabTitleToShowEn="The Gradients of the Temple"
          tabTitle="Temple"
          tabId="tab7"
        />
        <Tab
          TablangToShow={langToShow}
          parentCallback={callback}
          tabTitleToShow="Caillou"
          tabTitleToShowEn="Caillou"
          tabTitle="Caillou"
          tabId="tab8"
        />
        <Tab
          TablangToShow={langToShow}
          parentCallback={callback}
          tabTitleToShow="A La Une"
          tabTitleToShowEn="in the news"
          tabTitle="Une"
          tabId="tab9"
        />
        <Tab
          TablangToShow={langToShow}
          parentCallback={callback}
          tabTitleToShow="Identité Vagabonde"
          tabTitleToShowEn="Wandering Identity"
          tabTitle="Vagabonde"
          tabId="tab10"
        />
        <Tab
          TablangToShow={langToShow}
          parentCallback={callback}
          tabTitleToShow="Pour Le Meilleur Et Pour Le Pire"
          tabTitleToShowEn="For Better Or For Worse"
          tabTitle="Meilleur"
          tabId="tab11"
        />
        <Tab
          TablangToShow={langToShow}
          parentCallback={callback}
          tabTitleToShow="Sama Medina"
          tabTitleToShowEn="My Medina"
          tabTitle="Sama"
          tabId="tab12"
        />
        <Tab
          TablangToShow={langToShow}
          parentCallback={callback}
          tabTitleToShow="Sans Obstacle"
          tabTitleToShowEn="Without Obstacle"
          tabTitle="Obstacle"
          tabId="tab13"
        />
        <Tab
          TablangToShow={langToShow}
          parentCallback={callback}
          tabTitleToShow="Tn"
          tabTitleToShowEn="Tn"
          tabTitle="Tn"
          tabId="tab14"
        />

        <Tab
          TablangToShow={langToShow}
          parentCallback={callback}
          tabTitleToShow="Contact"
          tabTitleToShowEn="TableauxEN"
          tabTitle="Contact"
          tabId="tab15"
        />
      </div>
    </div>
  );
};

export default LeftBare;
