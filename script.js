function iniciarChat() {
  const inicio = document.getElementById("inicio-container");
  const chat = document.getElementById("chat-container");

  inicio.style.transition = "all 0.5s ease";
  inicio.style.opacity = 0;

  setTimeout(() => {
    inicio.style.display = "none";
    chat.style.display = "flex";
    chat.style.flexDirection = "column";
    chat.style.animation = "fadeIn 0.5s ease forwards";
  }, 500);
}

function responder(opcao) {
  const mensagens = document.getElementById("chat-messages");
  const opcoes = document.getElementById("chat-options");

  // Adiciona a mensagem do usuário
  const userMsg = document.createElement("div");
  userMsg.classList.add("user-message");
  userMsg.textContent = getTextoUsuario(opcao);
  mensagens.appendChild(userMsg);

  // Remove botões atuais com efeito
  opcoes.style.opacity = 0;

  setTimeout(() => {
    // Limpa os botões
    opcoes.innerHTML = "";

    // Adiciona resposta do bot
    const botMsg = document.createElement("div");
    botMsg.classList.add("bot-message");
    botMsg.textContent = getRespostaBot(opcao);
    mensagens.appendChild(botMsg);

    // Adiciona novos botões
    const novosBotoes = getNovasOpcoes(opcao);
    novosBotoes.forEach(btn => opcoes.appendChild(btn));
    opcoes.style.opacity = 1;
  }, 500);
}

// Respostas e fluxos
function getTextoUsuario(opcao) {
  switch (opcao) {
    case "horarios": return "Quais são os horários?";
    case "planos": return "Quais são os planos?";
    case "localizacao": return "Onde fica a academia?";
    case "voltar": return "Voltar ao menu inicial";
    default: return "Opção selecionada";
  }
}

function getRespostaBot(opcao) {
  switch (opcao) {
    case "horarios": return "Funcionamos das 6h às 22h de segunda a sexta e das 8h às 14h aos sábados!";
    case "planos": return "Temos planos mensais, trimestrais e anuais com descontos progressivos.";
    case "localizacao": return "Estamos localizados na Av. Exemplo, 123 - Centro.";
    case "voltar": return "Olá! Como posso ajudar?";
    default: return "Desculpe, não entendi. Pode repetir?";
  }
}

function getNovasOpcoes(opcao) {
  const botoes = [];

  if (opcao === "voltar") {
    return getNovasOpcoes("inicio");
  }

  if (opcao === "horarios" || opcao === "planos" || opcao === "localizacao") {
    const voltarBtn = document.createElement("button");
    voltarBtn.textContent = "Voltar ao menu inicial";
    voltarBtn.onclick = () => responder("voltar");
    botoes.push(voltarBtn);
    return botoes;
  }

  // Menu inicial
  const op1 = document.createElement("button");
  op1.textContent = "Quais são os horários?";
  op1.onclick = () => responder("horarios");

  const op2 = document.createElement("button");
  op2.textContent = "Quais são os planos?";
  op2.onclick = () => responder("planos");

  const op3 = document.createElement("button");
  op3.textContent = "Onde fica a academia?";
  op3.onclick = () => responder("localizacao");

  botoes.push(op1, op2, op3);
  return botoes;
}