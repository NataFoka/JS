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

var snake = {
        length : 3,
        body : [[10,11],[10,12],[10,13]],
        mySnake : function (){
                    for ( let i = 0; i < this.length; i++){
                        let BodySnake = this.body[i];
                        document.getElementById(BodySnake.join()).className = 'cell snake';
                    }
                }
              };




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
  for ( let x = 0; x < SizeX; x++){
    var Xpole = document.createElement('div');
      div2.appendChild(Xpole);
      Xpole.className = 'Stroka';
      for (let y = 0; y < SizeY; y++){
        let Ypole = document.createElement('div');
        Xpole.appendChild(Ypole);
        Ypole.className = 'cell';
        Ypole.id = x+','+y;
      }
    }
    snake.mySnake();
    Tochka(SizeX,SizeY);
}



    function Tochka (SizeX, SizeY){

        let x = Math.round(Math.random() * (SizeX-1));
        let y = Math.round(Math.random() * (SizeY-1));
        var food = document.getElementById(x+','+y);
alert
        if (food.className == 'cell'){
            food.className = "cell food";
        } else { //генерируем новую точку
            Tochka(SizeX, SizeY);
        }
        return food;
    }


    //Обработчик нажатия кнопки
        function keyHandler (event){
          alert(event.keyCode);
            switch (event.keyCode) {
                case 37: //стрелка влево
                alert("лево");
                   
                case 39: //стрелка вправо
                
                case 38: //стрелка вверх
                
                case 40: //стрелка вниз
                   
                default :
                    return;
            }
        }


window.addEventListener('keydown', keyHandler);

setInterval(func, 1000);

function func() {
  alert( 'Привет' );
}
