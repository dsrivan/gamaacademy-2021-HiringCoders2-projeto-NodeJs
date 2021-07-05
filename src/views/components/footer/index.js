import planet from "../../../assets/images/elements/planet.png";

const imgPlanet = {
    src: planet,
    alt: "Logo Star Wars",
    title: "Logo Star Wars",
    width: "180px",
    height: "auto",
}

let footer = `
    <div class="container footer-contain">
        <p>
            Star wars  -  este é um exemplo criado para os Alunos Gama Academy
            Módulo de boas práticas.
        </p>
        <a href="#homeSectionOne">
            <img 
                src="${imgPlanet.src}"
                alt="${imgPlanet.alt}"
                title="${imgPlanet.title}"
                width="${imgPlanet.width}"
                height="${imgPlanet.height}"
            />
        </a>
    </div>
`;

export default footer;