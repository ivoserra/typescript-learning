const multiply = (x: number, y: number):number =>{
    return x * y;
}

const divide = (x:number, y:number):number => x / y;


function sum(x:number, y:number):number{
   return x + y; 
};

const subStract = function (x:number, y:number):number{
    return x-y;
};

const printing = (content:string): void =>{
    console.log(content)
};

// void returns nothing
const throwError = (content:string): void =>{
    throw new Error(content);
};

const earthquake ={
    date: new Date(),
    velocity:5,
}

// destructering
const logVelocity = ({date,velocity}: {date:Date, velocity:number}): void =>{
    console.log(date)
    console.log(velocity)
};

logVelocity(earthquake)