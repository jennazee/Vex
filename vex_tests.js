var arr = [8,5,6,8,1,3,5];
var arr_copy = [8,5,6,8,1,3,5];
var arr_rev = [5, 3, 1, 8, 6, 5, 8]

var str_obj = { 'jenna': 'girl', 'josh': 'boy'};
var str_obj_copy = { 'jenna': 'girl', 'josh': 'boy'};
var str_obj_longer = { 'jenna': 'girl', 'josh': 'boy', 'mom': 'girl'};
var str_obj_diff = { 'betsy': 'girl', 'natan': 'boy'};
var num_obj = { 'jenna': 23, 'josh': 18};
var num = 5;
var str = 'My name is Jenna!'
var mult2 = function(i) { return i*2; };
var speak = function() { console.log('hi'); };


//TESTS

// *************
//  vex.range
// **************
if (!(vex.sameAs(vex.range(5), [0,1,2,3,4]))) console.log('FAILED: range failed on single arg');
if (!(vex.sameAs(vex.range(3,6), [3,4,5]))) console.log('FAILED: range failed on (start, stop)');
if (!(vex.sameAs(vex.range(0,10,2), [0, 2, 4, 6, 8]))) console.log('FAILED: range failed on (0, stop, +step)');
if (!(vex.sameAs(vex.range(10, 0, -2), [10, 8, 6, 4, 2]))) console.log('FAILED: range failed on (start, 0, -step)');
if (!(vex.sameAs(vex.range(8, 2, -2), [8,6,4]))) console.log('FAILED: range failed on (start, stop, -step)');
if (!(vex.sameAs(vex.range(8, 2), []))) console.log('FAILED: range failed on (start > stop)');
if (!(vex.sameAs(vex.range(1, 5, -2), []))) console.log('FAILED: range failed on (start < stop, -step)');


// // *************
// //  vex.isArray
// // **************
if (vex.isArray(arr)!== true) console.log('FAILED: isArray failed on an array');
if (vex.isArray(str_obj)!== false) console.log('FAILED: isArray failed on an object');
if (vex.isArray(num_obj)!== false) console.log('FAILED: isArray failed on an object');
if (vex.isArray(num)!== false) console.log('FAILED: isArray failed on a number');
if (vex.isArray(str)!== false) console.log('FAILED: isArray failed on a string');
if (vex.isArray(speak)!== false) console.log('FAILED: isArray failed on a function');

// // *************
// //  vex.sameAs
// // **************
// //arrays
if (vex.sameAs(arr, arr_rev)!== false) console.log('FAILED: sameAs failed on same length array');
if (vex.sameAs(arr, arr_copy)!== true) console.log('FAILED: sameAs failed on same array');
if (vex.sameAs(arr, arr.slice(0,4))!== false) console.log('FAILED: sameAs failed on different length arrays');

// // strings
if (vex.sameAs('hi', 'hello')!== false) console.log('FAILED: sameAs failed on 2 different length strings');
if (vex.sameAs('cello', 'hello')!== false) console.log('FAILED: sameAs failed on 2 same length strings');
if (vex.sameAs(str, str)!== true) console.log('FAILED: sameAs failed on same string');

// // objects
if (vex.sameAs(num_obj, str_obj)!== false) console.log('FAILED: sameAs failed on two objs with same attr names');
if (vex.sameAs(str_obj_copy, str_obj)!== true) console.log('FAILED: sameAs failed on same objs');
if (vex.sameAs(str_obj, str_obj_longer)!== false) console.log('FAILED: sameAs failed on two objs with different lengths');
if (vex.sameAs(str_obj_diff, str_obj)!== false) console.log('FAILED: sameAs failed on two different objs with same lengths');

// // different types
if (vex.sameAs(arr, str_obj)!== false) console.log('FAILED: sameAs failed on array/obj');
if (vex.sameAs(arr, str)!== false) console.log('FAILED: sameAs failed on array/string');