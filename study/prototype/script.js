let user = {
	name: "john",
	age: 45
};
console.log(user.name); // john
console.log(user.hasOwnProperty("email")); // false

function Person(name, email, birthday) {
	// 3
	let person_test = Object.create(personsPrototype); // Object.create로 수정
	
	person_test.name = name;
	person_test.email = email;
	person_test.birthday = new Date(birthday);

	return person_test;
}

// 3
const personsPrototype = {
	calculateAge() { // calculateAte를 calculateAge로 수정
		const diff = Date.now() - this.birthday.getTime(); // = 대신 -로 수정
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);	
	}
};

const john = new Person('john', 'john@gmail.com', '7-10-91');
const han = new Person('han', 'han@gmail.com', '2-8-91');

console.log(john);
console.log(han);
console.log('john.calculateAge() : ',john.calculateAge()); // 나이 계산
