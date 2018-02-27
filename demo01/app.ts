function greeter(person) {
	return "Hello, " + person;
}

let user = "Mark Xiao";

document.body.innerHTML = greeter(user);

const age: number = 30;
console.log('age', age);

function test(age: number) {
	return 'your age is ' + age;
}
console.log('xxx: ', test(14));

interface Person {
	firstName: string;
	lastName: string;
	age: number;
}

function test2(person: Person) {
	return person.age;
}

let user2 = { firstName: 'Mark', lastName: 'Xiao', age: 25 };
console.log('xxx: ', test2(user2));

class Student {
	fullName: string;
	constructor(public firstName: string, public lastName: string, public age: number) {
		// code...
		this.fullName = firstName + ' ' + lastName;
	}
}

let user3 = new Student('mark', 'Xiao3', 21)
console.log('xxx: ', test2(user3));