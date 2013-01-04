// each, map, reduce, extend (with deep copy), filter, sameAs,

var vex = { }

//adapted from the accepted answer at http://stackoverflow.com/questions/8273047/javascript-function-similar-to-python-range
vex.range = function(start, stop, step) {
    if (typeof(stop) === 'undefined') {
        var stop = start;
        var start = 0;
    };
    if (typeof(step) === 'undefined') {
        var step = 1;
    };
    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)){
        return [];
    };
    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step){
        result.push(i);
    };
    return result;
};

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

var reduce = function(data, accum, function, context) {
    
}

vex.sameAs = function(data1, data2) {
    //free lunches
    if (data1 === data2) {
        return true;
    }
    // ARE THE FOLLOWING TWO REDUNDANT?
    if (typeof(data1) !== typeof(data2)) {
        return false;
    }
    if (data1.__proto__ !== data2.__proto__) {
        return false;
    }

    if ((typeof(data1) === 'string' && typeof(data2) === 'string') || (typeof(data1) === 'number' && typeof(data2) === 'number')) {
        return data1 === data2;
    }

    //arrays, or it never ends
    if (data1.length === 0 && data2.length === 0) {
        return true;
    }

    if (data1.length && data2.length) {
        if (!(data1.length === data2.length)) {
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

    attr1 = [];
    attr2 = [];
    //first, check for ECMAScript 5 lovely stuff
    if (Object.keys) {
        attr1 = Object.keys(data1);
        attr2 = Object.keys(data2);
    }
    else { 
        for (var attr in data1) {
           attr1.push(data1[attr]);
        }
        for (var attr in data2) {
           attr2.push(data2[attr]);
        }
    }
    if (vex.sameAs(attr1, attr2)) {
        //use each
        for (var j = 0; j < attr1.length; j++) {
            if (data1[attr1[j]] !== data2[attr2[j]]) {
                return false;
            }
        }
        //still here?
        return true;
    }
    else {
        return false;
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