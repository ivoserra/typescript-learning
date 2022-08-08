// Typescript type that works like an array where each element represent a specific property.

const track = {
    genre:'rock',
    exclusive:false,
    duration:120,
};

// it always have to be in order as the declaration otherwise gives error
//const track1: [string, boolean, number] = ['rock', false, 120 ];

type Track = [ string, boolean, number];

const track1: Track = [ 'rock', false, 123];
const track2: Track = [ 'hip-hop', true, 150];

const currenciesToDollar: [number, number] = [1.38, 1.16];

const currencies2Dollar = {
    sterling:1.38,
    euro:1.16,
}
