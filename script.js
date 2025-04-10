//função para dar inicio ao chat virtual (com efeito)
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

//função para exibir o fluxo de pergunta e resposta
function responder(opcao) {
  const mensagens = document.getElementById("chat-messages");
  const opcoes = document.getElementById("chat-options");

  const userMsg = document.createElement("div");
  userMsg.classList.add("user-message");
  userMsg.textContent = getTextoUsuario(opcao);
  mensagens.appendChild(userMsg);

  opcoes.style.opacity = 0;

  setTimeout(() => {
    opcoes.innerHTML = "";

    const botMsg = document.createElement("div");
    botMsg.classList.add("bot-message");
    botMsg.innerHTML = getRespostaBot(opcao);
    mensagens.appendChild(botMsg);

    //caso especial com outro fluxo de pergunta e resposta
    if (opcao === "planos") {
      const interesseMsg = document.createElement("div");
      interesseMsg.classList.add("bot-message");
      interesseMsg.textContent = "Você tem interesse em assinar um plano conosco?";
      mensagens.appendChild(interesseMsg);

      const simBtn = document.createElement("button");
      simBtn.textContent = "Sim, tenho interesse!";
      simBtn.onclick = () => {
        adicionarMensagemUsuario("Sim, tenho interesse");
      
        const msg = document.createElement("div");
        msg.classList.add("bot-message");
        msg.textContent = "Qual plano você tem interesse?";
        mensagens.appendChild(msg);
      
        opcoes.innerHTML = "";
      
        const planos = [
          { texto: "Plano Mensal", valor: "mensal" },
          { texto: "Plano Trimestral", valor: "trimestral" },
          { texto: "Plano Anual", valor: "anual" }
        ];

        //exibe mensagem de bem-vindo ao selecionar um plano
        planos.forEach(plano => {
          const botaoPlano = document.createElement("button");
          botaoPlano.textContent = plano.texto;
          botaoPlano.onclick = () => {
            adicionarMensagemUsuario(plano.texto);
            const finalMsg = document.createElement("div");
            finalMsg.classList.add("bot-message");
            finalMsg.textContent = `Seja bem-vindo a Green Fit! Aproveite o seu ${plano.texto}!`;
            mensagens.appendChild(finalMsg);
            adicionarOpcoesEncerramento();
          };
          opcoes.appendChild(botaoPlano);
        });
      
        opcoes.style.opacity = 1;
      };

      //encerra o caso especial e aciona a opção de menu novamente
      const naoBtn = document.createElement("button");
      naoBtn.textContent = "Não tenho interesse";
      naoBtn.onclick = () => {
        adicionarMensagemUsuario("Não tenho interesse");
        adicionarOpcoesEncerramento();
      };

      opcoes.appendChild(simBtn);
      opcoes.appendChild(naoBtn);
      opcoes.style.opacity = 1;

      //outro caso especial com outro fluxo de pergunta e resposta
    } else if (opcao === "personal") {
      const interesseMsg = document.createElement("div");
      interesseMsg.classList.add("bot-message");
      interesseMsg.textContent = "Você tem interesse em fazer aulas com algum de nossos Personal Trainers?";
      mensagens.appendChild(interesseMsg);
    
      opcoes.innerHTML = "";
    
      const simBtn = document.createElement("button");
      simBtn.textContent = "Sim, tenho interesse!";
      simBtn.onclick = () => {
        adicionarMensagemUsuario("Sim, tenho interesse!");

        //inicia o outro fluxo e exibe as opções de escolha
        const msg = document.createElement("div");
        msg.classList.add("bot-message");
        msg.textContent = "Qual Personal você tem interesse em fazer aulas?";
        mensagens.appendChild(msg);
    
        opcoes.innerHTML = "";
    
        const personaltrainers = [
          { texto: "João Silva", valor: "joao" },
          { texto: "Carla Mendes", valor: "carla" },
          { texto: "Fernanda Lima", valor: "fernanda" }
        ];
    
        personaltrainers.forEach(personal => {
          const botaoPersonal = document.createElement("button");
          botaoPersonal.textContent = personal.texto;
          botaoPersonal.onclick = () => {
            adicionarMensagemUsuario(personal.texto);
            const finalMsg = document.createElement("div");
            finalMsg.classList.add("bot-message");
            finalMsg.textContent = `Ok! Em breve entraremos em contato com mais informações sobre as aulas com ${personal.texto}.`;
            mensagens.appendChild(finalMsg);
            adicionarOpcoesEncerramento();
          };
          opcoes.appendChild(botaoPersonal);
        });
    
        opcoes.style.opacity = 1;
      };

      //encerra o caso especial e aciona a opção de menu novamente
      const naoBtn = document.createElement("button");
      naoBtn.textContent = "Não tenho interesse";
      naoBtn.onclick = () => {
        adicionarMensagemUsuario("Não tenho interesse");
        adicionarOpcoesEncerramento();
      };

      //opções para os casos especiais (sim ou nao tenho interesse)
      opcoes.appendChild(simBtn);
      opcoes.appendChild(naoBtn);
      opcoes.style.opacity = 1;

    //opções para casos não especiais (voltar ao menu ou não)
    } else {
      const novosBotoes = getNovasOpcoes(opcao);
      novosBotoes.forEach(btn => opcoes.appendChild(btn));
      opcoes.style.opacity = 1;
    }
  }, 500);
}

//função para retornar como mensagem a opção que o usuário selecionou
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

//função para exibir a resposta do bot como mensagem de acordo com a opção escolhida pelo usuário
function getRespostaBot(opcao) {
  switch (opcao) {
    case "horarios": return "<strong>Segunda a Sexta:</strong> 6h às 22h<br><strong>Sábados:</strong> 8h às 16h<br><strong>Feriados:</strong> 8h às 14h";
    case "planos": return "Temos 3 opções de plano!<br><br><strong>Plano Mensal:</strong> R$99,90/mês<br><strong>Plano Trimestral:</strong> R$89,90/mês<br><strong>Plano Anual:</strong> R$79,90/mês<br><br>Todos os planos incluem acesso completo à academia, aulas coletivas e avaliação física gratuita!";
    case "localizacao": return "Atualmente, a Green Fit está presente nas seguintes cidades do estado de São Paulo:<br><br>• São Paulo - Itaim Bibi<br>• São Paulo - Oscar Freire<br>• Santo André - Av. Capuava<br>• Santo André - Av. Dom Pedro I<br>• São Caetano do Sul - Av. Goiás<br>• São Bernardo do Campo - Prestes Maia<br>• São Bernardo do Campo - Faria Lima";
    case "personal": return "<strong>João Silva</strong><br>• Foco: Hipertrofia<br>• Atendimento: 7h às 12h<br>• R$50 por sessão ou R$400/mês<br><br><strong>Carla Mendes</strong><br>• Foco: Emagrecimento<br>• Atendimento: 13h às 17h<br>• R$60 por sessão ou R$450/mês<br><br><strong>Fernanda Lima</strong><br>• Foco: Funcional<br>• Atendimento: 18h às 22h<br>• R$70 por sessão ou R$500/mês";
    case "leisnormas": return "<strong>Leis e Normas:</strong><br><br>• Uso obrigatório de toalha<br>• Roupas adequadas e tênis<br>• Limpeza dos aparelhos após uso<br>• Evitar celular e barulhos excessivos<br>• Proibido menores sem autorização<br>• Proibido álcool e drogas<br><br>Mantenha o ambiente saudável!";
    case "contato": return "<strong>Contatos:</strong><br><br>• WhatsApp: (11) 99999-9999<br>• Tel: (11) 0000-0000<br>• Email: atendimento@greenfit.com.br<br>• Site: <a href='https://www.greenfit.com.br' target='_blank'>greenfit.com.br</a><br>• Instagram: <a href='https://www.instagram.com/acadgreenfitofc' target='_blank'>@greenfitoficial</a>";
    case "humano": return "Função em desenvolvimento...";
  }
}

//função para exibir resposta final do bot, se deseja algo mais ou não (caso não, aciona a função de agradecimento e avaliação)
function getNovasOpcoes(opcao) {
  const mensagens = document.getElementById("chat-messages");
  const opcoes = [];

  const botMsg = document.createElement("div");
  botMsg.classList.add("bot-message");
  botMsg.textContent = "Posso te ajudar com algo mais?";
  mensagens.appendChild(botMsg);

  const simBtn = document.createElement("button");
  simBtn.textContent = "Sim, quero voltar ao menu";
  simBtn.onclick = () => {
    adicionarMensagemUsuario("Sim, quero voltar ao menu");
    mostrarMenuInicial();
  };
  opcoes.push(simBtn);

  const naoBtn = document.createElement("button");
  naoBtn.textContent = "Não, muito obrigado";
  naoBtn.onclick = () => {
    adicionarMensagemUsuario("Não, muito obrigado");
    encerrarConversa();
  };
  opcoes.push(naoBtn);

  return opcoes;
}

//função para exibir a resposta do usuário no chat (cria uma div)
function adicionarMensagemUsuario(texto) {
  const mensagens = document.getElementById("chat-messages");
  const userMsg = document.createElement("div");
  userMsg.classList.add("user-message");
  userMsg.textContent = texto;
  mensagens.appendChild(userMsg);
}

//função para exibir os botões do menu inicial
function mostrarMenuInicial() {
  const opcoes = document.getElementById("chat-options");
  opcoes.innerHTML = "";

  const botoes = [
    { texto: "Horários de funcionamento", valor: "horarios" },
    { texto: "Planos e Preços", valor: "planos" },
    { texto: "Quais cidades possuem a academia Green Fit?", valor: "localizacao" },
    { texto: "Personal Trainers", valor: "personal" },
    { texto: "Leis e Normas da academia", valor: "leisnormas" },
    { texto: "Meios de contato", valor: "contato" },
    { texto: "Gostaria de falar com um atendente humano", valor: "humano" }
  ];

  botoes.forEach(btn => {
    const botao = document.createElement("button");
    botao.textContent = btn.texto;
    botao.onclick = () => responder(btn.valor);
    opcoes.appendChild(botao);
  });
}

//função antes de encerrar a conversa (se deseja ou não ir ao menu inicial)
function adicionarOpcoesEncerramento() {
  const mensagens = document.getElementById("chat-messages");
  const opcoes = document.getElementById("chat-options");
  opcoes.innerHTML = "";

  const botMsg = document.createElement("div");
  botMsg.classList.add("bot-message");
  botMsg.textContent = "Posso te ajudar com algo mais?";
  mensagens.appendChild(botMsg);

  const simBtn = document.createElement("button");
  simBtn.textContent = "Sim, quero voltar ao menu";
  simBtn.onclick = () => {
    adicionarMensagemUsuario("Sim, quero voltar ao menu");
    mostrarMenuInicial();
  };

  const naoBtn = document.createElement("button");
  naoBtn.textContent = "Não, muito obrigado";
  naoBtn.onclick = () => {
    adicionarMensagemUsuario("Não, muito obrigado");
    encerrarConversa();
  };

  opcoes.appendChild(simBtn);
  opcoes.appendChild(naoBtn);
}

//função para agradecer e solicitar avaliação antes de encerrar o chat
function encerrarConversa() {
  const mensagens = document.getElementById("chat-messages");
  const opcoes = document.getElementById("chat-options");
  opcoes.innerHTML = "";

  const despedida = document.createElement("div");
  despedida.classList.add("bot-message");
  despedida.textContent = "Foi um prazer te ajudar, até logo!";
  mensagens.appendChild(despedida);

  setTimeout(() => {
    const avaliacao = document.createElement("div");
    avaliacao.classList.add("bot-message");
    avaliacao.textContent = "Como foi nosso atendimento virtual?";
    mensagens.appendChild(avaliacao);

    const estrelas = [1, 2, 3, 4, 5];
    estrelas.forEach(nota => {
      const btn = document.createElement("button");
      btn.textContent = "⭐".repeat(nota);
      btn.onclick = () => {
        adicionarMensagemUsuario("⭐".repeat(nota));
        mostrarAgradecimento();
      };
      opcoes.appendChild(btn);
    });
  }, 500);
}

//função para agradecer o feedback
function mostrarAgradecimento() {
  const mensagens = document.getElementById("chat-messages");
  const opcoes = document.getElementById("chat-options");
  opcoes.innerHTML = "";

  const obrigado = document.createElement("div");
  obrigado.classList.add("bot-message");
  obrigado.textContent = "A Green Fit agradece o seu feedback!";
  mensagens.appendChild(obrigado);
}