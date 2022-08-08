// generate Random Data with faker
import { faker } from "@faker-js/faker";
import { Entity } from "./TrackingMap";


export class Destination implements Entity {
    receiver: string;
    location:{
        lat: number;
        lon: number;
    };
    weight: number;

    // + assigns a number to a string

    constructor() {
        
        this.receiver = faker.name.firstName(),
        this.location = {
            lat: +faker.address.latitude(),
            lon: +faker.address.longitude(),

        };

    }

    popupText(): string {
        return `<h3>Receiver Name: ${this.receiver}</h3>`;

    }

}