
//pega a div com o id "div-boasVindas" e guarda na variavel "campoBoasVindas"
let campoBoasVindas = document.getElementById('div-boasVindas');

//recupera o nome do usuario guardado no localStorage e armazena na variavel nomeUsuarioLogin
let nomeUsuarioLogin = localStorage.getItem("nomeUsuarioLogin");

//insere uma mensagem de boas vindas com o nome do usuario na div "div-boasVindas"
campoBoasVindas.innerHTML = `<h1> Bem-vindo(a) ${nomeUsuarioLogin} </h1>`;