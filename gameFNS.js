document.body.style.background = "url('abstract-1264071_960_720.png') no-repeat ";
document.body.style.padding = "20px 10px 10px 10px";

//Оформление и игры
var div = document.createElement('div');
var div2 = document.createElement('div');

var button1=document.createElement("button");
var button2=document.createElement("button");

div.innerHTML = "<strong>Игра змейка.</strong><br>";
div.style="width: 400px;  color: #6B8E23; height:70px; display:inline-block; vertical-align: top; margin: 0px 80px 0px 10px; font-size: 24px; text-align: center; padding: 10px;";
div2.style="background: url('209.jpg'); width: 400px; border:2px solid #556B2F;  height:300px;   display:inline-block; vertical-align: middle";

button1.innerHTML = "Начало игры";
button1.className = "button";
button1.onclick = Start;
div.appendChild(button1);

button2.innerHTML = "Конец игры";
button2.className = "button";
div.appendChild(button2);

document.body.appendChild(div);
document.body.appendChild(div2);

function Start()
{
  alert("Не работает пока!");
}


//Функционал игры

var SdvigPriMove = [
    [0,1], //вправо 0
    [1,0], //вниз  1
    [0,-1], //влево 2
    [-1,0]]; //вверх 3

var napravlenie = 0;
var SizeX = 20;
var SizeY = 25;
var snake = {
        length : 3,
        body : [[10,0],[10,1],[10,2]],
        mySnake : function (){
                    for ( let i = 0; i < this.length; i++){
                        let BodySnake = this.body[i];
                        document.getElementById(BodySnake.join()).className = 'cell snake';
                    }
                },
        move : function (){
                 var NewSnake = this.body[this.length-1].map(function(value, index){
                   return value + SdvigPriMove[napravlenie][index]
                 });
                 Game(NewSnake, this.body);

              }
  };

GamePlane(SizeX,SizeY);
window.addEventListener('keydown', key);
GoGame = setInterval(func, 100);

function Game (NewSnake, body) {
  var Sled = document.getElementById(NewSnake.join());

  //просто поле рисуем змею стираем хвост
  if ( Sled != null && Sled.className == 'cell' ){
    var DellSnake = body.shift();
    body.push(NewSnake);
    document.getElementById(DellSnake.join()).className = 'cell';
    document.getElementById(NewSnake.join()).className = 'cell snake';
  }
  else { //точка
    if ( Sled != null && Sled.className == 'cell food'){
      snake.length++;
      body.push(NewSnake);
      Sled.className = 'cell snake';
      Tochka(SizeX, SizeY);
    }
    else {
      if ( Sled == null  || Sled.className == 'cell snake'){
        clearInterval(GoGame);
        alert('Вы проиграли! Ваш счет: ' + (snake.length-3) + '. Нажмите кнопку «Сбросить» для начала новой игры!');
      }
    }
  }
}

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
  if (food.className == 'cell'){
    food.className = "cell food";
    }
  else { //генерируем новую точку
    Tochka(SizeX, SizeY);
  }
  return food;
}

    //Обработчик нажатия кнопки
function key (event){
  switch (event.keyCode) {
  case 37: //лево
    if (napravlenie == 0) {
      snake.body.reverse();
    }
    napravlenie = 2;
    break;
  case 39: //право
    if (napravlenie == 2) {
      snake.body.reverse();
    }
    napravlenie = 0;
    break;
  case 38: //верх
    if (napravlenie == 1) {
      snake.body.reverse();
    }
    napravlenie = 3;
    break;
  case 40: //низ
    if (napravlenie == 3) {
      snake.body.reverse();
    }
    napravlenie = 1;
    break;
  default :
      return;
  }
}

function func() {
  snake.move();
}
