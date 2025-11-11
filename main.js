//1. Å deklarere en variabel betyr å fortelle programmet at variabelen finnes, og hva slags datatype den skal ha.
//2. Å initialisere en variabel betyr å gi den en startverdi, altså å tilordne/sette en verdi til variabelen for første gang.
let alder = 16;
//4. var kan brukes overalt i en funksjon og kan brukes før den er laget, mens let bare funker inne i blokken den er laget i. let er tryggere, så det er best å bruke let.
//5. En variabel kan endre verdi etter at den er laget, mens en konstant får en verdi som ikke kan endres etter at den er satt.
//6. Number, string, boolean, object.
//7. undefined betyr at variabelen er laget, men ikke har fått en verdi ennå. null betyr at variabelen er tom med vilje.
//7. a) En variabel inneholder undefined hvis den er laget, men ikke har fått verdi, for eksempel let x;. En variabel inneholder null hvis man med vilje setter den til å være tom, for eksempel let y = null;.
//7. b) Å vite forskjellen på undefined og null gjør det lettere å finne feil. Undefined betyr at variabelen aldri fikk verdi, mens null betyr at den er satt tom med vilje. Da kan du raskt se hva som forårsaker problemet i koden.

console.log(typeof 42); // number

console.log(typeof "Hei"); // string

console.log(typeof true); // boolean

console.log(typeof undefined); // undefined

console.log(typeof null); // null

console.log(typeof Symbol("id")); // symbol

console.log(typeof 12345678901234567890n); // bigint

console.log(typeof {navn: "Ola", alder: 16}); // object

// 2. 
// A) Datatypen er number fordi det står et heltall der, det kunne også vært desimaltall, number forteller oss at verdien er et tall.
// B) Datatypen er string og ddet står hello world i stedenfor et tall 
// C) Datatypen er nå boolean som forteller om noe er sant eller usant.