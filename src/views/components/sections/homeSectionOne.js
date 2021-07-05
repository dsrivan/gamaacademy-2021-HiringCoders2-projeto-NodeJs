import Logo from "../../../assets/images/logo/logo.png";
import backgroundOne from "../../../assets/images/background/bg1.png";

const logo = {
    src: Logo,
    alt: "Logo Star Wars",
    title: "Logo Star Wars",
    width: "300px",
    height: "auto",
}

let HomeSectionOne = `
    <section id="homeSectionOne" class="section background--one" style="background-image: url(${backgroundOne})">
        <div class="container block-section--one">
            <h1>CLIQUE NO BABY YODA, ELE TE MOSTRARÁ O CAMINHO</h1>
            <img 
                src="${logo.src}" 
                alt="${logo.alt}" 
                title="${logo.title}" 
                width="${logo.width}"
                height="${logo.height}"
            />
        </div>
    </section>
`;

export default HomeSectionOne;