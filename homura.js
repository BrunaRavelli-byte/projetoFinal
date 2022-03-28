var verificação = 'a';
var contador = 2;
function pergunta1() {
     var responder = prompt('Digite sua resposta');
     while (contador >= 1) {  
    if (responder == verificação) {
        window.location.assign ("homurafasedois.index.html");
        break;
    } else { 
        alert ('Resposta incorreta');
        contador--;
        responder = prompt('Digite sua resposta');
        window.location.assign("file:///C:/Users/Ebanx/OneDrive/%C3%81rea%20de%20Trabalho/Projeto%20final/gameover.index.html");
    }
}
}

var verificação2 = 'a';
var contador1 = 2;
function pergunta2() {
     var responder2 = prompt('Digite sua resposta');
     while (contador1 >= 1) {  
    if (responder2 == verificação2) {
        window.location.assign ("homurafasetres.index.html");
        break;
    } else { 
        alert ('Resposta incorreta');
        contador--;
        responder = prompt('Digite sua resposta');
        window.location.assign("file:///C:/Users/Ebanx/OneDrive/%C3%81rea%20de%20Trabalho/Projeto%20final/gameover.index.html");
    }
}
}

var verificação3 = 'b';
var contador3 = 2;
function pergunta3() {
     var responder3 = prompt('Digite sua resposta');
     while (contador3 >= 1) {  
    if (responder3 == verificação3) {
        window.location.assign ("file:///C:/Users/Ebanx/OneDrive/%C3%81rea%20de%20Trabalho/Projeto%20final/vitoria.index.html");
        break;
    } else { 
        alert ('Resposta incorreta');
        contador--;
        responder = prompt('Digite sua resposta');
        window.location.assign("file:///C:/Users/Ebanx/OneDrive/%C3%81rea%20de%20Trabalho/Projeto%20final/gameover.index.html");
    }
}
}
