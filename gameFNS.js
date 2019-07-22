document.body.style.background = "url('abstract-1264071_960_720.png') no-repeat ";
document.body.style.padding = "20px 10px 10px 10px";
//document.body.style.backgroundColor = 'red';



var parentElem = document.body;
var div = document.createElement('div');
var div2 = document.createElement('div');
var div3 = document.createElement('div');

var textElem = document.createTextNode('Тут был я');
var button=document.createElement("button");





//div.className = "alert alert-success";
div.innerHTML = "<strong>Игра змейка.</strong>";
//div2.innerHTML = "<strong>Ура!</strong> ";

//const text = document.createTextNode( "Mybutton" ); // создаем текстовое содержимое
//  button.appendChild( text ); // добавляем текстовое содержимое элементу <button>
//button.appendChild(document.createTextNode("хххззз"));

//<button id="easy" onclick="EasyStart()">Простой</button>
//button.id

div.style="width: 400px; color: #6B8E23; height:100px; display:inline-block; vertical-align: top; margin: 0px 80px 0px 10px; font-size: 24px; text-align: center";
div2.style="background: url('209.jpg'); width: 400px; border:2px solid #556B2F;  height:300px; padding: 12px 0px 12px 12px;  display:inline-block; vertical-align: middle";
div3.style="background: red; width: 400px; border:1px solid #000000;  height:300px; padding: 12px 0px 12px 12px; display:inline-block; vertical-align: middle";

button.innerHTML = "twxt";

parentElem.appendChild(div);
parentElem.appendChild(div2);
//parentElem.appendChild(div3);
//div2.appendChild(button);
