document.addEventListener("DOMContentLoaded", function () {
    // Balão de Mensagem
    const messageBalloon = document.querySelector(".message-balloon");
  
    // Mostrar o balão inicialmente
    showBalloon();
  
    // Exibir continuamente o balão quando o mouse está sobre o botão de WhatsApp
    document.querySelector(".whatsapp-container").addEventListener("mouseover", function () {
      showBalloon();
    });
  
    // Função para exibir o balão
    function showBalloon() {
      messageBalloon.style.display = "block";
      // Ocultar o balão após 4 segundos
      setTimeout(() => {
        messageBalloon.style.display = "none";
      }, 4000);
    }
  
    // Exibir novamente o balão a cada 20 segundos
    setInterval(() => {
      showBalloon();
    }, 20000); // Repetir a cada 20 segundos
  });
  