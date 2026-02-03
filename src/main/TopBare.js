import { React, useEffect, useState } from "react";

const TopBare = ({ onChangeLang, langToShow }) => {
  const langToSend = "Fr";

  const onClickOnLanguage = (e) => {
    let TheLaguage = e.target.innerText;

    console.log(TheLaguage);

    onChangeLang(e.target.innerText);
  };

  return (
    <>
      {langToShow === "En" ? (
        <div id="TopBare-container">
          <div
            style={{ color: "black" }}
            onClick={onClickOnLanguage}
            className="buttons En-button"
          >
            En
          </div>
          <div
            style={{ color: "gray" }}
            onClick={onClickOnLanguage}
            className="buttons Fr-button"
          >
            Fr
          </div>
        </div>
      ) : (
        <div id="TopBare-container">
          <div
            style={{ color: "gray" }}
            onClick={onClickOnLanguage}
            className="buttons En-button"
          >
            En
          </div>
          <div
            style={{ color: "black" }}
            onClick={onClickOnLanguage}
            className="buttons Fr-button"
          >
            Fr
          </div>
        </div>
      )}
    </>
  );
};

export default TopBare;
