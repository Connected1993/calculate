function calc(){
    
    // document - обращение к обьектам (к файлу документа )
    // querySelector - функция которая ищет элементы в DOM дереве

    // объявляем переменные num1,num2
    let action = document.querySelector('option:checked').textContent; 
    let num1 = document.querySelector('#input1').value;
    let num2 = document.querySelector('#input2').value;

        // переопределяем переменные num1,num2
        // преобразовываем строку к числу
        // parseInt('1') - из строки в число = 1
        num1 = parseInt(num1);
        num2 = parseInt(num2);

    //     // если выбрали + 
    // if (action == '+')
    // {
    //     // напечает но не вернет результат
    //     console.log(num1 + num2)
    //     return num1 + num2;
    // }
    // if (action == '-')
    // {
    //     // напечает но не вернет результат
    //     console.log(num1 - num2)
    //     return num1 - num2;
    // }

    // let result = null;
    // switch(action){
    //     case '+': result = num1 + num2; break;
    //     case '-': result = num1 - num2; break;
    //     case '/': result = num1 / num2; break;
    //     case '*': result = num1 * num2; break;
    //     case '**': result = num1 ** num2; break;
    //     default: result = 'неизвестный оператор';
    // }
        let result = eval(num1+action+num2)
        console.log ( result );

        // return console.log( eval(num1+action+num2) );
        // return eval(num1+action+num2);
        
}

// для input,option,textarea,button - доступен атрибут value
// через .value можем получить значение этого атрибута


// document.querySelector('input').value - получили содержимое тега input
// document.querySelector('input').value = 'Новый текст' - изменили содержимое  input


// document.querySelector('h1').textContent - получили содержимое тега h1

// обработчик событий
//https://developer.mozilla.org/ru/docs/Web/Events
// click - событие
//addEventListener('click')