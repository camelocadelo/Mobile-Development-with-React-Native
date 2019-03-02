function map (arr, fn) {
        const newArr = []

        arr.forEach(function(val) {
		newArr.push(fn(val))
	})
        return newArr
}

function addOne(num) { return num+1 }

const x = [0,1,2,3]

console.log(map(x, addOne))


/*function map (arr, fn) {
        const newArr = []

        for (let i=0; i <arr.length; i++) {
		let val = arr[i]
                newArr.push(fn(val))
        }
        return newArr
}

function addOne(num) { return num+1 }

const x = [0,1,2,3]

console.log(map(x, addOne))
*/

/*function map (arr, fn) {
	const newArr = []

	for (let i=0; i <arr.length; i++) {
		newArr[i] = fn(arr[i])
	}
	return newArr
}

function addOne(num) { return num+1 }

const x = [0,1,2,3]

console.log(map(x, addOne))

*/

function reduce(arr, fn) {
	result  = arr[0]
	for (let i = 1; i<arr.length; i++) {
		result = fn(result, arr[i])
	}
	return result
}

function add(x,y) { return x+y}

function multiply(x,y) {return x*y}

const newArray = [1,2,3,4]

//console.log(reduce(newArray, multiply))

function filter( arr, fn) {
	const newArr = []
	for (let i=0; i<arr.length; i++) {
		if (fn(arr[i])) {
			newArr.push(arr[i])
		}
	}
	return newArr
}


function isGreaterThanTwo (num1) { return num1>2 }

const array1 = [0,1,2,3,4,5,6]

console.log(filter(array1, isGreaterThanTwo))



