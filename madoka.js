var verificação = 'a';
var contador = 2;
function resposta() {
     var responder = prompt('Digite sua resposta');
     while (contador >= 1) {  
    if (responder == verificação) {
        window.location.assign ("madokafasedois.index.html");
        break;
    } else { 
        alert ('Resposta incorreta');
        contador--;
        responder = prompt('Digite sua resposta');
        window.location.assign("file:///C:/Users/Ebanx/OneDrive/%C3%81rea%20de%20Trabalho/Projeto/gameover.index.html");
    }
}
        
    } 

var verificação2 = "c";
var contador2 = 3;
function resposta2() {
    var resposta2 = prompt ('Digite sua resposta');
    while (contador2 >= 1) {  
    if (resposta2 == verificação2) {
        window.location.assign("madokafasetres.index.html");
        break;
    } else {
        alert ('Resposta incorreta');
        contador2--;
        resposta2 = prompt ('Digite sua resposta');
        window.location.assign("file:///C:/Users/Ebanx/OneDrive/%C3%81rea%20de%20Trabalho/Projeto/gameover.index.html");
    }
}
}    

var verificação3 = "b";
var contador3 = 3;
function third() {
    var resposta3 = prompt ('Digite sua resposta');
    while (contador3 >= 1) {  
    if (resposta3 == verificação3) {
        window.location.assign("file:///C:/Users/Ebanx/OneDrive/%C3%81rea%20de%20Trabalho/Projeto/vitoria.index.html");
        break;
    } else {
        alert ('Resposta incorreta');
        contador3--;
        resposta3 = prompt ('Digite sua resposta');
        window.location.assign("file:///C:/Users/Ebanx/OneDrive/%C3%81rea%20de%20Trabalho/Projeto/gameover.index.html");
    }
}
}