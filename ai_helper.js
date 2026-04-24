
document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('ai-chat-toggle');
    const chatWidget = document.getElementById('ai-chat-widget');
    const chatClose = document.getElementById('ai-chat-close');
    const chatInput = document.getElementById('ai-chat-input');
    const chatSend = document.getElementById('ai-chat-send');
    const chatMessages = document.getElementById('ai-chat-messages');

    // Abrir/Fechar Chat
    chatToggle.addEventListener('click', () => {
        chatWidget.classList.toggle('visible');
    });

    chatClose.addEventListener('click', () => {
        chatWidget.classList.remove('visible');
    });

    // Função para adicionar mensagens
    function addMessage(sender, text) {
        const msgDiv = document.createElement('p');
        msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Lógica da "IA" (Simulada com base em palavras-chave)
    function getAIResponse(userText) {
        const input = userText.toLowerCase();
        if (input.includes('sustentabilidade')) {
            return "A sustentabilidade no agro envolve o uso de técnicas como plantio direto e rotação de culturas para preservar o solo e os recursos hídricos.";
        } else if (input.includes('tecnologia')) {
            return "Drones, sensores e Big Data ajudam a monitorar as lavouras em tempo real, otimizando o uso de insumos e reduzindo desperdícios.";
        } else if (input.includes('biodiversidade')) {
            return "Manter áreas de preservação e corredores ecológicos ajuda no controle natural de pragas e garante a polinização das culturas.";
        } else if (input.includes('oi') || input.includes('olá')) {
            return "Olá! Sou o Assistente Agro. Como posso ajudar você a entender o equilíbrio entre produção e meio ambiente hoje?";
        } else {
            return "Essa é uma excelente questão! O agronegócio moderno busca constantemente o equilíbrio. Explore nossas páginas de Sustentabilidade e Tecnologia para saber mais.";
        }
    }

    // Enviar Mensagem
    function handleSend() {
        const text = chatInput.value.trim();
        if (text) {
            addMessage('Você', text);
            chatInput.value = '';
            
            // Simular tempo de processamento da IA
            setTimeout(() => {
                const response = getAIResponse(text);
                addMessage('IA', response);
            }, 600);
        }
    }

    chatSend.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });
});