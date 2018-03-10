// function greeter(person) {
// 	return "Hello, " + person;
// }

// let user = "Mark Xiao";

// document.body.innerHTML = greeter(user);

// const age: number = 30;
// // console.log('age', age);

// function test(age: number) {
// 	return 'your age is ' + age;
// }
// // console.log('xxx: ', test(14));

// interface Person {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// }

// function test2(person: Person) {
// 	return person.age;
// }

// let user2 = { firstName: 'Mark', lastName: 'Xiao', age: 25 };
// // console.log('xxx: ', test2(user2));

// class Student {
// 	fullName: string;
// 	constructor(public firstName: string, public lastName: string, public age: number) {
// 		// code...
// 		this.fullName = firstName + ' ' + lastName;
// 	}
// }

// let user3 = new Student('mark', 'Xiao3', 21)
// // console.log('xxx: ', test2(user3));

// // enum
// enum Color { Red, Greed, Blue }
// let favouritColor: Color = Color.Greed;
// // console.log('favouritColor',favouritColor);

// let a: Array<number> = [1, 2, 3];
// let b: number[] = [2, 3, 4];
// // console.log('xxx: ',a);

// // Basic Type
// // sting, number,boolean, array, tuple

// // tuple
// let t: [string, number];
// t = ['mark', 100]
// // console.log('xxx: ',t);

// // any
// let a3: any = 123;

// // void - no return
// function showHello(): void {
// 	console.log('hello void');
// }
// // showHello();

// // null and undefined

// // type assertions
// let a69: any = '123123'
// let n70: number;

// n70 = (<string>a69).length
// n70 = (a69 as string).length
// // console.log('xxx: ',n70);

// let someValue: any = "this is a string";
// let strLength: number = (someValue as string).length;

// let [first, ...rest] = [1, 2, 3, 4];
// // console.log(first); // outputs 1
// // console.log(rest); // outputs [ 2, 3, 4 ]

// function f([first, second]: [number, number]) {
// 	console.log(first);
// 	console.log(second);
// }
// // f([1, 2]);



// // Default values
// function keepWholeObject(wholeObject: { a: string, b?: number }) {
// 	let { a, b = 1001 } = wholeObject;
// }

// // class
// class Greeter {
// 	greeting: string;
// 	constructor(message: string) {
// 		this.greeting = message;
// 	}
// 	greet() {
// 		return 'hello, ' + this.greeting;
// 	}
// }

// let c108 = new Greeter('mark');
// let msg109 = c108.greet();
// // console.log('xxx: ', msg109);

// // extend
// class Animal {
// 	private name: string;
// 	constructor(name: string) {
// 		this.name = name;
// 	}
// 	move(distanceInMeters: number = 0) {
// 		// console.log('Animal moved '+distanceInMeters+'M.');
// 		console.log(`Animal moved ${distanceInMeters}M.`);
// 	}
// }

// class Dog extends Animal {
// 	constructor(name: string) {
// 		super(name);
// 	}
// 	bark() {
// 		// console.log(`${this.name} is woofing!`);
// 	}
// }

// let dog = new Dog('TomCat')
// dog.bark()
// dog.move(100)
// let cat = new Animal('Jerry');
// // console.log('xxx: ', cat.name);

// // console 还可以这么玩 - 反引号的使用
// // function hello(msg) {
// //         console.log(`hello, ${msg}`);
// // }
// // hello('mark')

import { name145 } from './app01';
console.log('name145: ', name145);