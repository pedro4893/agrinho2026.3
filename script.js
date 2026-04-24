document.addEventListener('DOMContentLoaded', () => {
    // Gerenciamento do Formulário de Contato
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulação de envio
            contactForm.style.display = 'none';
            formResponse.style.display = 'block';
            
            console.log('Formulário enviado com sucesso!');
        });
    }

    // Efeito de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Destacar link ativo na navegação
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav ul li a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = 'var(--secondary-color)';
            link.style.fontWeight = 'bold';
        }
    });
});