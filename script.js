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
    botMsg.innerHTML = getRespostaBot(opcao); // Aqui pode usar HTML com tags <br>, <strong>, etc.
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
    case "horarios": return "Horários de funcionamento";
    case "planos": return "Planos e Preços";
    case "localizacao": return "Quais cidades possuem a academia Green Fit?";
    case "personal": return "Personal Trainers";
    case "leisnormas": return "Leis e Normas da academia";
    case "contato": return "Meios de contato";
    case "humano": return "Gostaria de falar com um atendente humano";
  }
}

function getRespostaBot(opcao) {  
  switch (opcao) {
    case "horarios": return "<strong>Segunda a Sexta:</strong> 6h às 22h<br>" +
    "<strong>Sábados:</strong> 8h às 16h<br>" +
    "<strong>Feriados:</strong> 8h às 14h";

    case "planos": return "Temos 3 opções de plano!<br><br>" +
    "<strong>Plano Mensal:</strong> R$99,90/mês<br>" +
    "<strong>Plano Trimestral:</strong> R$89,90/mês<br>" +
    "<strong>Plano Anual:</strong> R$79,90/mês<br><br>" +
    "Todos os planos incluem acesso completo à academia, aulas coletivas e avaliação física gratuita!";

    case "localizacao": return "Atualmente, a Green Fit está presente nas seguintes cidades do estado de São Paulo:<br><br>" +
    "• São Paulo - Itaim Bibi<br>" + "<br>" +
    "• São Paulo - Oscar Freire<br>" + "<br>" +
    "• Santo André - Av. Capuava<br>" + "<br>" +
    "• Santo André - Av. Dom Pedro I<br>" + "<br>" +
    "• São Caetano do Sul - Av. Goiás<br>" + "<br>" +
    "• Santo André - Av. Capuava<br>" + "<br>" +
    "• Santo André - Av. Dom Pedro I<br>" + "<br>" +
    "• São Bernardo do Campo - Prestes Maia<br>" + "<br>" +
    "• São Bernardo do Campo - Faria Lima<br>";

    case "personal": return "Temos 3 opções de Personal Trainers para você!<br><br>" +
    
    "<strong>João Silva</strong><br>" +
    "• Foco: Hipertrofia (ganho de massa muscular)<br>" +
    "• Atendimento: De segunda a sábado, das 7h às 12h<br>" +
    "• Inclui avaliação física e plano de treino personalizado<br>" +
    "• Valor: R$50 por sessão ou R$ 400/mês<br><br>" +

    "<strong>Carla Mendes</strong><br>" +
    "• Foco: Emagrecimento e condicionamento físico<br>" +
    "• Atendimento: De segunda a sexta, das 13h às 17h<br>" +
    "• Acompanhamento com plano alimentar opcional e metas semanais<br>" +
    "• Valor: R$60 por sessão ou R$ 450/mês<br><br>" +

    "<strong>Fernanda Lima</strong><br>" +
    "• Foco: Treinamento funcional e reabilitação<br>" +
    "• Atendimento: De segunda a sexta, das 18h às 22h<br>" +
    "• Ideal para iniciantes, idosos ou quem busca melhora na mobilidade<br>" +
    "• Valor: R$70 por sessão ou R$ 500/mês<br>";

    case "leisnormas": return "<strong>Leis e Normas da Academia Green Fit:</strong><br><br>" +
    "• É obrigatório o uso de toalha durante os treinos para higiene pessoal e dos equipamentos.<br>" +
    "• Utilize roupas confortáveis e tênis fechado, adequados à prática de atividades físicas.<br>" +
    "• Chegue com antecedência para aulas coletivas e sessões com personal trainer.<br>" +
    "• Após utilizar os aparelhos, limpe-os com os produtos disponibilizados pela academia.<br>" +
    "• Recoloque os pesos e acessórios nos lugares corretos após o uso.<br>" +
    "• Evite o uso de celular durante os treinos, especialmente em áreas comuns.<br>" +
    "• Mantenha o volume das conversas em um nível respeitável. Evite gritar ou bater pesos no chão.<br>" +
    "• É obrigatório portar e apresentar a carteirinha digital ou física para entrada.<br>" +
    "• Menores de 16 anos só podem treinar com autorização e acompanhamento de um responsável.<br>" +
    "• É proibido o consumo de bebidas alcoólicas e o uso de substâncias ilícitas nas dependências.<br><br>" +

    "O descumprimento das normas poderá resultar em advertência, suspensão temporária ou desligamento, conforme a gravidade da infração.<br>" +
    "Contamos com sua colaboração para manter um ambiente saudável, seguro e respeitoso para todos!";

    case "contato": return "<strong>Meios de Contato da Academia Green Fit:</strong><br><br>" +

    "• <strong>WhatsApp:</strong> (11) 99999-9999<br>" +
    "• <strong>Telefone Fixo:</strong> (11) 0000-0000<br>" +
    "• <strong>E-mail:</strong> atendimento@greenfit.com.br<br>" +
    "• <strong>Site:</strong> <a href='https://www.greenfit.com.br' target='_blank'>www.greenfit.com.br</a><br>" +
    "• <strong>Instagram:</strong> <a href='https://www.instagram.com/acadgreenfitofc' target='_blank'>@greenfitoficial</a><br><br>";

    case "humano": return "Função em processo...";
  }
}

function getNovasOpcoes(opcao) {
  const botoes = [];

  if (opcao === "horarios" || opcao === "planos" || opcao === "localizacao" || opcao === "personal" || opcao === "leisnormas" || opcao === "contato" || opcao === "humano") {
    // Adiciona mensagem do bot
    const mensagens = document.getElementById("chat-messages");
    const botMsg = document.createElement("div");
    botMsg.classList.add("bot-message");
    botMsg.textContent = "Posso te ajudar com algo mais?";
    mensagens.appendChild(botMsg);
  }

  // Menu inicial
  const op1 = document.createElement("button");
  op1.textContent = "Horários de funcionamento";
  op1.onclick = () => responder("horarios");

  const op2 = document.createElement("button");
  op2.textContent = "Planos e Preços";
  op2.onclick = () => responder("planos");

  const op3 = document.createElement("button");
  op3.textContent = "Quais cidades possuem a academia Green Fit?";
  op3.onclick = () => responder("localizacao");

  const op4 = document.createElement("button");
  op4.textContent = "Personal Trainers";
  op4.onclick = () => responder("personal");

  const op5 = document.createElement("button");
  op5.textContent = "Leis e Normas da academia";
  op5.onclick = () => responder("leisnormas");

  const op6 = document.createElement("button");
  op6.textContent = "Meios de contato";
  op6.onclick = () => responder("contato");

  const op7 = document.createElement("button");
  op7.textContent = "Gostaria de falar com um atendente humano";
  op7.onclick = () => responder("humano");

  botoes.push(op1, op2, op3, op4, op5, op6, op7);
  return botoes
}