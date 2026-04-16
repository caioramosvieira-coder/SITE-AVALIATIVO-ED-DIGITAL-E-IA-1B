// 1. GESTÃO DE DADOS (Simulando API)
const curiosidades = [
    { titulo: "Diplomatas da Natureza", texto: "Elas se dão bem com quase todos os animais, de pássaros a jacarés." },
    { titulo: "Excelentes Nadadoras", texto: "Possuem membranas interdigitais que as tornam ágeis na água." },
    { titulo: "Dentes Sem Fim", texto: "Seus dentes incisivos crescem continuamente para compensar o desgaste." }
];

const faqs = [
    { p: "Onde elas vivem?", r: "Em grupos próximos a corpos d'água na América do Sul." },
    { p: "O que comem?", r: "São herbívoras, alimentando-se principalmente de gramíneas e plantas aquáticas." }
];

// 2. RENDERIZAÇÃO DINÂMICA
function initContent() {
    const grid = document.getElementById('features-grid');
    curiosidades.forEach(item => {
        grid.innerHTML += `
            <article class="card">
                <h3>${item.titulo}</h3>
                <p>${item.texto}</p>
            </article>
        `;
    });

    const faqContainer = document.getElementById('faq-container');
    faqs.forEach((item, index) => {
        faqContainer.innerHTML += `
            <div class="accordion-item">
                <button class="accordion-header" aria-expanded="false" onclick="toggleAccordion(this)">
                    ${item.p}
                </button>
                <div class="accordion-content">
                    <p>${item.r}</p>
                </div>
            </div>
        `;
    });
}

// 3. ACESSIBILIDADE E CONTROLES
let currentFontSize = 16;

document.getElementById('btn-font-up').onclick = () => {
    currentFontSize += 2;
    document.documentElement.style.setProperty('--font-base', currentFontSize + 'px');
};

document.getElementById('btn-font-down').onclick = () => {
    if(currentFontSize > 12) currentFontSize -= 2;
    document.documentElement.style.setProperty('--font-base', currentFontSize + 'px');
};

document.getElementById('btn-contrast').onclick = () => {
    document.body.classList.toggle('high-contrast');
};

//
