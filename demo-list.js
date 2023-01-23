let list1 = [1, 2, 3]
let list2 = list1
let list3 = [ ...list1 ]
let list4 = []

list1[1] = list1[1] * 10

list2.push(5)

console.log(list1)
console.log(list2)
console.log(list3)

for( let i=0; i<list3.length; i = i + 1 ) {
	let item = list3[i]
	list4.push( item + 10 )
}

console.log(list4)
