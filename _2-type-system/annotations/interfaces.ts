// every time we write an interface we write a new type

// interface Movie {
//     title : string;
//     date: Date;
//     rating: number;
//     genre: string[];

//     report(): string;
// }

// or 

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

// const logMovie = (movie:  Movie): void => {
//     console.log(movie.report());
// };

// or

const logDetail = (item: Detail): void => {
    console.log(item.report());
}

logDetail(currentMovie)

// logMovie(currentMovie);