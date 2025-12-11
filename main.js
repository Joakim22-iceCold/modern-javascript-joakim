// Joakim Bøe-Sørbo - Oppgavesett 5a block scope
console.log("Joakim Bøe-Sørbo - Oppgavesett 5a block scope");


// Oppgave 1
{
const i = 10;
console.log(`i = ${i}`);
}
// Utskriften blir 1 = 10 fordi vi har satt at verdien av i er 10.


// Oppgave 2
const x = 10;
{
console.log(`i = ${x}`);
}
// utskriften blir i = 10 fordi i er lik verdien av x og x er 10.


// Oppgave 3
//{
//const y = 10;
//}
//console.log(`y = ${y}`);
// utskrfiten blir en feilmelding fordi Y ikke er definert


// Oppgave 4
let z;
{
z = 10;

//utskrift a)
console.log(`z = ${z}`);
}

//utskrift b)
console.log(`z = ${z}`)
// Begge utskrfitene blir z=10. begge skal skrive ut verdien av z og vi har satt verdien til z som 10.


// Oppgave 5
let a;
fubar();
console.log(`a = ${a}`);
function fubar(){
a =2;
}

//Så kjører vi fubar(), som setter a = 2.Til slutt skriver vi ut a, og konsollen viser: a=2


// Oppgave 6
let b = 10;
add(b, 5);
console.log(b);
function add(c, d){
let result = c + d;
console.log(result);
}
// Det blir 2 utskrifter, 15 fra console.log(result); og 10 fra console.log(b). b er 10. add(b, 5) kalles, i funksjonen blir c = 10 og d = 5.Funksjonen regner ut result = 10 + 5 → 15, og skriver det ut. Funksjonen endrer ikke b, fordi funksjonen bare jobber med kopier av verdiene. Etterpå skriver console.log(b) ut 10, som er den opprinnelige verdien.


// Joakim Bøe-Sørbo - Oppgavesett 5b funksjoner
console.log("Joakim Bøe-Sørbo - Oppgavesett 5b funksjoner");


// Oppgave 1
// En funksjon brukes for å samle kode som gjør én bestemt oppgave, slik at du kan bruke den flere ganger uten å skrive alt på nytt. Den gjør koden ryddigere, enklere å forstå, og lettere å gjenbruke.


// Oppgave 2 a
function boller() {
  console.log("Hello World!");
}
// 2 b: et funksjonskall her er boller(), koden kjører inne i skallet og her skriver den ut Hello World!.
// 2 c: boller(), sånn kaller man på funksjonen


// Oppgave 3
//En parameter er et navn som funksjonen bruker for å ta imot en verdi. Et argument er verdien du faktisk sender inn når du kaller funksjonen. Parametere er "plassholdere", argumenter er de ekte verdiene.


// Oppgave 4
//function printParam(tekst) {
  //console.log(tekst);
//}

//printParam("Min parameter er");
//printParam("bolletryne her er");


// Oppgave 5
function showParams(param1, param2) {
console.log(`Jeg fikk to parametere; ${param1} og ${param2}`);
}
showParams("Sander = cookiefjes", "Mikael = bolletryne");


// Joakim Bøe-Sørbo - Oppgavesett 5b funksjoner_2
console.log("Joakim Bøe-Sørbo - Oppgavesett 5b funksjoner");

// Oppgave 1
// return avslutter en funksjon og sender en verdi ut av funksjonens scope, mens = bare lagrer en verdi i en variabel uten å stoppe funksjonen.


// Oppgave 2
// a
function hello() {
    return "Hello world";
}
console.log(hello());

//b
function cookiefjes(value) {
    return value;
}
console.log(cookiefjes("Hei bolletryne!"));
console.log(cookiefjes(67));


// Oppgave 3
// a
function add(a, b) {
    return a + b;
}

console.log(add(5, 7));
console.log(add(10, 3));

// b
function multiply(c, d)  {
    return c * d;
}

console.log(multiply(6, 7))
console.log(multiply(6, 9))


// Oppgave 4
// a
function subtract(a, b, c) {
    return a - b - c;
}

console.log(subtract(67, 7, 9));
console.log(subtract(69, 21, 10));

// b
function subtractAndPrint(a, b, c) {
    console.log("a =", a);
    console.log("b =", b);
    console.log("c =", c);
    return a - b - c;
}

console.log("Resultat:", subtractAndPrint(10, 3, 2)); 


// Oppgave 5
function ferdig() {
    let resultat = "Jeg har klart oppgavene ganske bra";
    return resultat;
}

console.log(ferdig()); 


// Joakim Bøe-Sørbo - Oppgavesett 5c pilfunksjoner
console.log("Joakim Bøe-Sørbo - Oppgavesett 5c pilfunksjoner");

// Oppgave 1
const helloWorld = () => console.log("Hello World");

helloWorld();


// Oppgave 2
const printValue = (value) => {
    console.log(value);
};

printValue("Bolletryne");
// Når funksjonen har en parameter kan du droppe parentesene rudnt parameteren.


// Oppgave 3
const skrivUt = (bolletryne, cookiefjes, mrbrownie) => {
    console.log(bolletryne);
    console.log(cookiefjes);
    console.log(mrbrownie);
};

skrivUt("Bolletryne er her!", "Cookiefjes rapporterer!", "Mr. Brownie er på plass!");


// Oppgave 4
const skrivAlt = (...values) => {
    console.log(values);
};

skrivAlt("Bolletryne", 67, true, "Cookiefjes");


// Oppgave 5
// En pilfunksjon bruker det samme this som koden rundt seg. En vanlig funksjon får sitt eget this, som kan endre seg når funksjonen kalles.