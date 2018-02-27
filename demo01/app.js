/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	function greeter(person) {
	    return "Hello, " + person;
	}
	var user = "Mark Xiao";
	document.body.innerHTML = greeter(user);
	var age = 30;
	console.log('age', age);
	function test(age) {
	    return 'your age is ' + age;
	}
	console.log('xxx: ', test(14));
	function test2(person) {
	    return person.age;
	}
	var user2 = { firstName: 'Mark', lastName: 'Xiao', age: 25 };
	console.log('xxx: ', test2(user2));
	var Student = /** @class */ (function () {
	    function Student(firstName, lastName, age) {
	        this.firstName = firstName;
	        this.lastName = lastName;
	        this.age = age;
	        // code...
	        this.fullName = firstName + ' ' + lastName;
	    }
	    return Student;
	}());
	var user3 = new Student('mark', 'Xiao3', 21);
	console.log('xxx: ', test2(user3));


/***/ })
/******/ ]);