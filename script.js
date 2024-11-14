// Seleção de elementos
const acquireBtn = document.getElementById("acquireBtn");
const modal = document.getElementById("modal");
const counterElem = document.getElementById("counter");

let counter = 70;

// Função que inicia o contador e altera o texto do botão
acquireBtn.addEventListener("click", function() {
  if (acquireBtn.disabled) return; // Impede múltiplos cliques enquanto o botão estiver desabilitado

  modal.style.display = "block"; // Mostra o modal
  acquireBtn.disabled = true; // Desabilita o botão para impedir cliques enquanto a contagem ocorre
  const interval = setInterval(function() {
    counter--;  // Decrementa o contador
    counterElem.textContent = counter; // Atualiza o contador na tela

    // Quando a contagem chega a 0
    if (counter <= 0) {
      clearInterval(interval); // Para o contador
      acquireBtn.textContent = "Download Cheat"; // Altera o texto do botão
      acquireBtn.disabled = false; // Habilita o botão novamente
      acquireBtn.addEventListener("click", function() {
        window.location.href = "https://drive.proton.me/urls/3ZVBA769AM#oT9u6uuUJwA1"; // Substitua pelo link real de download
      });
    }
  }, 1000);
});

// Prevenir ações de copiar e colar
document.addEventListener("contextmenu", function(e) {
  e.preventDefault(); // Bloqueia o menu de contexto (botão direito)
});

document.addEventListener("keydown", function(e) {
  if (e.key === "c" && (e.ctrlKey || e.metaKey)) {
    e.preventDefault(); // Bloqueia CTRL + C
  }
});



