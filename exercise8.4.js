// Lösningsförslag på uppgift 8.4
// Observera att det finns flera sätt att organisera datan på! Bara för att din lösning är annorlunda behöver den inte vara fel. Men olika lösningar är olika lämpade, beroende på vad man försöker göra med dem.


// a
const hogwarts = {
	students: 256,
	adress: 'Skolgatan 1',
	city: 'Norrköping'
};

// b
const teachers = {
	Björn: ['musik'],
	Benny: ['NO', 'teknik'],
	Birgitta: ['AI', 'svenska'],
}

// c
const month = {
	jan: 31,
	feb: 28,
	mar: 31,
	apr: 30,
	maj: 31,
	jun: 30,
	jul: 31,
	aug: 31,
	sep: 30,
	okt: 31,
	nov: 30,
	dec: 31
}
let year = {
	days31: ['january', 'march', 'may', 'july', 'august', 'october', 'december'],
	days30: ['april', 'june', 'september', 'november'],
	days28: ['february'],
	days29: ['february']
}

// d
let HassesTamburinfabrik = {
	employees: ['Hasse', 'Hedwig', 'Hermione'],

	products: {
		T1: { price: 200 },
		T2: { price: 250 },
		T3: { price: 320 }
	},

	orders: {
		Horatio: {
			firstOrder: {
				product: this.products.T1,
				price: this.products.T1.price,
				amount: 1
			},

			secondOrder: {
				product: this.products.T2,
				price: this.products.T2.price,
				amount: 2
			}
		}
	}
}

const orders = [
	{ customer: "Horatio", product: "T1", quantity: 1 },
	{ customer: "Horatio", product: "T2", quantity: 2 }
];
console.log(orders);

// f
const books = {
	fantasy:
		'sagan om ringen, J.R.R Tolkien',

	scienceFiction:
		'Stiftelsen, Isaac Asimov',

	scienceFictionAndFantacy:
		'Mistborn, Brandon Sanderson',

	unclassifeid:
		'The wheel of time, Robert Jordan'
}

console.log('Fantacy: ' + books.fantacy, 'Science fiction: ' + books.scienceFiction, 'Science Fiction And Fantacy: ' + books.scienceFictionAndFantacy, 'Unclassifeid: ' + books.unclassifeid);

let ylvasBokaffär = {
	books: {
		'Sagan om ringen': {
			author: 'J.R.R. Tolkien',
			genre: ['Fantasy']
		},
		'Stiftelsen': {
			author: 'Isaac Asimov',
			genre: ['Science fiction'],
		},
		'Mistborn, the alloy of law': {
			author: 'Brandon Sanderson',
			genre: ['Science fiction', 'Fantasy']
		},
		'The wheel of time': {
			author: 'Robert Jordan',
			genre: ['Unclassified']
		}
	}
}

ylvasBokaffär.books['The wheel of time'].genre

let ylvasBokaffär = {
	books: [
		{
			title: 'Sagan om ringen',
			author: 'J.R.R. Tolkien',
			genre: ['Fantasy']
		},
		{
			title: 'Stiftelsen',
			author: 'Isaac Asimov',
			genre: ['Science fiction'],
		},
		{
			title: 'Mistborn, the alloy of law',
			author: 'Brandon Sanderson',
			genre: ['Science fiction', 'Fantasy']
		},
		{
			title: 'The wheel of time',
			author: 'Robert Jordan',
			genre: ['Unclassified']
		}
	]  // books
}



