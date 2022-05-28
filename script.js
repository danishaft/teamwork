
document.querySelector('.team-name').textContent = 'Artemis';
document.querySelector('.team-name').style.color = '#2A265F';

/* number 2*/
const team = [
    "Merit",
    "Abdulsamad",
    "Comely",
    "Gabriel-Eta Ekpo",
    "Emmanuel Stephen",
    "Ayobami SO",
    "Danny",
];

console.log(team[6]);

/* number 3*/

const person = {
    firstName: "Danny",
    lastName: "Ejeh",
    bestMovie: "Money Heist",
    bestFood: "French Fries",
    complexion: "Dark",
    birthMonth: "August",
    state: "Benue",
    groupName: "Artemis"
};

console.log(person.bestMovie)



/* number 4*/

const noun = "Dog";
const verb = "Barking";
const adjective = "Black";

const sentence1 = `The ${adjective} ${noun} is ${verb}`;
const sentence2 = `She was scared of the ${adjective} ${noun}`;
const sentence3 = `The ${adjective} ${noun} is dead`;
const sentence4 = `He ran away when he heard the ${adjective} ${noun} ${verb}`;
const sentence5 = `No one heard the ${noun} ${verb}`;

console.log(sentence1);
console.log(sentence2);
console.log(sentence3);
console.log(sentence4);
console.log(sentence5);



/* number 5*/

const equation = remainder(5,2);

function remainder(a,b) {
    return a % b;
};

console.log(equation);


/* number 6*/

const quadraticEquation = quadratic(1,5,-14);

function quadratic(a,b,c) {
    const r1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    const r2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    const output = `The roots are ${r1} and ${r2}`;
    return output;
};

console.log(quadraticEquation);


/* number 7*/

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = `The ${myAdjective} ${myNoun} ${myVerb} home ${myAdverb}`;

console.log(wordBlanks);

/* number 8*/

const circleEquation = areaOfCircle();

function areaOfCircle() {
   const area = (3.14 * Math.pow(9, 2));
    return area;
};

console.log(circleEquation);



/* number 9*/

const p = 8200;
const r = 17.5;
const t = 2.5;

const simpleIntrest = (p * r * t) / 100;

console.log(simpleIntrest);


/* number 10*/

const smallEquation = 10 % 4;
console.log(smallEquation);


/* number 11 */

const meritHeight = 1.69;
const meritMass = 78;

const meritBMI = (78 / Math.pow(1.69, 2));

const nutjobHeight = 1.95;
const nutjobMass = 92;

const nutjobBMI = (92 / Math.pow(1.95, 2));


const meritHigherBMI = (meritBMI > nutjobBMI);

console.log(meritHigherBMI);