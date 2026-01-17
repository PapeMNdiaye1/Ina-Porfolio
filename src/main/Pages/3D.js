import { React, PropTypes, useState } from 'react'

const DesignPresentation = ({ ImageBack, parentCallback }) => {
    const onClickOnTab = () => {
        parentCallback()
        let LeftBareContainer = document.querySelector('#LeftBare-container')
        LeftBareContainer.style.display = 'block';
    }
    return (
        <div className="design-presentation-container">
            <div className="design-container">
                <div className="show-vertical-image" style={
                    { backgroundImage: ImageBack }
                }>
                </div>
                <button onClick={onClickOnTab} className="close-design">
                    <ion-icon name="close-outline"></ion-icon>
                </button>
            </div>
        </div >
    )
}

function The3D({ title }) {

    let [TheImage, setTheImage] = useState();
    let [PresentationDesign, setPresentationDesign] = useState(false);

    const callback = () => {
        setPresentationDesign(PresentationDesign => false)
    }

    const clickOnImage = (e) => {
        let thImg = e.target;
        let theImageUrl = getComputedStyle(thImg).backgroundImage;

        setPresentationDesign(PresentationDesign => true);
        setTheImage(TheImage => theImageUrl);
        console.log(PresentationDesign, TheImage);

        let LeftBareContainer = document.querySelector('#LeftBare-container')
        LeftBareContainer.style.display = 'none';
    }

    return (
        <div id='The3D' className='.all'>

            <div id="The3D-title">
                <h1>Créations 3D</h1>
            </div>

            {PresentationDesign && <DesignPresentation ImageBack={TheImage} parentCallback={callback} />}

            <div id='The3D-big-container'>
                <div className='The3D-container'>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div className="The3D-container-part-text">
                        <span>Collection "Morceaux du Sénégal": </span>
                        Ceci est ma première collection nommé "Morceaux Du Sénégal".
                        La collection contient actuellement 3 pièces mais je travaille toujours dessus. <br /> <br /> <a href="https://archviz.netlify.app/" target="_blank">
                            <div className="network">
                                Voir l'intégralité des projets <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='The3D-container'>
                    <div onClick={clickOnImage}
                        className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage}
                        className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage}
                        className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage}
                        className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div className="The3D-container-part-text">
                        <span>Décoration Intérieur: </span>
                        A l’aide des logiciels de dernière génération et de notre savoir-faire dans le domaine de l’architecture d’intérieur . Nous vous aidons dans l’aménagement de vos espaces. Du design moderne au traditionnelle, minimaliste etc...                         <br /> <br /> <a href="https://archviz.netlify.app/" target="_blank">
                            <div className="network">
                                Voir l'intégralité des projets <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='The3D-container'>
                    <div onClick={clickOnImage}
                        className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage}
                        className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div className="The3D-container-part-text">
                        <span>Design pour les Commerces: </span>
                        Nous avons une grande expérience dans l’agencement de point de vente, et l’aménagement de bureaux.Quel que soit la typologie du point de vente, sa vocation, sa stratégie et son positionnement. <br /> <br /> <a href="https://archviz.netlify.app/" target="_blank">
                            <div className="network">
                                Voir l'intégralité des projets <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='The3D-container'>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div className="The3D-container-part-text">
                        <span>Design de Maison Moderne: </span>
                        Des designs Modernes, épurés, minimalistes etc… nous mettons en œuvres différentes approches pour une optimisation de vos espaces extérieurs et intérieurs.Pour se faire nous utilisons différents logiciels avec les dernières innovations pour des rendus d’images à la fois réalistes et immersives. <br /> <br /> <a href="https://archviz.netlify.app/" target="_blank">
                            <div className="network">
                                Voir l'intégralité des projets <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>
                        </a>
                    </div>
                </div>

                <div className='The3D-container'>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div className="The3D-container-part-text">
                        <span>Products Designes et PUB: </span>
                        Rendu produit pour Wraptor Gaming (le plus grand tapis de souris de jeu au monde)<br /> <br />
                        <a href="https://www.behance.net/gallery/160491209/Product-rendering-for-Wraptor-Gaming" target="_blank">
                            <div className="network">
                                Voir l'intégralité des projets <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>
                        </a>
                    </div>
                </div>

                <div className='The3D-container'>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div onClick={clickOnImage} className="The3D-Smoll-container">
                    </div>
                    <div className="The3D-container-part-text">
                        <span>Products Designes et PUB:  </span>
                        Création de visuels publicitaires et animations. <br /> <br />
                        <a href="https://www.behance.net/gallery/147131937/Style-%28Product-Design%29" target="_blank">
                            <div className="network">
                                Voir l'intégralité des projets <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>
                        </a>
                    </div>
                </div>


            </div>
        </div>
    )
}





export default The3D