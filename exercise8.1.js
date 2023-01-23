/*
1a Skapa ett objekt som innehåller information om en stad. Det ska innehålla till exempel stadens namn, antal invånare, latitud och longitud, vilket land den finns i.

1b Gör en funktion som heter move. När den anropas med objektet, ska den simulera att en person flyttar till en annnan stad. Dvs antal invånare ska minskas med en.
*/
const city = {
	name: 'Karlstad',
	population: 93898,
	country: 'Sverige'
}
const anotherCity = {
	name: 'Malung',
	population: 5126,
	country: 'Sverige'
}

function move(city) {
	city.population = city.population - 1
	// ingen return behövs
}
function betterMove(fromCity, toCity) {
	fromCity.population = fromCity.population - 1
	toCity.population = toCity.population + 1
}

betterMove(city, anotherCity)
betterMove(city, anotherCity)
console.log(city, anotherCity)
