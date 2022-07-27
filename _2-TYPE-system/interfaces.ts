// every time we write an interface we write a new type.
// we can use a single interface to describe the properties of different objects.
// we can write generic functions

// interface Movie {
//     title : string;
//     date: Date;
//     rating: number;
//     genre: string[];

//     report(): string;
// }

// or 

// we can use a single interface to describe the properties of different objects
interface Detail{
    report(): string;
}

const currentMovie = {
    title: 'dune',
    date: new Date(2021, 9, 24),
    rating:8.3,
    genre : [ 'action', 'adventure', 'drama'],

    report(): string{
        return `Title: ${this.title}`;
    }
};


const track3 = {
    genre:'rock',
    exclusive:true,
    duration:120,

    report():string {
        return `Current Song: ${this.genre}`
    }
}

// when using the Interface Movie
// const logMovie = (movie:  Movie): void => {
//     console.log(movie.report());
// };

// logMovie(currentMovie);

// or


// reusable function and more reusable code
const logDetail = (item: Detail): void => {
    console.log(item.report());
}

// we can write generic functions
logDetail(currentMovie)

