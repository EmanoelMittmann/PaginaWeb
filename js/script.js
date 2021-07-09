function botao(){
    var val=document.querySelector('input#validacao')
    var msg=document.querySelector('textarea#mensagem')

    if(val.value == ""){
        alert("Email não informado");   
        return
    }
    if(msg.value == ""){
        alert("Caixa de mensagem vazia");
        return
    }
    else{
        alert("ENVIADO");
    }

}
