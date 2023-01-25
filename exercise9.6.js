/*
9.6 Skapa en lista med 10 slumpade tal mellan 20 och 30. Du kan använda funktionen randomInt från uppgift 6.13. Sedan ska du skapa funktioner som:
a Returnerar det största värdet i en lista.Testa den på din slumpade lista, tre gånger.
b Returnerar det minsta värdet.
c Returnerar medelvärdet.
d Returnerar det näst största värdet.

Tips: börja med att lösa uppgiften utan en funktion, om det är enklare.

6.13 Skriv en funktion som returnerar ett slumpat heltal inom ett intervall. Dvs ett heltal mellan värdet på parametrarna min och max, inklusive.
*/
function randomInt(min, max) {
	let r = Math.random()  // tal mellan 0 och 1, inklusive 0 men exklusive 1
	let i = r * (max - min + 1)
	return Math.floor(i) + min
}

// använd randomInt för att slumpa tal, ett i taget
// vi behöver en loop - 10 varv
function makeList() {
	let list = []
	for( let i=0; i<10; i++ ) {
		list.push( randomInt(20, 30) )
	}
	return list
}


// a Returnerar det största värdet i en lista.Testa den på din slumpade lista, tre gånger.
function findMax(list) {
	// gå igenom alla värden, från vänster till höger
	// kom ihåg det högsta
	// returnera värdet

	let maximumSoFar = list[0]
	for( let i=1; i<list.length; i++ ) {
		if( list[i] > maximumSoFar ) {
			maximumSoFar = list[i]
		}
	}
	return maximumSoFar
}
// Alternativ lösning - fiffig men tränar inte på loopar...
// function biggestNumber(arr) {
// 	return Math.max(...arr)
// }

// b Returnerar det minsta värdet.
function findMin(list) {
	// gå igenom alla värden, från vänster till höger
	// kom ihåg det lägsta
	// returnera värdet

	let minimumSoFar = list[0]
	for( let i=0; i<list.length; i++ ) {
		if( list[i] < minimumSoFar ) {
			minimumSoFar = list[i]
		}
	}
	return minimumSoFar
}
function findCondition(list, condition) {
	// Det går att använda Abstraction för en mer flexibel funktion
	// Men den blir också mer komplicerad
	let matchSoFar = list[0]
	for (let i = 0; i < list.length; i++) {
		if (condition(matchSoFar, list[i])) {
			matchSoFar = list[i]
		}
	}
	return matchSoFar
}

const compareNumbers = (x, y) => x - y;

// huvudfunktion - returnerar MINSTA värde
// Sparar utvecklarens tid - på bekostnad av användaren
// Ofta märks inte den här skillnaden
function returnLowestValue(x) {
	x.sort(compareNumbers);
	return x[0]  //x.slice(0, 1);
}


// console.log(findMax([1]))  // 1
// console.log(findMax([1, 2, 3, 4, 5]))  // 5
// console.log(findMax([10, 9, 8, 7]))  // 10
let list1 = makeList()
let list2 = makeList()
let list3 = makeList()
console.log('Störst är ' + findMax(list1), list1)
console.log('Störst är ' + findMax(list2), list2)
console.log('Störst är ' + findMax(list3), list3)

let list4 = makeList()
console.log('Minst är ' + findMin(list4), list4)
console.log('Condition min: ', findCondition(list4, (old, x) => x < old))
console.log('Condition max: ', findCondition(list4, (old, x) => x > old))



// c Returnerar medelvärdet. ( summa / antalet värden )
function average(list) {
	// räkna ut summan av alla värden
	// - gå igenom alla värden från vänster till höger
	// - lägg ihop två värden
	// - kom ihåg summan hittills
	// dela med antalet värden
	// returnera
	let sumSoFar = 0
	for( let i=0; i<list.length; i++ ) {
		sumSoFar = sumSoFar + list[i]
	}
	// console.log('summan är: ', sumSoFar, list)
	return sumSoFar / list.length
}

console.log('Medelvärde: ', average(list1), list1)
console.log('Medelvärde: ', average(list2), list2)
console.log('Medelvärde: ', average(list3), list3)



// d Returnerar det näst största värdet.
// Lämnas som en övning till er
// Utöka findMax med två variabler och anpassa koden!
