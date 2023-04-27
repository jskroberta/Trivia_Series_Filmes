function respPixar() {

    const listaRadios = document.getElementsByName("question1")
    if (listaRadios[0].checked == true) {
        alert ("Parabens!");
    } else {
        alert ("Resposta Incorreta!");
    }
}

function respFriends() {

    const listaRadios = document.getElementsByName("question2")
    if (listaRadios[1].checked == true) {
        alert ("Parabens!");
    } else {
        alert ("Resposta Incorreta!")
    }
}

function respNetflix() {
    const listaRadios  = document.getElementsByName("question3");
    if (listaRadios[2].checked == true) {
        alert ("Parabens!")
    }else {
        alert ("Resposta Incorreta!")
    }
}