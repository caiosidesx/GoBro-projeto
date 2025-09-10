// USUÁRIO IRÁ CLICAR NO BOTÃO E SERÁ DIRECIONADO AO WHATSAPP DA LOJA //
/*
    - COMO DIRECIONAR O USUÁRIO AO WHATSAPP (PASSO A PASSO)
    1 - CRIAR UMA FUNÇÃO COM O NOME "abrirWhatsapp()"
    2 - DENTRO DESSA FUNÇÃO, PEGO OS DADOS QUE PRECISO E GUARDO ESSAS INFORMAÇÕES DENTRO DE UMA VARIÁVEL
    - let numero = number (numero da loja)
    - let mensagem = "string" (Mensagem de início de conversa)
    - let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem)
    3 - PARA RODAR O COMANDO DA FUNÇÃO BASTA: 
        - window.open(url, "_blank")
*/
function abrirWhatsapp() {
  let numero = 5579998524174;
  let mensagem = "Olá, quero saber mais sobre o atendimento de vocês!";
  let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);

  window.open(url, "_blank");
}
/*PEGAR OS DADOS DO USUÁRIO (INSCRIÇÃO PARA VAGA NA LOJA) VALIDAÇÕES DE USUÁRIO*/
const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    let enviarForm = true
    
  if (!nome.value) {
    enviarForm = false
  }

  if (!email.value) {
    enviarForm = false
  }

  if (!senha.value) {
    enviarForm = false
  }

  if(!enviarForm){
    e.preventDefault();
  }

});