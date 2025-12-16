// Joakim Bøe-Sørbo - Oppgavesett 6a flytkontroll_if_else
console.log("Joakim Bøe-Sørbo - Oppgavesett 6a flytkontroll_if_else");


// Oppgave 1
function sjekkString(param) {
    if (typeof param === "string") {
        console.log("STRING STRING STRING!");
    } else {
        console.log("Dette er ikke en String i det hele tatt");
    }
}

sjekkString(1);
sjekkString("1");
sjekkString("Navn");


// Oppgave 2
function sjekkType(verdi1, verdi2) {
    if (typeof verdi1 === typeof verdi2) {
        console.log("Variablene du brukte er av samme type!");
    } else {
        console.log("Variablene du brukte er IKKE av samme type!");
    }
}
// a) Variablene er ikke av samme type
// b) Variablene er av samme datatype
// c) Variablene er av samme type
// d) Variablene er av samme type
// e) Variablene er ikke av samme type


// Oppgave 3
// a)
let verdi = 5;

if (typeof verdi === "number") {
    console.log("Dette er et tall!");
} else {
    console.log("Test failed");
}

// b)
let verdi1 = 3;
let verdi2 = 8;

if (typeof verdi1 !== "number" || typeof verdi2 !== "number") {
    console.log(
        "Variabelene er ikke av typen number, den er av typen: " +
        typeof verdi1 + " og " + typeof verdi2
    );
} else {
    if (verdi1 > 5 || verdi2 > 5) {
        if (verdi1 > 5) {
            console.log(
                "Jeg fant en variabel som var større enn fem! Den hadde verdien: " + verdi1
            );
        } else {
            console.log(
                "Jeg fant en variabel som var større enn fem! Den hadde verdien: " + verdi2
            );
        }
    }
}


// Joakim Bøe-Sørbo - Oppgavesett 6b funksjoner 2-return
console.log("Joakim Bøe-Sørbo - Oppgavesett 6b funksjoner 2-return");


// Oppgave 1
// Nøkkelordet return brukes i en funksjon for å sende en verdi tilbake til stedet der funksjonen blir kalt, og for å avslutte funksjonen.


// Oppgave 2
function addereTall(tall1, tall2) {
    if (typeof tall1 === "number" && typeof tall2 === "number") {
        return tall1 + tall2;
    } else {
        return "Feil: Begge verdiene må være tall";
    }
}
let resultat1 = addereTall(3, 4);
console.log(resultat1); // 7

let resultat2 = addereTall(3, "4");
console.log(resultat2);


// Oppgave 3
function skrivTekst(param1, param2) {
    if (typeof param1 === "string" && typeof param2 === "string") {
        console.log("Utskrift til konsoll: " + param1 + " og " + param2);
    } else {
        console.error("Jeg skriver bare ut tekst!");
    }
}


// Oppgave 4
function kalkulator(tall1, tall2, operator) {
    const gyldigeOperatorer = ["+", "-", "*", "/"];
    

    const tall1ErTall = typeof tall1 === "number";
    const tall2ErTall = typeof tall2 === "number";

    if (!tall1ErTall && !tall2ErTall) {
        console.error(tall1 + " og " + tall2 + " er ikke tall! Programmet terminerer!");
        return;
    } else if (!tall1ErTall) {
        console.error(tall1 + " er ikke et tall! Kan ikke utføre " + operator + ". Programmet terminerer!");
        return;
    } else if (!tall2ErTall) {
        console.error(tall2 + " er ikke et tall! Kan ikke utføre " + operator + ". Programmet terminerer!");
        return;
    }

    
    if (!gyldigeOperatorer.includes(operator)) {
        console.error(operator + " er ikke en gyldig operasjon. Programmet terminerer!");
        return;
    }

   
    let resultat;
    switch(operator) {
        case "+": resultat = tall1 + tall2; break;
        case "-": resultat = tall1 - tall2; break;
        case "*": resultat = tall1 * tall2; break;
        case "/": 
            if (tall2 === 0) {
                console.error("Kan ikke dele på null! Programmet terminerer!");
                return;
            }
            resultat = tall1 / tall2; 
            break;
    }


console.log(tall1 + " " + operator + " " + tall2 + " = " + resultat);
}
kalkulator(5, 3, "+");
kalkulator(5, "a", "*");
kalkulator("x", "y", "+"); 
kalkulator(5, 3, "%");


// Joakim Bøe-Sørbo - Oppgavesett 6c return-statements-avansert
console.log("Joakim Bøe-Sørbo - Oppgavesett 6c return-statements-avansert");

// Oppgave 1
function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(convertToCelsius(69));


// Oppgave 2
function calculateAge(fodselsAar, naaAar) {
    return naaAar - fodselsAar;
}

let alder = calculateAge(2009, 2025);
console.log("Alder: " + alder);


// Oppgave 3
console.log(calculate(5, 3, "+"));

console.log(calculate(5, 3, "-"));


// Oppgave 4
function isEven(tall) {
    return tall % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(0));
console.log(isEven(-2));


// Oppgave 5
function findMax(tall1, tall2) {
    if (tall1 > tall2) {
        return tall1;
    } else if (tall2 > tall1) {
        return tall2;
    } else {
        return "Tallene er like";
    }
}console.log(findMax(5, 10));
console.log(findMax(8, 3));
console.log(findMax(7, 7));


// Oppgave 6
function calculateTax(inntekt) {
    let skatt;

    if (inntekt < 50000) {
        skatt = inntekt * 0.10;
    } else if (inntekt >= 50000 && inntekt <= 100000) {
        skatt = inntekt * 0.20;
    } else {
        skatt = inntekt * 0.30;
    }

    return skatt;
}

console.log(calculateTax(30000));
console.log(calculateTax(75000));
console.log(calculateTax(150000));


// Oppgave 7
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

console.log(isValidEmail("test@example.com"));
console.log(isValidEmail("testexample.com"));


// Oppgave 8
function findLongestString(str1, str2) {
    if (str1.length > str2.length) {
        return str1;
    } else if (str2.length > str1.length) {
        return str2;
    } else {
        return "Strengene er like lange";
    }
}
console.log(findLongestString("Hei", "skjer'a"));
console.log(findLongestString("test", "best"));


// Oppgave 9
function calculateDiscount(pris, rabattProsent) {
    if (typeof pris !== "number" || typeof rabattProsent !== "number") {
        console.error("Begge argumentene må være tall");
        return;
    }
    return pris - (pris * rabattProsent / 100);
}

console.log(calculateDiscount(100, 10));
console.log(calculateDiscount(200, 25));
console.log(calculateDiscount(50, "10"));


// Oppgave 10
function isStrongPassword(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
}

console.log(isStrongPassword("abc123"));
console.log(isStrongPassword("password1"));
console.log(isStrongPassword("pass1234"));
console.log(isStrongPassword("12345678"));


// Joakim Bøe-Sørbo - Oppgavesett 6d switch-case
console.log("Joakim Bøe-Sørbo - Oppgavesett 6d switch-case");


// Oppgave 1
function handleOption(selectedOption) {
    if (typeof selectedOption !== "number") {
        console.error("Error");
        return;
    }

    switch (selectedOption) {
        case 1:
            console.log("Brukeren startet programmet");
            break;
        case 2:
            console.log("Brukeren vil gjøre en utskrift");
            break;
        case 3:
            console.log("Brukeren vil avslutte programmet");
            break;
        default:
            console.log("Valget er ikke et gyldig valg. Velg på nytt.");
    }
}

handleOption(1);
handleOption(2);
handleOption(3);
handleOption(4);
handleOption("abc");


// Oppgave 2
function calculate(operator, ...tall) {
    const gyldigeOperatorer = ["+", "-", "*", "/"];
    if (!gyldigeOperatorer.includes(operator)) {
        console.error("Syntax error: ugyldig operator");
        return;
    }
    if (tall.length !== 2 || typeof tall[0] !== "number" || typeof tall[1] !== "number") {
        console.error("Syntax error: begge argumentene må være tall");
        return;
    }
    let resultat;
    switch(operator) {
        case "+": resultat = tall[0] + tall[1]; break;
        case "-": resultat = tall[0] - tall[1]; break;
        case "*": resultat = tall[0] * tall[1]; break;
        case "/": 
            if (tall[1] === 0) {
                console.error("Syntax error: kan ikke dele på null");
                return;
            }
            resultat = tall[0] / tall[1];
            break;
    }
    console.log(tall[0] + " " + operator + " " + tall[1] + " = " + resultat);
}

calculate("+", 5, 3);
calculate("-", 10, 4);
calculate("*", 6, 7);
calculate("/", 20, 4);
calculate("%", 5, 3);
calculate("+", 5, "a");
calculate("/", 5, 0);