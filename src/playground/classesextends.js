
class Person {

    constructor(name = 'Annonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hi I am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}


// Extending this class overrides the inherit parent behavior
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description = description += `Thier major is ${this.major}`;
        }
        return description;
    }

}
class Traveler extends Person {
    constructor(name, age, homeTown) {
        super(name, age);
        this.homeTown = homeTown;
    }

    greeting() {
        let greeting = super.greeting();
 
        if (this.homeTown) {
            greeting += ` I am visiting from ${this.homeTown}`;
        }
        return greeting;
    }
}
// Traveler extendes the person class
// Add support for homeLocation
// Override getGreeting
    // 1. If home location include in Message. Hi I am am April Copes. Dont redefine use super method. Im am visiting from New York
    // Otherwise say Hi I am Andrew Mead

const me = new Traveler('April', 27, 'New York');
console.log(me.greeting());

const other = new Traveler();
console.log(other.greeting());
