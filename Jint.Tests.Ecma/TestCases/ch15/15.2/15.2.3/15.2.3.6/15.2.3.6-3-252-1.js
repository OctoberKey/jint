/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-252-1.js
 * @description Object.defineProperty - 'Attributes' is a Number object that uses Object's [[Get]] method to access the 'set' property of prototype object (8.10.5 step 8.a)
 */


function testcase() {
        var obj = {};
        var data = "data";
        try {
            Number.prototype.set = function (value) {
                data = value;
            };
            var numObj = new Number(-2);

            Object.defineProperty(obj, "property", numObj);
            obj.property = "overrideData";

            return obj.hasOwnProperty("property") && data === "overrideData";
        } finally {
            delete Number.prototype.set;
        }
    }
runTestCase(testcase);
