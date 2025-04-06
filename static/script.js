function iniciarChat() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("chat-container").style.display = "block";
}

function responder(opcao) {
    alert("Você escolheu: " + opcao);
    // Aqui depois você pode chamar outra função para continuar o fluxo da árvore de decisão
}