var wrapper = function(){}
var app = new wrapper();

// method doing something
app.process = function(i, o) {
    return i + '-hello-' + o + '-world-';
    }

// Create an array.
var x = [1, 4, 3, 6];

// Reduce method, which calls the callback function
// for each array element.
var result = x.reduce(app.process);
//
console.log(result)

