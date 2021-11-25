
let usuarios = [];

function cadastrar(){
  //valores dos inputs de "senha" e "confirma senha" armazenado em variaveis
  let senha = document.getElementById("senha").value;
  let confirmSenha = document.getElementById("confirmSenha").value;

  //se os valores das variaveis for igual, faça...
  if(senha == confirmSenha){

    //recupera o array ja existente e armazena na variavel.
    let usuariosCadastrados = pegaUsuario();

    //cria um obj "Usuario" com os valores dos inputs
    let Usuario = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      senha: document.getElementById("senha").value,
      confirmSenha: document.getElementById("confirmSenha").value,
    }
    //pega o obj com seus valores e acrescenta no array
    usuariosCadastrados.push(Usuario);

    //converte o array de obj em "string" para inserir no "localStorage"
    localStorage.setItem("usuariosSistema", JSON.stringify(usuariosCadastrados));

    //função que limpa o campo dos menus, passando os valores manualmente como parametro
    limpaCampo("nome","email","senha","confirmSenha");

    //recupera o array de obj, convertendo de "string" para array de ibj novamente
    let listaUsuarioObj = JSON.parse(localStorage.getItem("usuariosSistema"));

    //mensagem para o usuario
    alert(`Parabéns "${Usuario.nome}" Seu cadastrado foi efetuado com sucesso`);

    //redireciona o usuario para a pagina de login;
    location.href = "./index.html";

  }else{
    //mensagem para o usuario
    alert(`As senhas estão diferentes!`)
  }


}

function pegaUsuario(){
  //recupera o array de usuarios
  let usuariosTestar = usuarios;

  //verifica se o "localStorage" existe
  if (localStorage){
    //caso o "localStorage" estiver vazio, acrescente o array de obj convertido em string no localStorage "usuariosSistema"
    if (localStorage.getItem("usuariosSistema") == null){
        localStorage.setItem("usuariosSistema", JSON.stringify(usuariosTestar));
    }else{
      //caso o "localStorage" NÃO estiver vazio, recupere o a string e converta para um "array de objetos" novamente e acrescente ao array "usuariosTestar"
      usuariosTestar = JSON.parse(localStorage.getItem("usuariosSistema"));
    }
  }

  //retorna o array "usuariosTestar"
  return usuariosTestar;
}

function limpaCampo(idNome, IdEmail, IdSenha, IdConfSenha){
  // Recebe o "Id" de cada "input" passado como parametro e limpa o campo.
  document.getElementById(idNome).value=''; 
  document.getElementById(IdEmail).value=''; 
  document.getElementById(IdSenha).value=''; 
  document.getElementById(IdConfSenha).value='';
}