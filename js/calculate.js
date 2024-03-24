function calc(){

    // document - обращение к обьектам (к файлу документа )
    // querySelector - функция которая ищет элементы в DOM дереве

    // объявляем переменные num1,num2
    let num1 = document.querySelector('#input1').value;
    let num2 = document.querySelector('#input2').value;

        // переопределяем переменные num1,num2
        // преобразовываем строку к числу
        // parseInt('1') - из строки в число = 1
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        console.log(num1 + num2);
}

