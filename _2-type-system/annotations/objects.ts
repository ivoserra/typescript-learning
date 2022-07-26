const client = {
    id: ' 1234',
    age:25,
    condition:{
        mass:80,
        height:185
    },
    setBMI(mass:number, height:number): void {
        this.BMI = mass / (height * height)
    },
};

const { id, age }: { id: string; age: number } = client;

const { 
    condition:{mass, height},
}: {condition:{mass:number; height:number}} = client;