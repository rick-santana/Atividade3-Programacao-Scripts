let listaLogins = JSON.parse(localStorage.getItem("historicoLogin"))
let i
let lista = [];
let registro;

  for(i = 0; i < listaLogins.length; i++){
  // let data = listaLogins.data;
  registro = `<li class="logs">Usuário: <span>"${listaLogins[i].email}"</span> fez login em: <span>"${listaLogins[i].data}"</span></li>`;

  lista.push(registro);

  // console.log(`Usuário: '${listaLogins[i].email}' fez login em: '${listaLogins[i].data}'`);

  document.getElementById("ul-lista").innerHTML = lista;

}

