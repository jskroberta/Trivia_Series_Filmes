function respPixar() {

    const listaRadios = document.getElementsByName("question1")
    if (listaRadios[0].checked == true) {
        alert ("Parabens Genio!");
    } else {
        alert ("Que burro, da 0 pra ele!!");
    }
}

function respFriends() {

    const listaRadios = document.getElementsByName("question2")
    if (listaRadios[1].checked == true) {
        alert ("Parabens Monstrão");
    } else {
        alert ("Serio mesmo??")
    }
}

function respNetflix() {
    const listaRadios  = document.getElementsByName("question3");
    if (listaRadios[2].checked == true) {
        alert ("Até que enfim em!")
    }else {
        alert ("Sem comentarios pra você!")
    }
}