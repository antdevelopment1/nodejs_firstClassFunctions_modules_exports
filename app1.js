// This is an object with key name values pairs and a greet function that is also key name value pair.
var person = {
    firstname: "John",
    lastname: "Doe",
    greet: function() {
        console.log("Hello " + this.firstname + " " + this.lastname);
    }
};

person.greet();
console.log(person["firstname"]);

// Function Constructor
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}
Person.prototype.greet = function() {
    console.log("Hello " + this.firstname + " " + this.lastname);
};
var john = new Person("John", "Doe");
var lauren = new Person("Lauren", "Copes");
var april = new Person("April", "Hill");
console.log(john.firstname);
console.log(lauren.firstname);
console.log(april.firstname);
john.greet();
lauren.greet();
april.greet();

console.log(john.__proto__);
console.log(lauren.__proto__);
console.log(april.__proto__);
console.log(lauren.__proto__ === april.__proto__)

// Pass by value
function change(b) {
    b = 2
}
var a = 1;
change(a);
console.log(a);
// Outputs the value 1


// Pass by reference
function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);
// Outputs the value { prop1: [Function], prop2: {} }
function change(b) {
    b = 2
}
var a = 1;
change(a);
console.log(a);
// Outputs the value 1


// Pass by reference
function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);
// Outputs the value { prop1: [Function], prop2: {} }

// Immediately Invoked Function Expression
(function(lastname) {
    var firstname = 'John';
    console.log(firstname);
    console.log(lastname);
}("Doe"));
var firstname = "Jane";
console.log(firstname);