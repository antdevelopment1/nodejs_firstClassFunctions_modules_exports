// Function Statement
function greet() {
    console.log("Hi");
}
greet();

// Functions are first class.
function logGreeting(fn) {
    fn();
};
logGreeting(greet);

//  Function Expression - This is also a first class function.
var greetMe = function() {
    console.log("Hi, Tony.")
};
greetMe();
logGreeting(greetMe);

//  Using the function expression on the fly.
logGreeting(function() {
    console.log("Hello Tony!");
});