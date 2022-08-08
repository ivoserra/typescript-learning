"use strict";
class SortData {
    constructor(data) {
        this.data = data;
    }
    sort() {
        const { length } = this.data;
        for (let i = 0; i < length; i++) {
            // console.log('i',i)
            for (let j = 0; j < length - i - 1; j++) {
                // console.log('j',j)
                if (this.data[j] > this.data[j + 1]) {
                    const left = this.data[j];
                    // console.log(left)
                    this.data[j] = this.data[j + 1];
                    this.data[j + 1] = left;
                }
            }
        }
    }
}
const dateArray = [
    new Date(2010, 9, 24),
    new Date(2035, 9, 24),
    new Date(2001, 9, 24),
    new Date(2029, 9, 24),
];
const years = dateArray.map(date => date.getFullYear());
const sortData = new SortData(years);
sortData.sort();
console.log(sortData.data);
