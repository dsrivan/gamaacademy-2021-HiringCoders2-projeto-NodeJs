import YodaBaby from "../../../assets/images/elements/baby-yoda.png";

const yodaBaby = {
    src: YodaBaby,
    alt: "Imagem Baby Yoda",
    title: "Imagem Baby Yoda",
    width: "120px",
    height: "auto",
}

let floatImage = `
    <div class="main-left">
        <img 
            src="${yodaBaby.src}" 
            alt="${yodaBaby.alt}" 
            title="${yodaBaby.title}" 
            width="${yodaBaby.width}"
            height="${yodaBaby.height}"
        />
    </div>
`;

export default floatImage;