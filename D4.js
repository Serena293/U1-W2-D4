/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
const area = function (l1, l2) {
  let areaDelRettangolo = l1 * l2;
  return areaDelRettangolo;
};
console.log("L'area del rettangolo è: " + area(3, 4));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
const crazySum = function (num1, num2) {
  if (num1 !== num2) {
    return num1 + num2;
  } else {
    return (num1 + num2) * 3;
  }
};

console.log("Somma di due numeri diversi tra loro" + crazySum(2, 8));
console.log(
  "Somme di due numeri uguali moltiplicata per tre " + crazySum(2, 2)
);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (num) {
  let diff = Math.abs(num - 19);
  return diff;
};
console.log("Differenza assoluta tra num e il diciannove " + crazyDiff(3));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  let veroFalso = (n > 20 && n <= 100) || n === 400 ? true : false;

  return veroFalso;
};
console.log("Esercizio 4 falso " + boundary(9));
console.log("Esercizio 4 vero " + boundary(80));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (str) {
  if (str.slice(0, 7) === "EPICODE") {
    return str;
  } else {
    return "EPICODE" + str;
  }
};
console.log("Esercizio 5 " + epify("è una scuola di programmazione"));
console.log("Esercizio 5" + epify("EPICODE è una scuola di programmazione"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (num) {
  let multiplo = num % 7 === 0 || num % 3 === 0 ? true : false;
  return multiplo;
};
console.log("Es. 7 " + check3and7(21));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (str) {
  let reversed = str.split("").reverse().join("");
  return reversed;
};
console.log("Es 7: " + reverseString("Ciao"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (str) {
  let splitted = str.split(" ");
  for (let i = 0; i < splitted.length; i++) {
    splitted[i] = splitted[i][0].toUpperCase() + splitted[i].slice(1);
  }
  return splitted.join(" ");
};

console.log(upperFirst("mi chiamo serena"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (str) {
  let newStr = str.slice(1, str.length - 1);
  return newStr;
};
console.log("Es 9: " + cutString("Serena"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n) {
  const arrayRandomNumbers = [];

  for (let i = 0; i < n; i++) {
    arrayRandomNumbers.push(Math.floor(Math.random() * n));
  }
  return arrayRandomNumbers;
};
console.log(giveMeRandom(6));
