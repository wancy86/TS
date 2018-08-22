define(["require", "exports", "./app01"], function (require, exports, app01_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log('name145: ', app01_1.name145);
    console.log('xxx: ', 111);
    function test() {
        console.log('xxx: ', 'test');
        console.log(123);
        return function (x) { return x + 1; };
    }
    exports.test = test;
});
