/*
 function - объявление функции
 sum - название функции
 () - тут будут агрументы функции
 {} - тело функции
*/

function sum( num1,num2 ){
    
    //console.log('num1 = '+num1);
    //console.log('num2 = '+num2);
    //console.log( num1 + num2 );
    // переменная которая содержит результат сложения чисел
    // return - выход из функции + возврат значения
    return num1 + num2;
}

// получили сумму самой скидки
function calcSale(price,percent)
{
    return price*percent / 100;
}

// получили сумму с учётом скидки
function lastPrice(price,percent)
{
    return price - (price*percent / 100);
}

// внутри функции мы можем вызывать любое количество других функций
function lastPrice2(price,percent)
{
    return price - calcSale(price,percent);
}

// для того чтобы вызвать функцию 
//sum();



