// Joakim Bøe-Sørbo Oppgavesett 9 introduksjon oop literal objects

// Oppgave 1
const elev1 = {
    fornavn: "Mikael",
    etternavn: "Feldt",
    alder: 16
};

const elev2 = {
    fornavn: "Kim",
    etternavn: "Tran",
    alder: 67
};

const elev3 = {
    fornavn: "Sander",
    etternavn: "Tennstrand",
    alder: 16
};

const elev4 = {
    fornavn: "Jonatan",
    etternavn: "Brekke",
    alder: 16
};

console.log(elev1.fornavn, elev1.etternavn, elev1.alder);
console.log(elev2.fornavn, elev2.etternavn, elev2.alder);
console.log(elev3.fornavn, elev3.etternavn, elev3.alder);
console.log(elev4.fornavn, elev4.etternavn, elev4.alder);


// Oppgave 2
function skrivUtElev(elev) {
    console.log(
        "Navn: " + elev.fornavn +
        " Etternavn: " + elev.etternavn +
        " Alder: " + elev.alder
    );
}

skrivUtElev(elev1);
skrivUtElev(elev2);
skrivUtElev(elev3);
skrivUtElev(elev4);


// Oppgave 3
/*
function carFactory(seter, hestekrefter, modell, type) {
    return {
        seter: seter,
        hestekrefter: hestekrefter,
        modell: modell,
        type: type
    };
}

const bil1 = carFactory(5, 150, "Toyota Corolla", "Sedan");
const bil2 = carFactory(7, 200, "Volvo XC90", "SUV");
const bil3 = carFactory(5, 180, "Volkswagen Passat", "Stasjonsvogn");
const bil4 = carFactory(2, 300, "Mazda MX-5", "Sport");

const biler = [bil1, bil2, bil3, bil4];
*/


// Oppgave 4
//function carFactory(seter, hestekrefter, modell, type) {
    //return {
        //seter: seter,
        //hestekrefter: hestekrefter,
        //modell: modell,
        //type: type,

        //genererSerienummer: function () {
            //return Math.floor(Math.random() * 1000000);
        //}
    //};
//}

//const bil1 = carFactory(5, 150, "Toyota Corolla", "Sedan");
//bil1.serienummer = bil1.genererSerienummer();

//const bil2 = carFactory(7, 200, "Volvo XC90", "SUV");
//bil2.serienummer = bil2.genererSerienummer();

//const bil3 = carFactory(5, 180, "Volkswagen Passat", "Stasjonsvogn");
//bil3.serienummer = bil3.genererSerienummer();

//const bil4 = carFactory(2, 300, "Mazda MX-5", "Sport");
//bil4.serienummer = bil4.genererSerienummer();



//const biler = [bil1, bil2, bil3, bil4];

//biler.forEach(bil => {
    //console.log(
        //"Serienummer: " + bil.serienummer +
        //", Modell: " + bil.modell +
        //", Type: " + bil.type +
        //", Seter: " + bil.seter +
        //", Hestekrefter: " + bil.hestekrefter
    //);
//});


// Oppgave 5
function lagBilFactory(merke) {
    return function (seter, hestekrefter, modell, type) {
        return {
            merke: merke,
            seter: seter,
            hestekrefter: hestekrefter,
            modell: modell,
            type: type
        };
    };
}


const fordFactory = lagBilFactory("Ford");


const bil1 = fordFactory(5, 150, "Focus", "Sedan");
const bil2 = fordFactory(7, 220, "Explorer", "SUV");
const bil3 = fordFactory(2, 300, "Mustang", "Sport");


const biler = [bil1, bil2, bil3];


biler.forEach(bil => {
    console.log(
        "Merke: " + bil.merke +
        ", Modell: " + bil.modell +
        ", Type: " + bil.type +
        ", Seter: " + bil.seter +
        ", Hestekrefter: " + bil.hestekrefter
    );
});