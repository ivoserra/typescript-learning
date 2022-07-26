// type annotation
let age: number = 3


let firstName: string = 'John';
let isMarried: boolean = false;

let noValue: null = null;
let notAssigned: undefined = undefined;

let today: Date = new Date()

//****************/

let planets: string[] = ['Earth', 'Mars', 'Jupiter', 'Saturn'];
let luckyNumber: number[] = [3,5,7,9];
let completed: boolean[] = [ true, false, false, true]  


// Classes
class Phone{}
let phone: Phone = new Phone()

// Object Literals
let product:{name:string, price:number} = {name:'pen', price:15}


// *** functions ****//
const printer:(content:string) => void = (content:string) => console.log(content)


// type inference
// TypeScript guesses the type

// functions that returns the 'any' type
const place = '{"lat":45, "lon":-70}';
const newLocation:{lat:number; lon:number} = JSON.parse(place)
console.log(newLocation)


// initialize variable later
const forecast =['sunny', 'rain', 'cloudy']
let isSunny: boolean;

for(let i = 0; i < forecast.length; i++){

    if(forecast[i]=== 'sunny'){
        isSunny = true
    }
}

// Type can't be inferred correctly
let temperatures = [ 8, 5,-2]

let subzero:boolean | number  = false;

for(let i = 0; i < temperatures.length; i++){
    if(temperatures[i] < 0){
        subzero = temperatures[i]
    }
}