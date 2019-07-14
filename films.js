//массив данных
  const films = [
    {
      title: 'The Green Mile',
      creationYear: 1999,
      country: ['USA'],
      budget: '$60 000 000',
      actors: [
        {
          name: 'Tom Hanks',
          age: 63,
          role: 'Paul Edgecomb',
        },
        {
          name: 'David Morse',
          age: 65,
          role: 'Brutus Howell',
        },
        {
          name: 'Michael Clarke Duncan',
          age: 54,
          role: 'John Coffey',
        },
      ],
      director: {
        name: 'Frank Darabont',
        age: 60,
        oscarsCount: 0,
      }
    },
    {
      title: 'Inception',
      creationYear: 2010,
      country: ['USA'],
      budget: '$160 000 000',
      actors: [
        {
          name: 'Leonardo DiCaprio',
          age: 44,
          role: 'Cobb',
        },
        {
          name: 'Joseph Gordon-Levitt',
          age: 38,
          role: 'Arthur',
        },
        {
          name: 'Ellen Page',
          age: 32,
          role: 'Ariadne',
        },
        {
          name: 'Tom Hardy',
          age: 41,
          role: 'Eames',
        },
      ],
      director: {
        name: 'Christopher Nolan',
        age: 48,
        oscarsCount: 0,
      }
    },
    {
      title: 'Forrest Gump',
      creationYear: 1994,
      country: ['USA'],
      budget: '$55 000 000',
      actors: [
        {
          name: 'Tom Hanks',
          age: 63,
          role: 'Forrest Gump',
        },
        {
          name: 'Robin Wright',
          age: 53,
          role: 'Jenny Curran',
        },
        {
          name: 'Sally Field',
          age: 72,
          role: 'Mrs. Gump',
        },
      ],
      director: {
        name: 'Robert Zemeckis',
        age: 68,
        oscarsCount: 1,
      }
    },
    {
      title: 'Interstellar',
      creationYear: 2014,
      budget: '$165 000 000',
      country: ['USA','Great Britain', 'Canada'],
      actors: [
        {
          name: 'Matthew McConaughey',
          age: 49,
          role: 'Cooper',
        },
        {
          name: 'Anne Hathaway',
          age: 36,
          role: 'Brand',
        },
        {
          name: 'Jessica Chastain',
          age: 42,
          role: 'Murph',
        },
        {
          name: 'Michael Caine',
          age: 86,
          role: 'Professor Brand',
        },
        {
          name: 'Matt Damon',
          age: 48,
          role: 'Mann',
        },
      ],
      director: {
        name: 'Christopher Nolan',
        age: 48,
        oscarsCount: 0,
      }
    },
    {
      title: 'Catch Me If You Can',
      creationYear: 2002,
      budget: '$52 000 000',
      country: ['USA', 'Canada'],
      actors: [
        {
          name: 'Tom Hanks',
          age: 63,
          role: 'Carl Hanratty',
        },
        {
          name: 'Leonardo DiCaprio',
          age: 36,
          role: 'Frank Abagnale Jr.',
        },
        {
          name: 'Christopher Walken',
          age: 76,
          role: 'Frank Abagnale',
        },
        {
          name: 'Amy Adams',
          age: 44,
          role: 'Brenda Strong',
        },
      ],
      director: {
        name: 'Steven Spielberg',
        age: 72,
        oscarsCount: 4,
      }
    },
  ];



//------------------Задание 2 (Лекция 3)------------------------------
//
//
//1. Ражиссер не получил оскар, берем всех не повторяющихся актеров

//для каждого объекта в массиве полчуем свойство директор и смотрим у него свойство оскар
const massactors = [];
const massactorsTH = [];

let srage = 0; //средний возраст
let budget= 0; //средний возраст

for (let i = 0; i < films.length; i++) {

  let onefilm = films[i];
  //Задание первое
  if ("director" in onefilm) {
    director = onefilm.director;
    if ("oscarsCount" in director) {
      //получить числовую интерпритацию значения вдруг там пусто
      let isoscar = isNumeric(director.oscarsCount);
      if (isoscar ==  0) {
        //Берем из этой ветки самих актеров и формируем без повторений (поверено на фильмах с оскаром)
        if ("actors" in onefilm) {
          for (let j = 0; j < onefilm.actors.length; j++) {
            oneactors = onefilm.actors[j]
            if (massactors.indexOf(oneactors.name,0) == -1) {
                massactors.push(oneactors.name);
                srage = srage + isNumeric(oneactors.age);
            }
          }
        }
      }
    }
  }

  //Соберем массив актеров по каждому фильму без повторений для 2 и 3 задания
  if ("actors" in onefilm) {
    const massactorsFILM = [];
    let ectTH = 0;
    for (let j = 0; j < onefilm.actors.length; j++) {
      oneactors = onefilm.actors[j]
      if (massactorsFILM.indexOf(oneactors.name,0) == -1) {
        if (oneactors.name == "Tom Hanks") {
          ectTH = 1;
        }
        massactorsFILM.push(oneactors.name);
      }
    }
    if (ectTH == 1) {
      if (onefilm.creationYear > 1995) {
        for (let j = 0; j <massactorsFILM.length; j++) {
          oneactors = massactorsFILM[j]
          if (massactorsTH.indexOf(oneactors,0) == -1 && oneactors !== "Tom Hanks") {
            massactorsTH.push(oneactors + "&emsp;(" +onefilm.title+", "+onefilm.creationYear+" год.)" );
          }
        }
      }
    }
    else {
      if (director.age <70) {
        let budgetstr = "";
        for ( z = 0; z < onefilm.budget.length; z++) {
          if (isNumeric(onefilm.budget[z]) !== undefined) {
            budgetstr = budgetstr + onefilm.budget[z];
              //budgetstr = "13"+"45";
            }
        }

        budget = budget + isNumeric(budgetstr);


      }

    }
  }

}
if (massactors.length >0) {
  srage = srage / massactors.length;
  srage = srage.toFixed(2);
  //let god = parseInt(srage);
  //let mes = (srage-parseInt(srage))*12;
  ((srage-parseInt(srage))*12).toFixed(1)
  document.writeln("1. Средний возраст (age) актеров, которые снимались в фильмах режиссера(director), которые не получили оскар (oscarCount) <br> &emsp; = "+srage+" (" +parseInt(srage) + " лет.  и "+((srage-parseInt(srage))*12).toFixed(0) +" месяцев).<br><br>");
}
else {
  document.writeln("Нет данных об актерах <br>");
}
document.writeln("2. Имена всех актеров, которые играли с Томом Хэнксом, в фильмах после 1995 года." + "<br>");
for (var i = 0; i < massactorsTH.length; i++) {
  document.writeln("&emsp;"+(i+1) + ". "+massactorsTH[i] + "<br>");
}

document.writeln("<br>3.  Общий бюджет (сумма) фильмов, с режиссерами младше 70 лет и в которых не играл Том Хэнкс. составил <br> &emsp; -"+budget+ "<br>");


document.writeln("<br><br>Исходные данные: <br><br>");
//выводим наш объект

  for (let i = 0; i < films.length; i++) {

    let acc = films[i];
    for (let key in acc) {
      if (key == "actors") {
          document.writeln(key + "<br>");
          let act = acc[key]; //act это массив объектов
          for (let j = 0; j < act.length; j++) {
            cat2 = act[j];
            for (let key3 in cat2) {
                document.writeln(" -------- "+key3 + " - "+ cat2[key3] + "<br>");
            }
          }
      }
      else if (key == "director") {
            document.writeln(key + "<br>");
            let act = acc[key]; //act это массив объектов
                for (let key3 in act) {
                  document.writeln(" ------------------------- "+key3 + " - "+ act[key3] + "<br>");
                }
      }
      else {
        document.writeln( key + "  -   " );
        document.writeln( acc[key] + "<br>" );
      }
    }
      document.writeln("<br><br>");
  }

document.writeln( "---------------------------<br>" );
//alert(undefined > 0);

//--Описание процедур и функций

function isNumeric(n) {
  if (!isNaN(parseFloat(n)) && isFinite(n)) {
    return parseFloat(n);
  }
}
