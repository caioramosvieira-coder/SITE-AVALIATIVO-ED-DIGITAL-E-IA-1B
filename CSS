/* --- VARIÁVEIS DO SISTEMA --- */
:root {
    --primary: #2d6a4f;
    --secondary: #95d5b2;
    --dark: #1b4332;
    --light: #f8f9fa;
    --text: #333;
    --radius: 12px;
    --gap: 20px;
    --font-size-base: 16px;
    --transition: all 0.3s ease;
}

/* --- MODO ALTO CONTRASTE --- */
body.high-contrast {
    --primary: #ffff00;
    --secondary: #ffffff;
    --dark: #000000;
    --light: #000000;
    --text: #ffffff;
}

/* --- RESET & BASE --- */
* { box-sizing: border-box; margin: 0; padding: 0; }
body { 
    font-family: 'Segoe UI', sans-serif; 
    font-size: var(--font-size-base);
    background-color: var(--light);
    color: var(--text);
    line-height: 1.6;
}

/* --- GRID & LAYOUT (Editável) --- */
.grid-layout {
    display: grid;
    gap: var(--gap);
    padding: var(--gap);
    /* Mobile: 1 coluna */
    grid-template-columns: 1fr; 
}

@media (min-width: 768px) {
    .grid-layout {
        /* Tablet/Desktop: 3 colunas */
        grid-template-columns: repeat(3, 1fr);
    }
}

/* --- COMPONENTES --- */
.card {
    background: white;
    padding: 1.5rem;
    border-radius: var(--radius);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    border: 1px solid var(--secondary);
}

.scroll-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: 0.8s ease-out;
}

.reveal-active {
    opacity: 1;
    transform: translateY(0);
}

/* Estilo do Acordeão */
.faq-item { border-bottom: 1px solid var(--secondary); cursor: pointer; }
.faq-content { display: none; padding: 10px; }
.faq-content.active { display: block; }
