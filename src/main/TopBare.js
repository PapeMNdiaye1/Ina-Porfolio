import { React, useEffect, useState } from "react";

const TopBare = ({ onChangeLang }) => {
  const langToSend = "Fr";

  const onClickOnLanguage = (e) => {
    let TheLaguage = e.target.innerText;

    console.log(TheLaguage);

    onChangeLang(e.target.innerText);
  };

  return (
    <div id="TopBare-container">
      <div onClick={onClickOnLanguage} className="buttons En-button">
        En
      </div>
      <div onClick={onClickOnLanguage} className="buttons Fr-button">
        Fr
      </div>
    </div>
  );
};

export default TopBare;
