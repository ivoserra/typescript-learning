
const favoriteShows: string[] = [ 'Alf', 'Thundercats', 'Weeds'];

const dates = [new Date(), new Date()]

const meals: string[][] = [['breakfast'],['lunch'],['dinner']]

// Help with infrence

const thunderCats = favoriteShows[1]
const lastKnown = favoriteShows.pop()

// Prevent incopatible values
favoriteShows.push();

// help with methods

//* map
favoriteShows.map((show:string): string=>{
    return show.concat();
});


// Arrays have multiple types
const holidays: (Date | string)[] = [new Date(), '2022-01-01']
holidays.push(new Date());
holidays.push();