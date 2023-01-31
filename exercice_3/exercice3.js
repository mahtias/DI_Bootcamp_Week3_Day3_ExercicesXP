
/*
Copiez le code ci - dessus dans un fichier HTML structuré.
Dans votre fichier Javascript, ajoutez la fonctionnalité qui vous permettra de faire glisser
le fichier boxet de le déposer dans le fichier target. 
Consultez les notes de cours nommées animations DOM.
*/

// let elemBox = document.getElementById("box")
// elemBox.setAttribute("draggable","true")
// elemBox.addEventListener("dragstart", function (event) {
//     console.log("drag" + "X: " + event.clientX + "Y: " + event.clientY);
// })



let element = document.getElementById("box")
element.setAttribute('draggable','true');
element.addEventListener("dragstart", function(event) {
  console.log ("drag " +  "X: " + event.clientX  + " Y: " +  event.clientY);
});

element.addEventListener("dragend", function(event) {
    event.target.style.backgroundColor = "lightgreen";
    let _x = event.clientX;
    let _y = event.clientY;
    console.log(event)
    event.target.style.left = _x + "px";
    event.target.style.top = _y + "px";
    console.log ("dragend" + "X: " + event.clientX  + " Y: " +  event.clientY );
  });