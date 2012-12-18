// each, map, reduce, extend (with deep copy), filter, sameAs,

var vex = { }

vex.isArray = function(toTest) {
    if (toTest.length && typeof(toTest) !== 'string') {
        return true;
    }
    else {
        return false;
    }
};

// performs the function for each element in an object
vex.each = function(data, funct, context) {
    //array?
    if (data.length) {
        for (var i = 0; i < data.length; i++) {
            funct.call(context, data[i], i, data);
        }
    }
    //object
    else {
        for (var key in data){
            funct.call(context, data[key], key, data);
        }
    }
};

//returns a LIST of mapped values from an object
vex.map = function(data, funct, context) {
    var result = []
    vex.each(data, function(val, index, list) {
        result[result.length] = funct.call(context, val, index, context);
    })
    return result
};

// var reduce = function(data, accum, function, context) {

// }

vex.sameAs = function(data1, data2) {
    //catches strings and integers
    if (data1 === data2) {
        return true;
    }

    if (typeof(data1) !== typeof(data2)) {
        return false;
    }

    // for arrays
    if (data1.length && data2.length) {
        if (data1.length !== data2.length) {
            return false;
        }
        else {
            for (var i = 0; i < data1.length; i++) {
                if (data1[i] !== data2[i]) {
                    return false;
                }
            }
            return true;
        }
    }

    //ok, object literals
    if (data1.proto !== data2.proto) {
        return false;
    }
    //defer to ECMAScript 5 lovely stuff
    if (Object.getOwnPropertyNames) {
        if vex.sameAs(Object.getOwnPropertyNames(data1)
    }
    if 
    for (var attr in data1) {
        if (data2.hasOwnProperty(attr)) {
            return vex.sameAs(data1[attr], data2[attr])
        }
        else {
            return false;
        }
    }

}

// _.map = _.collect = function(obj, iterator, context) {
//     var results = [];

//     if (obj == null) {
//         return results;
//     }

//     if (nativeMap && obj.map === nativeMap) {
//         return obj.map(iterator, context);
//     }

//     each(obj, function(value, index, list) {
//         results[results.length] = iterator.call(context, value, index, list);
//     });

//     return results;
// };




// var each = _.each = _.forEach = function(obj, iterator, context) {
//     if (obj == null) {
//         return;
//     }

//     if (nativeForEach && obj.forEach === nativeForEach) {
//         obj.forEach(iterator, context);
//     }

//     else if (obj.length === +obj.length) {
//         for (var i = 0, l = obj.length; i < l; i++) {
//             if (iterator.call(context, obj[i], i, obj) === breaker){
//                 return;
//             }
//         }
//     }

//     else {
//         for (var key in obj) {
//             if (_.has(obj, key)) {
//                 if (iterator.call(context, obj[key], key, obj) === breaker) {
//                     return;
//                 }
//             }
//          }
//     }

// };