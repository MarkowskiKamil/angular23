/**
 * ADDITIONALLY
 * how can we make item type checking more TypeScript style - hence typos safe
 * (what is a typo? typing 'backgroung' instead of 'background')
 */

enum ItemType {
    FRUIT = 'owoc',
    VEGETABLE = 'vegetable'
}


interface Item {
    name: string;
    taste?: string;
    type?: ItemType;
}

var items: Array<Item> = [];
items.push({
    name: 'Apple',
    taste: 'sweet',
    type: ItemType.FRUIT
});
items.push({
    name: 'Lemon',
    taste: 'sour',
    type: ItemType.FRUIT
});
items.push({
    name: 'Potato',
    type: ItemType.VEGETABLE
});
items.push({
    name: 'Car'
});

items.push({
    name: 'Banana',
    taste: 'sour',
    type: ItemType.FRUIT
});


function printFruitsAndVeggies(fruitsAndVeggies: Array<Item>) {
    for (var _i = 0, fruitsAndVeggies_1 = fruitsAndVeggies; _i < fruitsAndVeggies_1.length; _i++) {
        var item = fruitsAndVeggies_1[_i];
        if (item.type === ItemType.FRUIT) {
            console.log("We have a fruit: " + item.taste + " " + item.name);
        }
        else if (item.type === ItemType.VEGETABLE) {
            console.log('We have a vegetable: ' + item.name);
        }
        else {
            console.log('--- Error ---');
            console.log('We have an item of unknown type: ' + item.name);
            console.log('--- End of error ---');
        }
    }
}
printFruitsAndVeggies(items);
