// Espera até que o DOM (estrutura HTML) esteja completamente carregado
document.addEventListener('DOMContentLoaded', () => {

  // Obtém referências aos elementos relevantes do HTML usando seus IDs
  const citySelect = document.getElementById('citySelect');
  const otherCityInput = document.getElementById('otherCityInput');
  const nextCityButton = document.getElementById('nextCity');
  const secondStep = document.getElementById('secondStep');
  const subjectSelect = document.getElementById('subjectSelect');
  const otherSubjectInput = document.getElementById('otherSubjectInput');
  const submitButton = document.getElementById('submit');

  // Adiciona um evento de clique ao botão "Próxima Etapa"
  nextCityButton.addEventListener('click', () => {
    // Verifica se a opção selecionada é "Outra cidade"
    if (citySelect.value === 'Outra cidade') {
      // Exibe o campo de input para digitar outra cidade
      otherCityInput.style.display = 'block';
    } else {
      // Oculta o campo de input da cidade e exibe a segunda etapa
      otherCityInput.style.display = 'none';
      secondStep.style.display = 'block';
    }
  });

  // Adiciona um evento de clique ao botão "Enviar para o WhatsApp"
  submitButton.addEventListener('click', () => {
    // Obtém o valor da cidade selecionada
    let chosenCity = citySelect.value;
    // Verifica se o campo de input de cidade personalizada está visível
    if (otherCityInput.style.display === 'block') {
      // Obtém o valor digitado pelo usuário
      chosenCity = document.getElementById('otherCity').value;
    }

    // Obtém o valor do assunto selecionado
    let chosenSubject = subjectSelect.value;
    // Verifica se o campo de input de assunto personalizado está visível
    if (otherSubjectInput.style.display === 'block') {
      // Obtém o valor digitado pelo usuário
      chosenSubject = document.getElementById('otherSubject').value;
    }

    // Cria a mensagem a ser enviada, codificando os valores da cidade e do assunto
    const message = `Olá, estou procurando um Advogado na cidade ${chosenCity} sobre o caso ${chosenSubject}.`;
    // Monta a URL do WhatsApp com a mensagem
    const whatsappURL = `https://api.whatsapp.com/message/5Y2ECVE27BMBI1?autoload=1&app_absent=0=${message}`;
    // Abre uma nova janela do navegador para a URL do WhatsApp
    window.open(whatsappURL, '_blank');
  });

  // Adiciona um evento de mudança ao seletor de assunto
  subjectSelect.addEventListener('change', () => {
    // Verifica se a opção selecionada é "Outro assunto"
    if (subjectSelect.value === 'Outro assunto') {
      // Exibe o campo de input para digitar outro assunto
      otherSubjectInput.style.display = 'block';
    } else {
      // Oculta o campo de input do assunto
      otherSubjectInput.style.display = 'none';
    }
  });
});
