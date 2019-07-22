'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, id, scores) {
        super(firstName,lastName,id,scores)
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.scores = scores;
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate() {
        let avg = this.scores.reduce((total, currentValue) => {
            return total + currentValue;
        }) / this.scores.length;
        let g = '';
        switch (true){
            case (avg >= 90 && avg <= 100):
                g = 'O';
                break;
            case (avg >= 80 && avg < 90):
                g = 'E';
                break;
            case (avg >= 70 && avg < 80):
                g = 'A';
                break;
            case (avg >= 55 && avg < 75):
                g = 'P';
                break;
            case (avg >= 40 && avg < 55):
                g = 'D';
                break;
            case (avg < 40):
                g = 'T';
                break;
        }
        
        return g;
    }

    printPerson() {
        console.log(`Name: ${this.lastName}, ${this.firstName}`);
        console.log(`ID: ${this.id}`);
    }
}
