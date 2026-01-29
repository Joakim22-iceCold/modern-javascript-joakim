// Joakim Bøe-Sørbo Oppgavesett 10 callback funksjoner

// Oppgave 1
// a)
function helloWorld() {
  console.log("Hello World");
}

function imAlive() {
  console.log("I'm alive!");
}

function greenLife() {
  console.log("Its not easy being green!");
}

helloWorld();
imAlive();
greenLife();


// b)
function executor(fn) {
  fn();
}

executor(() => console.log("Amors piler treffer alltid i hjertet!"));
executor(() => console.log("Cri’ Cri’ d’amore!"));
executor(() => console.log("Parles vous francois?"));


// Oppgave 2
// a)
function sayHello(name) {
  console.log(`Hello ${name}`);
}

function loggedIn(name) {
  console.log(`${name} just logged in`);
}

function loggedOut(name) {
  console.log(`${name} just logged out`);
}

sayHello("Kim Tran");
loggedIn("Svein Are Brekke");
loggedOut("Jonatan Sønderland Brekke");


// b)
function executor(fn) {
  fn();
}

executor(() => console.log("Franskmenn liker ikke piler"));

executor(() => console.log("Piler kan være farlige, eller de kan bare vise vei!"));

executor(() => console.log("Pilgård er ikke en pil, selv om han piler fra sted til sted!"));


// Oppgave 3

function runRoutine(...routines) {
  let index = 0;
  let lastTime = Date.now();

  function runNext() {
    if (index >= routines.length) return;

    const delay = Math.random() * 2000;

    setTimeout(() => {
      const now = Date.now();
      console.log(
        `Tid siden forrige kall: ${((now - lastTime) / 1000).toFixed(2)} sek`
      );

      routines[index]();
      lastTime = now;
      index++;
      runNext();
    }, delay);
  }

function taskA() {
  console.log("Oppgave A");
}

function taskB() {
  console.log("Oppgave B");
}

function taskC() {
  console.log("Oppgave C");
}

const tasks = [taskA, taskB, taskC];
const routineCalls = [];

for (let i = 0; i < 10; i++) {
  routineCalls.push(tasks[i % tasks.length]);
}

runRoutine(...routineCalls)};

function runRoutine(...routines) {
  let index = 0;
  let lastTime = Date.now();

  function next() {
    if (index >= routines.length) return;

    const delay = Math.random() * 2000;

    setTimeout(() => {
      const now = Date.now();
      console.log(
        `Tid siden forrige kall: ${((now - lastTime) / 1000).toFixed(2)} sek`
      );

      routines[index]();
      lastTime = now;
      index++;
      next();
    }, delay);
  }

  next();
}

const functions = [
  () => console.log("Funksjon 1"),
  () => console.log("Funksjon 2"),
  () => console.log("Funksjon 3")
];

const calls = [];

for (let i = 0; i < 10; i++) {
  calls.push(functions[i % functions.length]);
}

runRoutine(...calls);