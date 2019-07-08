
let Arg1;
let Arg2;
let Dev;


document.writeln( "<H1>История вычислений</H1>" );

let real = false;
while ( real == false ) {
Arg1 = prompt("Введите первый аргумент", "");
  if (!isNaN(+Arg1)) { real = true;
  }
  else {
    confirm(Arg1 + " - не является числом, введите число, двобная часть отделяется точкой");
  }
};

real = false;
while ( real == false ) {
Dev = prompt("Введите действие (+,-,/,*)", "");

  if (Dev=="+" ||Dev=="-" ||Dev=="/"||Dev=="*" ) { real = true;

  }
  else {
    confirm(Dev + " - не корректное действие введите (+,-,/,*)");
  }
};


real = false;
while ( real == false ) {
Arg2 = prompt("Введите второй аргумент", "");
  if (!isNaN(+Arg2)) { real = true;
  }
  else {
    confirm(Arg2 + " - не является числом, введите число, двобная часть отделяется точкой");
  }
};

if (real ==true) {
  returnMessage(Arg1,Arg2,Dev);
  document.writeln( "Вы вели: " + Arg1 + Dev + Arg2 + " = " +result);
}



function returnMessage(Arg1,Arg2,Dev) {
result = 0;
  switch (Dev) {
    case "+":
    result = +Arg1 + +Arg2;
      break;
    case "-":
      result = +Arg1 - +Arg2;
      break;
    case "/":
      result = +Arg1 / +Arg2;
      break;
    default:
      result = +Arg1 * +Arg2;
  }
  alert( result );
}
