// Joakim Bøe-Sørbo - Oppgavesett 4a boolske verdier og sammenligning
console.log("Joakim Bøe-Sørbo - Oppgavesett 4a boolske verdier og sammenligning");


// Oppgave 1
console.log(1 === 1) //utskriften blir true
console.log(1 === 2) //utskriften blir false
console.log(3==3) //utskriften blir true
console.log(2==3) //utskriften blir false


// Oppgave 2
console.log(1 == "1") //utskriften blir true
console.log(2 === "2") // utskriften blir false
// Når det er 2 likhetstegn sjekker den bare tallene, men når det er 3 sjekker den datatypen og tallene.


// Oppgave 3
console.log(1==1 && 2==2) // utskriften blir true
console.log(1==="1" && 2===2) // utskriften blir false
console.log(1===1 && "2" ===2) // utskriften blir false
console.log(1=="1" && 2=="2") // utskrfiten blir true


// Oppgave 4
console.log(1==="1" || 2===2) //utskriften blir true
console.log(2=="2" || 1==="1") // utskriften blir true
console.log(2===2 || 1===1 || 3==="3") // utskriften blir true


// Oppgave 5
console.log(1!== 1) // utskriften blir false
console.log(2!== 1) // utskriften blir true
console.log(2!== 1 && 1 === 1) //utskriften blir true
console.log(2!== "2" && 1=== "1" || 2=="2") // utskriften blir true



// Joakim Bøe-Sørbo - Oppgavesett 4b sammenligningsoperatorer
console.log("Joakim Bøe-Sørbo - Oppgavesett 4b sammenligningsoperatorer")


// Oppgave 1
console.log(5 > 3) // utskriften blir true
console.log(5 < 3) // utskriften blir false
console.log(10 > 10) // utskriften blir false
console.log(10 >= 10) // utskriftne blir true
console.log(8 <= 12) // utskriften blir true


// Oppgave 2
console.log(4 >= 5) // utskriften er false
console.log(7 <= 7) // utskriften er true
console.log(9 <= 4) // utskriften er false
console.log(6 > 2) // utskriftern er true
// <, >, <=, >=, betyr større enn, mindre enn, mindre enn eller er lik, større enn eller er lik.


// Oppgave 3
console.log(5 == 5) // utskriften blir true
console.log(5 == "5") // utskriften blir true
console.log(5 === "5") // utskriften blir false
console.log(5 != 4) // utskriften blir true
console.log(5 !== '5') // utskriften blir true

// == sjekker om verdiene er like, mens === sjekker både verdi og datatype
// != sjekker om verdiene ikke er like, mens !== sjekker om verdien eller typen er ulik.


// Oppgave 4
console.log(5 > 3 && 10 > 5) // utskriften blir true
console.log(5 > 3 && 10 < 5) // utskriften blir false
console.log(7 >= 7 && 2 < 5) // utskriften blir true
console.log(4 < 2 && 3 > 1) // utskriften blir false

// For at et uttryk med && skal være true så må det vare sant det som star på begge sidene av "&&" tegnet.


// Oppgave 5
console.log(5 > 3 || 10 > 5) // utskriften blir true
console.log(5 > 3 || 10 < 5) // utskriften blir true
console.log(7 < 7 || 2 < 1) // utskriften blir false
console.log(4 < 2 || 3 > 1) // utskriften blir true

// for at et uttrykk med "||"" skal være true så må bare det som står på en av sidene være sann og ikke begge


// Oppgave 6
console.log(5 > 3 && 10 > 5 || 2 === 2) // utskriften blir true
console.log(4 < 2 && 3 > 1 || 10 === 10) // utskriften blir true
console.log(5 === 5 && 3 > 10 || 8 < 12) // utskriften blir true

// Parenteser kan være nyttige for å tydeliggjøre rekkefølgen siden && har høyere prioritet enn ||.