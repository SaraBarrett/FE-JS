/*function helloWorld(){
    alert('hello world');
}*/


//let myName = 'Sara';
//let myLuckyNumber = 16;

/*alert(myName + ' e o meu número preferido é'+ myLuckyNumber);

console.log(myName);


const message = '   TASTE THE RAINBOW ';

let whisper = message.toLowerCase().trim();

console.log(whisper);


const word ='skateboard';

let facialHair = word.slice(5);

facialHair = facialHair.replace('o','e');
console.log(facialHair);


let myFirstName = prompt('Qual é o teu primeiro nome');
let mySecondName = prompt('Qual é o teu último nome');

alert('olá ' + myFirstName + ' ' +mySecondName);

let dayOfWeek = prompt('Que dia da semana é');

if(dayOfWeek.toLowerCase() == 'sexta'){
alert('yayy, fim de semana');
}else{
    alert('só mais um bocadinho');
}

let password = prompt('Qual é a pass');

if(password.length > 5 ){
alert('ok');
}else{
    alert('inválida');
}

let dayOfWeek = prompt('Que dia da semana é');

switch(dayOfWeek.toUpperCase()){
    case 'SEGUNDA': alert('Segunda');
    break;
    case 'TERÇA': alert('Terça');
    break;
    case 'QUARTA': alert('QUARTA');
    break;
    case 'SEXTA': alert('SEXTA');
    break;
    default:
        alert('coloque um dia válido');

}


let planets = ['mercúrio', 'venus', 'terra', 'mart', 'jupiter', 'saturno', 'urano', 'neptuno', 'plutao'];

planets[3]= 'Marte';
planets.pop();
planets.unshift('planeta JS, a melhor linguagem do mundo');

console.log(planets);

const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

airplaneSeats[3][1] = 'Sara';

console.log(airplaneSeats);


const product = {name:'camisola', inStock: true, price: 1.99, colors:['vermelho', 'azul', 'verde']}; 

console.log(product.price);
console.log(product.colors[2]);

product.price = 2.55;

console.log(product);
*/

function music(){
    for(let i = 1 ; i<7; i++){
    console.log(i);
    console.log('asbadbadj adadadok');
}
}



/*
for(let i = 25 ; i>5; i-=5){
    console.log(i);
}
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for(i=0; i<people.length; i++){
    console.log(people[i].toUpperCase());


}

let listaDeCompras = [];
let item = '';
let end = 'fim';
while(item != end){
    item = prompt(' Digite um item. Se quiser finalizar escreva fim');
 
    if(item != end){
        listaDeCompras.push(item);
    }
}
for(element of listaDeCompras){
    console.log(element);
}


function heart(){
    alert('<3');
}
*/
function alertSomething(name){
    alert(name);

}

function rant(message){
    for(i = 1; i<4; i++){
        console.log(i, message.toUpperCase());
    }

}

function myName(firstName, lastName){
    alert('Hey'+ firstName + '' + lastName +'.');

    alert(`Hey+ ${firstName} ${lastName}.`);
}


let snakeEyes = 1;

function isSnakeEyes(num1, num2){

    if(num1 == snakeEyes && num2 == snakeEyes){
        console.log('yay');
    }else{
        console.log('tenta outra vez');
    }
    
}

function multiply(num1, num2){
    let total = num1 * num2;
return total;

}

function isShortWeather(temperature){
    if(temperature >25){
        return true;
    }else{
        return false;
    }
}


function lastElement(array){
if(array.length < 1){
 return null;
}else{
 return array[array.length - 1];
}

}


function capitalize(name){
   let secondPart = name.slice(1);
   return name[0].toUpperCase()+secondPart.toLowerCase();
}



function sumArray(arrayNum){
    let total = 0;
    for(let element of arrayNum){
        total += element;
    }
return total; 
}

const daysOfWeek = [null, 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'];

function returnDay(day){
if(day >0 && day <8){
    return daysOfWeek[day];
}else{
    return null; 
}
}

const fullNames = [
    {first: 'Albus', last: 'Dumbledore'}, 
    {first: 'Harry', last: 'Potter'}, 
    {first: 'Hermione', last: 'Granger'}, 
    {first: 'Ron', last: 'Weasley'}, 
    {first: 'Rubeus', last: 'Hagrid'}, 
    {first: 'Minerva', last: 'McGonagall'}, 
    {first: 'Severus', last: 'Snape'}
];

const firstNames = fullNames.map(
    function (firstname){
        return firstname.first;
    }
)




