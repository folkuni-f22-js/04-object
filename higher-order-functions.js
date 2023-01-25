// funktion som returnerar en funktion
function f1() {
	return () => { console.log('Hello') }
}

let printFunction = f1()
// printFunction()


// funktion som tar en funktion som parameter
function f2(f) {
	f('Hello again')
}

// f2( console.log )



const employees = [
	{ name: 'Abdulah', salary: 25000 },
	{ name: 'Ali', salary: 30000 },
	{ name: 'Annika', salary: 32000 },
	{ name: 'Ann-Sophie', salary: 27000 },
]

/*
for( let i=0; i<employees.length; i++ ) {
	console.log(employees[i].name)
}

for (let employee of employees) {
	console.log(employee.name)
}

employees.forEach(employee => {
	console.log(employee.name)
})
*/

let names = employees.map(employee => employee.name)
console.log( employees )
/*console.log( names )

let namesWithTitles = names.map(name => 'Master programmer ' + name)
console.log( namesWithTitles )

// Elite haxxor level - men kanske svårläst
employees.map(employee => employee.name).map(name => 'Master programmer ' + name).forEach(nameWithTitle => { console.log(nameWithTitle) })
*/

const threshold = 29000
let highlyPaidEmployee = employees.find(employee => employee.salary > threshold)
console.log(`${highlyPaidEmployee.name} har en lön över ${threshold}.`)

let allHighlyPaid = employees.filter(employee => employee.salary > threshold)
allHighlyPaid.forEach(employee => { console.log(employee.name) })
