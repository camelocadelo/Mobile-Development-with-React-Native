const o = new Object()
o.firstName = "Kamilla";
o.lastName = "Kenzhe";
o.isTeaching = false
o.greet = function() {
    console.log('hi!');
}

const o2 = {}
o2.firstName = "Kamilla";
o2['lastName'] = 'Kenzhe'
const key = "isTeaching"
o2[key] = true
o2['greet'] = function () {
	console.log('hi hi')
}

const o3 = {
	firtstName: "Kamilla",
	lastName:"Kenzhe",
	isTeaching: false,
	greet: function () {
		console.log('hihihih!')
	},
	address: {
		street: "Kabanbay",
		number: 123,
	},
}
