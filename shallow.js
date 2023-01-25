
let shoeStore = {
	owner: 'Sune Sandal',
	products: ['Sneakers', 'Sandal', 'Stövel'],
	address: {  // Skogatan 7
		street: 'Skogatan',
		number: 7
	}
}

console.log(shoeStore)

let another = { ...shoeStore, address: {...shoeStore.address} }

shoeStore.owner = 'Ture Svensson'
shoeStore.products = []
shoeStore.address.number = 11

console.log('First store', shoeStore)
console.log('New store', another)
