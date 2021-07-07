import backgroundTwo from "../../../assets/images/background/bg2.png";

import darthVader from "../../../assets/images/elements/vader.png";

import footer from "../footer";

let TextContent = `<span id="homeSectionText">Lucas</span> ipsum dolor sit amet luke sidious jango cade mace palpatine jawa wookiee wookiee kashyyyk. Dantooine calrissian r2-d2 calamari coruscant skywalker ewok. Darth fett moff endor twi'lek windu obi-wan luuke. Alderaan hutt hoth moff zabrak moff organa calamari. Ackbar mustafar wedge padmé mandalorians solo secura moff jar. Jawa luuke hutt organa jango jinn. Boba jabba kenobi moff luuke qui-gonn thrawn. Twi'lek yoda mace luke vader boba. Mace kessel darth antilles jabba. Luke hoth organa leia anakin skywalker leia ponda. Moff ahsoka yavin calamari.`;

const imgDarthVader = {
    src: darthVader,
    alt: "Imagem Darth Vader",
    title: "Imagem Darth Vader",
}

let HomeSectionTwo = `
    <section id="homeSectionTwo" class="section background--two" style="background-image: url(${backgroundTwo})">
        <div class="container block-section">    
            <div class="block-section--two">
                <div class="image-text">
                    <img 
                        src="${imgDarthVader.src}"
                        alt="${imgDarthVader.alt}"
                        title="${imgDarthVader.title}"
                    />
                    <div class="text-section--two">
                        <p>${TextContent}</p>
                    </div>
                </div>
                <div class="footer">
                    ${footer}
                </div>
            </div>
        </div>
    </section>
`;

export default HomeSectionTwo;