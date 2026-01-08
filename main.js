// Joakim Bøe-Sørbo - Oppgavesett 8a flytkontroll, loops
// Oppgave 1
// For-løkke, Gjentar en blokk med kode et bestemt antall ganger.
for (let i = 0; i < 5; i++) {
  console.log(`Step ${i + 1}: Walking east`);
}


// while-løkke, Fortsetter å kjøre så lenge en betingelse er sann.
let n = 0;
while (n < 3) {
  console.log(`Current number: ${n}`);
  n++;
}


// do...while-løkke, Utfører koden minst én gang før den sjekker betingelsen.
let i = 0;
do {
  console.log(`Count: ${i}`);
  i++;
} while (i < 3);


// for...in-løkke, Itererer over egenskaper i et objekt.
const car = { make: "Ford", model: "Mustang" };
for (const key in car) {
  console.log(key, car[key]);
}


// for...of-løkke, Itererer over elementer i en iterable som en array.
const arr = [3, 5, 7];
for (const value of arr) {
  console.log(value);
}


// Oppgave 2
const navneliste = ['Geir', 'Espen', 'Ellen', 'Erik', 'Lars', 'Gunnar', 'Oda', 'Nina', 'Tine', 'Henrik', 'Agnethe'];

for (const navn of navneliste) {
    console.log(`${navn} har ${navn.length} bokstaver`);
}
// henter direkte verdiene i arrayen, så man slipper å tenke på indekser.


// Oppgave 3
const nameliste = ['Geir', 'Espen', 'Ellen', 'Erik', 'Lars', 'Gunnar', 'Oda', 'Nina', 'Tine', 'Henrik', 'Agnethe'];

for (let i = navneliste.length - 1; i >= 0; i--) {
    console.log(navneliste[i]);
}
// Vi kan styre start, slutt og retning ved å manipulere indeksen. Derfor vanlig for-løkke


// Oppgave 4
function reduceToOddNumber(number) {

    if (typeof(number) === 'number') {

        while (number % 2 === 0) {
            number = number / 2;
        }
        return number;
    } else {
        return "Argumentet er ikke et tall";
    }
}


console.log(reduceToOddNumber(48));
console.log(reduceToOddNumber(7));
console.log(reduceToOddNumber("hei"));


// Oppgave 5
// do...while-løkke, Passer når vi vil kjøre koden minst én gang før vi sjekker en betingelse.
// for...in-løkke, Passer best for objekter


// Joakim Bøe-Sørbo - Oppgavesett 8a flytkontroll, loops
// Oppgave 1
let navn = ["Odin", "Thor", "Loki", "Freya", "Baldur", "Frigg", "Tyr", "Heimdall", "Hel", "Idunn", "Njord", "Skadi", "Fenrir", "Jormungandr", "Sleipnir"];

for (let i = 0; i < navn.length; i++) {
    console.log(navn[i]);
}


// Oppgave 2
let tall = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30];
let sum = 0;

for (let i in tall) {
    sum += tall[i];
}

console.log(sum);


// Oppgave 3
let alleNavn = [
  "Anne", "Jan", "Per", "Bjørn", "Ole", "Lars", "Inger", "Kjell",
  "Kari", "Thomas", "Ingrid", "Svein", "Marit", "Knut", "Tor", "Liv",
  "Geir", "Martin", "Hans", "Morten"
];

function tellNavn(navnSomSkalSjekkes, array) {
    let antall = 0;
    for (let i in array) {
        if (array[i] === navnSomSkalSjekkes) {
            antall++;
        }
    }
    console.log(`${navnSomSkalSjekkes} er oppført ${antall} ganger i arrayen som er ${array.length} lang`);
}


tellNavn("Arne", alleNavn);
tellNavn("Kari", alleNavn);