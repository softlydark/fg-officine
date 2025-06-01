// Exibe uma mensagem no console ao carregar o site
console.log("Bem-vindo à FG Automotiva!");

// Atualiza automaticamente o ano no rodapé quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// Alterna a visibilidade da lista de serviços
function toggleServices() {
  const list = document.getElementById("servicesList");
  if (list) {
    list.style.display = (list.style.display === "none" || list.style.display === "") ? "block" : "none";
  }
}

// Alerta ao clicar no botão do WhatsApp
function contactAlert() {
  alert("Você será redirecionado para o WhatsApp da FG Automotiva.");
}
