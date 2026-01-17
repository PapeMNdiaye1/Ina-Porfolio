import { React, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const OneStuffsContainer = ({
  theId,
  title,
  parentCallback,
  description,
  Images0,
  Images,
  gotALink,
  theLink,
}) => {
  return (
    <div
      key={theId}
      onClick={() =>
        parentCallback(title, description, Images, gotALink, theLink)
      }
      className="stuffs_contain"
    >
      <div className="stuffs">
        <div id={theId} className="stuffs_img">
          <img src={Images[0]} width="100%" />
        </div>
        <h2 className="stuffs_title">{title}</h2>
      </div>
    </div>
  );
};

const Work = () => {
  let [PresentationDesign, setPresentationDesign] = useState(false);
  let [theDesignPresentationTitle, setTheDesignPresentationTitle] =
    useState("");
  let [theDesignPresentationDescription, setTheDesignPresentationDescription] =
    useState("");
  let [theLinkToSet, setTheLink] = useState("");
  let [ImagesToPresentation, setImagesToPresentation] = useState([]);
  let [gotALinkOrNot, setGotALinkOrNot] = useState();

  return (
    <div id="Work" className=".all">
      <h1>Web</h1>
    </div>
  );
};

export default Work;
