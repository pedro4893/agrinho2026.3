function analisarAgro() {
    const area = document.getElementById('area').value;
    const preservacao = document.getElementById('preservacao').value;
    const divResultado = document.getElementById('resultado');

    if (area === "" || preservacao === "") {
        divResultado.innerText = "Por favor, preencha todos os campos.";
        return;
    }

    // Simulando um processamento da IA
    divResultado.innerText = "Processando dados pela rede neural...";
    
    setTimeout(() => {
        if (preservacao >= 20) {
            divResultado.className = "resultado bom";
            divResultado.innerHTML = `✅ <strong>Selo Ouro:</strong> Sua produção de ${area} ha mantém o equilíbrio ecológico. O futuro é sustentável!`;
        } else {
            divResultado.className = "resultado alerta";
            divResultado.innerHTML = `⚠️ <strong>Análise de Risco:</strong> Para um Agro Forte a longo prazo, considere aumentar a área de preservação para no mínimo 20%.`;
        }
    }, 1000);
}