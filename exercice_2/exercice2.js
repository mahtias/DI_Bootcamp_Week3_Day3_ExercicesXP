/*
Copiez le code ci-dessus dans un fichier HTML structuré.
Dans votre fichier Javascript, utilisez setInterval pour déplacer le <div id="animate">
vers la droite du <div id="container">, lorsque le bouton est cliqué.

Le <div id="animate">doit se déplacer 1px vers la droite toutes les millisecondes, 
jusqu'à ce qu'il atteigne la fin du <div id="container">.

Astuce : utilisez clearInterval-la dès que la boîte atteint l'extrémité droite du conteneur
Astuce : regardez la démonstration dans le Course Noted nommé JS Functions
Dans votre fichier Javascript, utilisez setIntervalpour déplacer le <div id="animate">
vers la droite du <div id="container">, lorsque le bouton est cliqué.


*/
function myMove() {
    
    setInterval(start)
}

let timeMoov = 0
 function start() {
    let moov = document.getElementById("animate")
    timeMoov += 1
    moov.style.left = timeMoov + "px"
    
}


/*+++++++++++++++++++++++++++++++ OTHER POSSIBILITY ++++++++++++++++++++++++++++++*/

/*
let moov = document.getElementById("animate")


let timeMoov = 0
let i = ""
let start = setInterval(function() {
    timeMoov += 1
    moov.style.left = timeMoov + "px"
    // clearInterval(i)
}, 1000)


function myMove() {
    i = setInterval(start)
}

*/