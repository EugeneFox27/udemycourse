function showMessage(text) {
    alert(text);
    let num = 100;
    console.log(num);
                            }
showMessage('Check differencies beetwen let and num!'); 
console.log(num);

a = prompt('Please enter your number','');
function SQRT(a){
    
    koren = Math.sqrt(a);
    return koren;
}
console.log(SQRT(a));


// обьявление функции через присваивание. Работает вычисления и выводы работают только после функции. Иначе not defined
let calc = function(a,b) {
    return (a+b);
};
//   В ЕС6 введено облегчение записей. Эта же функция присваивания будет выглядеть: 
let calc = (a,b) => a+b

// Методы и свойства: 

//Свойство  length - длина строки. Свойства без ()
let str = "Test";
console.log(str.length);

// Метод с () в конце. 
// Пример toUpperCase()
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Methods for numbers
// Math.round - округление числа 
let twelve = '12.2';
console.log(Math.round(twelve));
// parseInt - возвращает целое число
// parseFloat - возвращает число с точкой

let one = '1.2px';
console.log(parseInt(one));
console.log(parseFloat(one));



