// Joakim Bøe-Sørbo - Oppgavesett 7a arrays

// Oppgave 1
// a) En array brukes til å lagre flere verdier av samme datatype samlet på ett sted slik at de enkelt kan brukes og behandles i et program.
//Arrays i JavaScript skiller seg fra mange andre programmeringsspråk ved at de er dynamiske og fleksible: de kan endre størrelse underveis, inneholde ulike datatyper i samme array, og fungerer teknisk sett som objekter med innebygde metoder, i motsetning til mange språk der arrays har fast størrelse og kun én datatype.


// Oppgave 2
// a)
let arr = [];

// b)
let ender = [];
ender[0] = "Donald Duck";
ender[1] = "Dolly Duck";
ender[2] = "Onkel Skrue";
ender[3] = "Ole";
ender[4] = "Dole";
ender[5] = "Doffen";
ender[6] = "Fetter Anton";
ender[7] = "Petter Smart";
ender[8] = "Turbo";
ender[9] = "Bestemor Duck";

// c)
console.log(ender[2]);
console.log(ender[5]);
console.log(ender[8]);


// Oppgave 3
// a) En indeks i en array er posisjonsnummeret som forteller hvor et element ligger i arrayen, og den starter alltid på 0 i de fleste programmeringsspråk.

// b) Den første indeksen i en array er 0.

// c) Den siste indexen i en array er 9.

// d) Lengden på en array er antallet elementer som er lagret i arrayen.

// e) Sammenhengen er at indeksene i en array alltid starter på 0, mens length teller hvor mange elementer som finnes. Derfor er siste indeks alltid én mindre enn lengden på arrayen.


// Oppgave 4
// a) typeof operatøren vil alltid returnere "object" når du bruker den på en array, fordi arrays teknisk sett er objekter.

// b)
let a = [1, 2, 3];
console.log(Array.isArray(a)); // true

let b = "Hei";
console.log(Array.isArray(b)); // false

// c) 
function sjekkArray(argument) {
    if (Array.isArray(argument)) {
        console.log("Argumentet er en array");
    } else {
        console.log("Argumentet er ikke en array");
    }
}

sjekkArray([1, 2, 3]); // Argumentet er en array
sjekkArray("Hei");      // Argumentet er ikke en array


// Joakim Bøe-Sørbo - Oppgavesett 7b arrays

// Oppgave 1
let numbers = [10, 20, 30];
console.log(numbers[1]);


// Oppgave 2
let greetings = [];
greetings[0] = "hello";
greetings[1] = "world";

console.log(greetings);


// Oppgave 3
let tall = [1, 2, 3, 4, 5];
console.log(tall.length);


// Oppgave 4
let fruits = ["apple", "banana", "cherry"];
fruits[1] = "blueberry";

console.log(fruits);


// Oppgave 5
let values = [5, 10, 15];
values[3] = 20;

console.log(values);


// Oppgave 6
let colors = ["red", "green", "blue"];
console.log(colors[colors.length - 1]);


// Oppgave 7
let verdier = [7, 14, 21];
console.log(verdier[0] < verdier[2]);


// Oppgave 8
let nums = [2, 4, 6, 8];
console.log(nums[0] + nums[2]);


// Oppgave 9
let arrayOfArrays = [[1, 2, 3], [4, 5, 6]];
console.log(arrayOfArrays[1][1]);


// Oppgave 10
let x = 100;
let y = 200;
let z = 300;

let xyz = [x, y, z];

console.log(xyz);