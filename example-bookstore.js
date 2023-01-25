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

// Vilka böcker har affären inne? (jag vill veta titel)
for( let index=0; index < ylvasBokaffär.books.length; index = index + 1 ) {
	const book = ylvasBokaffär.books[index]
	// book har: title, author, genre
	console.log('Boken har titeln: ' + book.title)
	if( book.genre.includes('Fantasy') ) {
		console.log('(fantasy)')
	}
	// En egen includes-funktion: listIncludes(book.genre, 'Fantasy')
}

// Man kan göra en egen includes-funktion:
function listIncludes(list, searchValue) {
	for (let i = 0; i < list.length; i++) {
	// for (let value in list ) {
		const value = list[i]
		if( value === searchValue ) {
			return true
		}
	}
	return false
}

