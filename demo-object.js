// Utan objekt - massa variabler
let shoeStoreOwner = 'Sune Sandal'
let shoeStoreAddress = 'Skogatan 7'


// Skapa ett objekt med egenskaper och en metod
// property och method
let shoeStore = {
	owner: 'Sune Sandal',
	address: 'Skogatan 7',
	city: 'Småland',
	print() {
		// "this" sätts till "shoeStore"
		// console.log(shoeStore.owner, shoeStore.address)  <- fungerar men man gör bara inte så
		console.log(this.owner, this.address)
		console.log( this.obj.x )
		// console.log(owner, address)  <- error
	},
	obj: { x: 15, y: 20, price: 50 }
}

let icecreamStore = {
	owner: 'Gurre Glass',
	shout() {
		console.log('Kom och ät glass! Bara ' + shoeStore.obj.price + 'kr!')
	}
}

// console.log( 'shoeStore: ', shoeStore )

shoeStore.print()
icecreamStore.shout()

for(let prop in icecreamStore) {
	console.log('icecream property: ' + prop)
	const value = icecreamStore[prop]
	console.log('icecream value: ' + value)
}