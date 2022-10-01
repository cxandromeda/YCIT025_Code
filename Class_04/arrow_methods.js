const obj = {

    "QC": "Quebec", "ON":"Ontario","BC":"British Columbia"

}

const person = {
    "firstName" : "Xi", "lastName" : "Chen", "age": 20, 
    fullName: function(){return `${this.firstName} ${this.lastName}`;},
    fullName2: this.firstName + " " + this.lastName,
}

console.log(person.fullName());

const person2 = {
    "firstName" : "Xi", "lastName" : "Chen", "age": 20, 
    fullName: () => {return `${this.firstName} ${this.lastName}`;},
    fullName2: this.firstName + " " + this.lastName,
    fullName3: function(){return `${this.firstName} ${this.lastName}`;},
    x:(a, b ) => {a + b},
    y:function(a,b) {return this.age + a + b}
}

person2.lastName = "susan";

let x = person2.firstName;



//let string = `this is ${this.firstName}`