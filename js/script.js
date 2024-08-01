//Validação de Login

function login(){
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if( usuario == 'admin' && senha == '123456'){
        window.location  = "index.html"
        logado = 1;
 }

 if(logado == 0){
    alert("Acesso Negado. Dados incorretos");

 }

}

//Ativar alert no botão cadastrar

function cadastro() {
    alert("Cadastro feito com sucesso!");
    window.location.href = 'index.html';

}
