var dropTarget = document.querySelector(".wrapper");
var draggables = document.querySelectorAll(".word");

var draggable;

var offsetx = null, offsety = null;
   
function drag(target, event) {
   if (!target.draggable) return;
   offsetx = target.offsetLeft-event.clientX;
   offsety = target.offsetTop-event.clientY;
   event.dataTransfer.setData('Text',target.id);
}

function drop(target, event) {
   var id = event.dataTransfer.getData('Text');
   if (!id) return;
   var e = document.getElementById(id);
   e.style.position = "absolute";
   e.style.left = (event.clientX+offsetx)+"px";
   e.style.top = (event.clientY+offsety)+"px";        
   event.preventDefault();
}

for(let i = 0; i < draggables.length; i++){
   draggables[i].addEventListener("dragstart", function (ev){
      ev.dataTransfer.setData("srcId", ev.target.id);

      draggable = ev.target;

      $(draggable).addClass("grey"); 
      drag(draggable, event);

   });
}

dropTarget.addEventListener("dragover", function (ev){
   ev.preventDefault();
   $(draggable).addClass("grey"); 
});

dropTarget.addEventListener("drop", function (ev){
   ev.preventDefault();
   let target = ev.target;
   let srcId = ev.dataTransfer.getData("srcId");
   $(draggable).removeClass("grey");
   // console.log("where are you", srcId);

let droppable = target.classList.contains("circle");   
let returndrop = target.classList.contains("box1");

if (returndrop){
   target.appendChild(document.getElementById(srcId));
   $(draggable).removeClass("green");
   drop(draggable, event);
}

if (droppable){
   target.appendChild(document.getElementById(srcId));
   $(draggable).addClass("green");
   drop(draggable, event);
}

});