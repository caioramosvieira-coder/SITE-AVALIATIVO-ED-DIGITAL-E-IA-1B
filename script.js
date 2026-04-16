// 1. GESTÃO DE DADOS (Simulando um Banco de Dados)
const servicos = [
    { titulo: "Energia Solar", desc: "Instalação de painéis inteligentes." },
    { titulo: "Gestão de Resíduos", desc: "Software para rastreio de logística reversa." },
    { titulo: "Consultoria ESG", desc: "Adequação ambiental para empresas." }
];

const faqs = [
    { pergunta: "Como funciona a EcoTech?", resposta: "Focamos em tecnologia de baixo impacto." },
    { pergunta: "Atendem todo o Brasil?", resposta: "Sim, através de nossa rede de parceiros." }
];

// 2. RENDERIZAÇÃO DINÂMICA
function renderizarConteudo() {
    const container = document.getElementById('services-container');
    servicos.forEach(item => {
        container.innerHTML += `
            <article class="card">
                <h3>${item.titulo}</h3>
                <p>${item.desc}</p>
            </article>
        `;
    });

    const faqContainer = document.getElementById('faq-container');
    faqs.forEach((item, index) => {
        faqContainer.innerHTML += `
            <div class="faq-item" onclick="toggleFaq(${index})">
                <strong>${item.pergunta}</strong>
                <div id="faq-${index}" class="faq-content">${item.resposta}</div>
            </div>
        `;
    });
}

// 3. ACESSIBILIDADE: CONTROLE DE FONTE E CONTRASTE
let fontSize = 100;
document.getElementById('btn-font-up').addEventListener('click', () => {
    fontSize += 10;
    document.body.style.fontSize = `${fontSize}%`;
});

document.getElementById('btn-font-down').addEventListener('click', () => {
    fontSize -= 10;
    document.body.style.fontSize = `${fontSize}%`;
});

document.getElementById('btn-contrast').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// 4. ANIMAÇÃO SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal-active');
    });
});

document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

// 5. LÓGICA DO ACORDEÃO
function toggleFaq(index) {
    const content = document.getElementById(`faq-${index}`);
    content.classList.toggle('active');
}

// Inicialização
window.onload = renderizarConteudo;
