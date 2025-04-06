function iniciarChat() {
    const inicio = document.getElementById("inicio-container");
    const chat = document.getElementById("chat-container");
  
    // animação suave
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
    alert("Você escolheu: " + opcao);
  }