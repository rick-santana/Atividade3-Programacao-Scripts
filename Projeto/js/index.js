let nomeLogin;
let emailLogin;
let historicoLoginArray = [];


function loginUsuario() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  //let usuariosValida = usuarios;
  //let usuariosCadastrados = pegaUsuario();
  //recupera o array de obj, convertendo de "string" para array de obj novamente
  let usuariosCadastrados = JSON.parse(localStorage.getItem("usuariosSistema"));

  let i = 0;
  let emailArray;
  let senhaArray;

  for(i = 0; i < usuariosCadastrados.length; i++){
    emailArray = usuariosCadastrados[i].email;
    senhaArray = usuariosCadastrados[i].senha;

    if (email == emailArray && senha == senhaArray) {
      alert(`Bem-vindo(a) ${usuariosCadastrados[i].nome}`);
      nomeLogin = usuariosCadastrados[i].nome;
      emailLogin = usuariosCadastrados[i].email;
      usuario();
      historicoLogin();
      
      //redireciona o usuario para a pagina de "Boas-Vindas";
      location.href = "./boasVindas.html";

    }else if(email !== emailArray && senha !== senhaArray){
      alert(`E-mail ou senha inválidos`)
    }
   
  }//fim do for



}//fim funcao validaUsuario

function validarUsuario(){
  
}

function usuario(){
  localStorage.setItem("nomeUsuarioLogin",nomeLogin);
  localStorage.setItem("emailUsuarioLogin",emailLogin);
}

function historicoLogin(){

  let Logins = guardaHistorico();

    const data = new Date();
    const formatador = Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    });
    
    // .innerHTML = formatador.format(variavel data)

    let emailUsuario = localStorage.getItem("emailUsuarioLogin");
    console.log(`email-usuario ${emailUsuario}`)
    let historicoLoginObj = {
      email: emailUsuario,
      data: formatador.format(data),
    }

    Logins.push(historicoLoginObj);

    localStorage.setItem("historicoLogin", JSON.stringify(Logins))

    //fim If

}//fim funçao

function guardaHistorico() {

  let historicoLogin = historicoLoginArray;

  if (localStorage){
    //caso o "localStorage" estiver vazio, acrescente o array de obj convertido em string no localStorage "historicoLogin"
    if (localStorage.getItem("historicoLogin") == null){
        localStorage.setItem("historicoLogin", JSON.stringify(historicoLogin));
    }else{
      //caso o "localStorage" NÃO estiver vazio, recupere o a string e converta para um "array de objetos" novamente e acrescente ao array "historicoLogin"
      historicoLogin = JSON.parse(localStorage.getItem("historicoLogin"));
    }
  }

  //retorna o array "historicoLogin"
  return historicoLogin;
  
}