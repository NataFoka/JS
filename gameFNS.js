document.body.style.background = "url('abstract-1264071_960_720.png') no-repeat ";
document.body.style.padding = "20px 10px 10px 10px";
//document.body.style.backgroundColor = 'red';



var parentElem = document.body;
div = document.createElement('div');
var div2 = document.createElement('div');
var div3 = document.createElement('div');

var textElem = document.createTextNode('Тут был я');
var button1=document.createElement("button");
var button2=document.createElement("button");

div.innerHTML = "<strong>Игра змейка.</strong><br>";


div.style="width: 400px;  color: #6B8E23; height:70px; display:inline-block; vertical-align: top; margin: 0px 80px 0px 10px; font-size: 24px; text-align: center; padding: 10px;";
div2.style="background: url('209.jpg'); width: 400px; border:2px solid #556B2F;  height:300px;   display:inline-block; vertical-align: middle";
div3.style="background: red; width: 400px; border:1px solid #000000;  height:300px; padding: 12px 0px 12px 12px; display:inline-block; vertical-align: middle";

button1.innerHTML = "Начало игры";
button1.className = "button";

div.appendChild(button1);
button1.onclick = Start;
button2.innerHTML = "Конец игры";
button2.className = "button";

document.body.appendChild(div);
parentElem.appendChild(div2);
div.appendChild(button2);


function Start()
{
  alert("Не работает пока!");
}

GamePlane(20,25);

function GamePlane (SizeX, SizeY){
  for ( var x = 0; x < SizeX; x++){
    var Xpole = document.createElement('div');
      div2.appendChild(Xpole);
      Xpole.className = 'Stroka';
      for (var y = 0; y < SizeY; y++){
        var Ypole = document.createElement('div');
        Xpole.appendChild(Ypole);
        Ypole.className = 'cell';
        Ypole.id = x+','+y;
      }
    }
}
