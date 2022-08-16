var player
var numJog = 0
var anulado = false;
var bot1
var bot

function escolhaPlayer1(){//definir o player que começa

    if(document.querySelector('input[name="x"]:checked').value == "Rubem"){
        bot1 = "Rubem";
    }else if(document.querySelector('input[name="x"]:checked').value == "Galo"){
        bot1 = "Galo";
    }else if(document.querySelector('input[name="x"]:checked').value == "Well"){
        bot1 = "Well";
    }else if(document.querySelector('input[name="x"]:checked').value == "Plinio"){
        bot1 = "Plinio";
}
player = bot1;
}

function escolhaPlayer2(){//definir o player que começa

    if(document.querySelector('input[name="y"]:checked').value == "Ferlanio"){
        bot = "Ferlanio";
    }else if(document.querySelector('input[name="y"]:checked').value == "Raposao"){
        bot = "Raposao";
    }else if(document.querySelector('input[name="y"]:checked').value == "Claudio"){
        bot = "Claudio";
    }else if(document.querySelector('input[name="y"]:checked').value == "Hugao"){
        bot = "Hugao";
}
}



function telaInicial(){

    document.getElementById("inicio").style.display = "none";
    document.getElementById("jogo").style.display = "table";
}

function telaPrincipal(){
    document.getElementById("inicio").style.display = "table";
    document.getElementById("jogo").style.display = "none";
}


function checkjogo(id) {
    var opt = verificaSrc(id)
    var cpu = document.getElementById('cpu').checked


    if(anulado) {
        return false;
    }
    
    if (opt == "transp.png") {


        if(cpu && player == bot){
            setTimeout(() => {checkjogo(jogoDoPcSom())}, 100)
        }


        document.getElementById(id).src = "./img/" + player + ".png"

       
    if (winchek(player == "Plinio" || player == "Well" || player == "Galo" || player == "Rubem")) {
        if(player == "Plinio" || player == "Well" || player == "Galo" || player == "Rubem"){
        anulado = true;
        document.getElementById("victory").innerHTML = "<marquee><h2> Os Devs Venceram !!! </h2></marquee>";
        setTimeout(() => {
            document.getElementById('potencia').play();
        }, 2000); 
        // setTimeout(function(){location.reload();}, 8000);
        return false;
    }      

        else if (winchek() && bot == "Hugao" || bot == "Claudio" || bot == "Ferlanio" || bot == "Raposao" ) {
        anulado = true;
        document.getElementById("victory").innerHTML = "<marquee><h2> O time Redes Venceu !!! </h2></marquee>";
        setTimeout(() => {
            document.getElementById('risada').play();
        }, 2000); 
        // setTimeout(function(){location.reload();}, 8000);
        return false;
                    }   
                }

    numJog++
    if (numJog >= 9) {

        anulado = true;
        document.getElementById("victory").innerHTML = "<marquee><h2> Empate Técnico!!! </h2></marquee>";
        setTimeout(() => {
            document.getElementById('brincadeira').play();
        }, 2000); 
        // setTimeout(function(){location.reload();}, 8000);
        return false;
                      }

        if (player == bot) {
            player = bot1;
        } else {
            player = bot;
               }

                            }
       
if (cpu && player == bot) {
           setTimeout(() => {checkjogo(jogoDoPc())}, 1000)
                                  }


 var teste = cpu && bot == "Hugao" || cpu && bot == "Claudio" || cpu && bot == "Ferlanio" || cpu && bot == "Raposao";

        // if (teste && opt == "transp.png"){
        //     setTimeout(() => {checkjogo(jogoDoPcSom())}, 1500)
        // }
   

    function jogoDoPc() {
        
        var pos = 'c' + Math.floor((Math.random() * 9) + 1)
    return pos;
    }
    function jogoDoPcSom() {
        var ef = new Audio("audio/uepa.mp3");
    return ef.play();
    }

}


function verificaSrc(id) {
    var file = document.getElementById(id).src
    return file.substring(file.length - 10, file.length)
}
              

function winchek() {
    if (((verificaSrc('c1') == verificaSrc('c2')) && (verificaSrc('c1') == verificaSrc('c3')) && verificaSrc('c1') != "transp.png") ||
    ((verificaSrc('c4') == verificaSrc('c5')) && (verificaSrc('c4') == verificaSrc('c6')) && verificaSrc('c4') != "transp.png") ||
    ((verificaSrc('c7') == verificaSrc('c8')) && (verificaSrc('c7') == verificaSrc('c9')) && verificaSrc('c7') != "transp.png") ||
    ((verificaSrc('c1') == verificaSrc('c4')) && (verificaSrc('c1') == verificaSrc('c7')) && verificaSrc('c1') != "transp.png") ||
    ((verificaSrc('c2') == verificaSrc('c5')) && (verificaSrc('c2') == verificaSrc('c8')) && verificaSrc('c2') != "transp.png") ||
    ((verificaSrc('c3') == verificaSrc('c6')) && (verificaSrc('c3') == verificaSrc('c9')) && verificaSrc('c3') != "transp.png") ||
    ((verificaSrc('c1') == verificaSrc('c5')) && (verificaSrc('c1') == verificaSrc('c9')) && verificaSrc('c1') != "transp.png") ||
    ((verificaSrc('c3') == verificaSrc('c5')) && (verificaSrc('c3') == verificaSrc('c7')) && verificaSrc('c3') != "transp.png")) {
        return true
    }
    return false
}  
