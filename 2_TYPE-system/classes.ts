// classes are templates for creating objects.
// They encapsulate data with code to work on that data.
// Objects with some fields and methods to describe an item or a stuff.


// Modifiers
// * public :    Method can be called any where any time
// * private :   Method can be called by other methods in same class
// * protected : Method can be called by other methods in same class OR child classes

class Employee {

    constructor(public age: number){}

    protected endShift(): void {
        console.log('Shift has been ended')
    }
}

const employee = new Employee(29);
console.log(employee.age);




class Mechanic extends Employee {
    constructor( public name: string, age: number){
        super(age);
    }
    
    private startShift(): void {
        console.log('Mechanic started Shift')
    }

    goToWork(): void {
        this.startShift();
        this.endShift();
    }
}

const mechanic = new Mechanic('john', 30)
mechanic.goToWork()


