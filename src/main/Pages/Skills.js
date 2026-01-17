import { React, useEffect, useState } from 'react'
let Tabs = [];

const Tab = ({ theClass, icon, name, parentCallback }) => {
    const onMouseOverTab = (e) => {
        let tab = e.target
        Tabs.forEach(tab => {
            tab.classList.remove('skills-activeTag')
        });
        tab.classList.add('skills-activeTag')
        let BlendTab = document.querySelectorAll(".skills")[1];
        if (BlendTab == tab) {
            document.querySelector(".theSVG").style.fill = "#f1f1f1";
        }
    }
    const onMouseOutTab = (e) => {
        e.stopPropagation();
        Tabs.forEach(tab => {
            tab.classList.remove('skills-activeTag')
        });
        let tab = e.target
        let BlendTab = document.querySelectorAll(".skills")[1];
        console.log(tab.classList.length);
        if (BlendTab == tab && tab.classList.length != 3) {
            document.querySelector(".theSVG").style.fill = "#222";
        }
    }
    const onClickOnTab = (e) => {
        let tab = e.target
        if (typeof tab === 'object') {
            Tabs.forEach(tab => {
                tab.classList.remove('skills_selected')
            });
            tab.classList.add('skills_selected')
            parentCallback(tab.childNodes[1].innerText)
        }
        let BlendTab = document.querySelectorAll(".skills")[1];
        if (BlendTab == tab) {
            document.querySelector(".theSVG").style.fill = "#f1f1f1";
        } else {
            document.querySelector(".theSVG").style.fill = "#222";
        }
    }
    return (
        <div
            onMouseOver={onMouseOverTab}
            onMouseOut={onMouseOutTab}
            onClick={onClickOnTab}
            className={theClass}>
            {icon}
            <h1>{name}</h1>
        </div>
    )
}
const Skills = () => {
    const [theSkills, setTheSkills] = useState('javaScript')
    const callback = (Tab) => {
        setTheSkills(Tab)
        changeTheTab(theSkills)
    }
    const changeTheTab = (theNewTab) => {
        switch (theNewTab) {
            case "node.js": return (<div
                style={{
                    gridRowStart: '3'
                }} className='onSkillsInfos'>
                <h2>
                    Node
                </h2 >
                <p>Le Js étant mon langage de prédilection il était normal que je fasse du node en back-end. Mes projets les plus poussent avec Node sont les plateformes Hackeur-House et Geek-Blog.</p>
            </div>);
            case "blender": return (<div style={{
                gridRowStart: '2'
            }} className='onSkillsInfos'><h2>Blender</h2>
                <p>
                    C'est le logiciel que j'utilise pour la modélisation et l’animation 3D. <br /> Depuis 2019 le logiciel Blender est de plus en plus reconnu par les entreprises du secteur de la 3D, comme Epic Games et Ubisoft.
                </p>
            </div>
            );
            case "javaScript": return (<div style={{
                gridRowStart: '1'
            }} className='onSkillsInfos'><h2>JavaScript</h2> <p>
                    C'est mon premier langage et celui avec lequel je suis le plus à laise, sa maitrise m'offre une liberte total dans la dynamisation de mes pages web.
                    Le JavaScript est un langage de programmation qui permet d’implémenter des mécanismes complexes sur une page.</p></div>);
            case "react": return (<div style={{
                gridRowStart: '4'
            }} className='onSkillsInfos'><h2>React</h2> <p>Apres avoir eu suffisamment d'experience avec L'environnement Js, j'ai décidé de parfaire mon frontend en apprenant un framework.
                React fut le choix le plus judicieux du fait de sa stabilité et de la communauté autour. J'ai réalisé de nombreux projets en React parmis les quels ce portfolio.</p></div>);
            case "git": return (<div style={{
                gridRowStart: '5'
            }} className='onSkillsInfos'><h2>Git</h2> <p>C'est un indispensable pour n'importe quelle projet individuel ou en equipe. C'est un protocole permettant de suivre les modifications dans n'importe quel ensemble de fichiers,
                généralement utilisé pour coordonner le travail entre les programmeurs développant en collaboration le code source d'un
                logiciel ou d'une platforme.
                </p></div>);
            case "html": return (<div style={{
                gridRowStart: '6'
            }} className='onSkillsInfos'><h2>HTML</h2> <p>Ce fut ma porte d'entrée dans le monde du développement. C'est l'ossature de toute plateforme web.</p></div>);
            case "css": return (<div style={{
                gridRowStart: '8'
            }} className='onSkillsInfos'><h2>CSS</h2> <p>Mon experience en tant que designer me permet de pousser le langage à son plein potentiel. J'utilise surtout le préprocesseur Sass.</p></div>);
            case "adobe": return (<div style={{
                gridRowStart: '9'
            }} className='onSkillsInfos'><h2>Adobe</h2> <p>Les logiciels de la suite adobe sont mes principaux outils de designe. J'utilise presque quotidiennement Photoshop Illustrator et adobe Xd.
                    <br /> <br /> <svg viewBox="0 0 74.38 18.61" width="100" fill='#f1f1f1'><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path class="cls-1" d="M27.75,0V18.61H46.63V0Zm17.38,17.1H29.25V1.52H45.13Z" /><path class="cls-1" d="M35.58,5.53l-.17.53-2.18,7.12h1.53l.27-.76h2.29l.24.76h1.53L36.94,6.06l-.17-.53Zm4,0V7.06h1.53V5.53Zm0,3.06v4.59h1.53V8.59Zm-3.44.12.69,2.18H35.48Z" /><path class="cls-1" d="M0,0V18.61H18.89V0Zm17.39,17.1H1.5V1.52H17.39Z" /><path class="cls-1" d="M8.92,6.15A3.24,3.24,0,0,0,6.74,5.5c-1,0-2.17,0-2.17,0v7.62H6.16V10.7h.58A3.1,3.1,0,0,0,9,9.75,2.51,2.51,0,0,0,9.68,8,2.37,2.37,0,0,0,8.92,6.15ZM6.7,9.35H6.16V6.72a6.47,6.47,0,0,1,.67,0A1.23,1.23,0,0,1,8.08,8,1.27,1.27,0,0,1,6.7,9.35Z" /><path class="cls-1" d="M12.8,9.55c-.69-.25-.91-.39-.91-.66s.24-.46.66-.46A3.87,3.87,0,0,1,14,8.88V7.6a3.26,3.26,0,0,0-1.52-.39c-1.39,0-2.29.8-2.29,1.87,0,.66.44,1.14,1.6,1.53.65.22.82.53.82.82s-.21.48-.74.48a3.77,3.77,0,0,1-1.6-.5h0v1.27a3.89,3.89,0,0,0,1.6.47c1.62,0,2.43-.79,2.43-1.85,0-.84-.46-1.38-1.52-1.75Z" /><path class="cls-2" d="M55.49,18.57H74.38V0H55.49ZM72.88,17.1H57V1.48H72.88Z" /><path class="cls-3" d="M68.53,8.54a.86.86,0,0,0-.38-.07c-.83,0-1.38.63-1.38,1.69s.57,1.68,1.3,1.68a1.25,1.25,0,0,0,.45-.07V8.54ZM65.6,10.21A2.53,2.53,0,0,1,68.19,7.5h.34V5.76h1.18s0,6.7,0,6.72a3.69,3.69,0,0,1-1.67.33A2.29,2.29,0,0,1,65.6,10.21ZM63.37,9.15l1.79,3.66H64S63,11,62.6,10h0c-.39.88-1.36,2.78-1.36,2.78H60.15L61.9,9.26l-1.69-3.5h1.13l1.34,2.65h0L64,5.76h1.06Z" /></g></g></svg>                </p></div>);
        }
    }

    useEffect(() => {
        Tabs = document.querySelectorAll('.skills');
    })



    return (
        <div id='Skills' className='.all'>
            <div id="skills_navbar">
                <Tab parentCallback={callback} theClass='skills skills_selected javaScript' icon={<i class="fab fa-js"></i>} name='javaScript' />
                <Tab parentCallback={callback} theClass='skills php' icon={<svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0.499 48.118 511.002 415.763"><path className='theSVG' d="M510.003 279.642c-2.998-21.097-10.305-41.104-21.725-59.459-9.959-16.019-22.738-30.266-37.991-42.375l.041-.038L290.133 54.731a4.569 4.569 0 0 0-.361-.287c-5.326-4.08-12.537-6.325-20.297-6.325-7.77 0-15.263 2.25-21.088 6.338-6.263 4.375-9.843 10.18-10.093 16.359-.229 5.765 2.521 11.312 7.764 15.636 10.31 8.135 20.597 16.447 30.898 24.769 9.997 8.08 20.298 16.401 30.549 24.502l-196.213-.133c-22.439 0-37.718 10.537-40.861 28.178-1.381 7.727 1.056 16.223 6.504 22.73 5.78 6.898 14.172 10.703 23.629 10.703l14.958.01c20.664 0 41.419-.051 62.146-.101l19.766-.046-178.08 131.748-.707.517C8.7 336.953 2.188 347.642.783 358.653c-1.065 8.342.881 15.965 5.63 22.053 5.66 7.258 14.497 11.25 24.885 11.25 10.205 0 20.618-3.867 29.334-10.908l96.166-78.7c-.411 3.843-.91 9.481-.853 13.573.108 6.479 2.188 19.479 5.481 30.033 6.804 21.69 18.265 41.535 34.063 58.963 16.438 18.132 36.458 32.509 59.5 42.722 24.36 10.774 50.547 16.243 77.836 16.243h.253c27.376-.066 53.646-5.622 78.085-16.519 23.08-10.334 43.091-24.769 59.467-42.898 15.778-17.517 27.223-37.395 34.014-59.067a151.124 151.124 0 0 0 6.416-33.003c.839-10.83.478-21.85-1.057-32.753zM334.82 383.601c-60.141 0-108.911-43.627-108.911-97.447 0-53.814 48.771-97.441 108.911-97.441 60.142 0 108.907 43.627 108.907 97.441.002 53.82-48.765 97.447-108.907 97.447zm62.807-106.01c.887 16.063-5.529 30.978-16.796 42.019-11.461 11.248-27.815 18.313-46.103 18.313-18.28 0-34.637-7.065-46.102-18.313-11.262-11.041-17.665-25.954-16.783-42.006.864-15.603 8.475-29.376 19.939-39.128 11.273-9.589 26.41-15.439 42.945-15.439 16.537 0 31.67 5.852 42.944 15.439 11.47 9.752 19.083 23.515 19.956 39.115z" /></svg>} name='blender' />
                <Tab parentCallback={callback} theClass='skills nodejs' icon={<i class="fab fa-node-js"></i>} name='node.js' />
                <Tab parentCallback={callback} theClass='skills react' icon={<i class="fab fa-react"></i>} name='react' />
                <Tab parentCallback={callback} theClass='skills git' icon={<i class="fab fa-git-alt"></i>} name='git' />
                <Tab parentCallback={callback} theClass='skills html' icon={<i class="fab fa-html5"></i>} name='html' />
                <Tab parentCallback={callback} theClass='skills css' icon={<i class="fab fa-css3"></i>} name='css' />
                <Tab parentCallback={callback} theClass='skills adobe' icon={<i class="fab fa-adobe"></i>} name='adobe' />
            </div>
            <div id='skills-presentation'>
                {changeTheTab(theSkills)}
            </div>

        </div>
    )
}

export default Skills