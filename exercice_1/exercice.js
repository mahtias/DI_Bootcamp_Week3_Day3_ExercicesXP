/*
Première Partie
Dans votre fichier Javascript, à l'aide de setTimeout, appelez une fonction après 2 secondes.
La fonction alertera "Hello World".
*/
setTimeout(telMe, 2000)
setTimeout(addPara, 2000)

function telMe() {
    alert("Hello world")
}

/*
Partie II
Dans votre fichier Javascript, à l'aide de setTimeout, appelez une fonction après 2 secondes.
La fonction ajoutera un nouveau paragraphe <p>Hello World</p> au fichier <div id="container">.
*/
function addPara(){
    let newPara = document.createElement("p")
    newPara.textContent = "Hello World"
    
    let elemcontainer = document.getElementById("container")
    elemcontainer.appendChild(newPara)
    
}
/*
Dans votre fichier Javascript, à l'aide de setInterval, appelez une fonction toutes les 2 secondes.
La fonction ajoutera un nouveau paragraphe <p>Hello World</p>au fichier <div id="container">.
L'intervalle sera effacé (c'est-à-dire clearInterval), lorsque l'utilisateur cliquera sur le bouton.
Au lieu de cliquer sur le bouton, l'intervalle sera effacé (c'est-à-dire clearInterval) dès qu'il y
aura 5 paragraphes à l'intérieur du <div id="container">.
*/
let clearPara = setInterval(addPara, 2000)
elemcontainer = document.getElementById("container")
let stopTelMe = document.getElementById("clear")
stopTelMe.addEventListener("click",stopEvent)

function stopEvent() {
    clearInterval(clearPara)
}

let conteur = 0
function addPara() {
conteur++ // pour incrementer activer le compteur
    if (conteur <= 5 ) {
    let newPara1 = document.createElement("p")
    newPara1.textContent = "Hello World!"
elemcontainer.appendChild(newPara1)
    }
    else{
        clearInterval(clearPara)
    }
}

