"use strict";
exports.__esModule = true;
var mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function findNameOfTallestMountain(mountains) {
    var tallestHeight = Math.max.apply(Math, mountains.map(function (m) { return m.height; }));
    var tallest = mountains.findIndex(function (m) { return m.height == tallestHeight; });
    return mountains[tallest].name;
}
var tallestname = findNameOfTallestMountain(mountains);
console.log(tallestname);
var products = [
    { name: "Motorcycle", price: 17000 },
    { name: "Dirt Bike", price: 11000 },
    { name: "Four Wheeler", price: 15000 },
    { name: "Side-by-side", price: 28000 },
    { name: "Snowmobile", price: 10000 },
    { name: "Jetski", price: 5000 }
];
function calcAveragePrice(productArray) {
    var total = 0;
    productArray.forEach(function (p) { return total += p.price; });
    return Math.round((total / productArray.length) * (Math.pow(10, 2))) / (Math.pow(10, 2));
}
var averagePrice = calcAveragePrice(products);
console.log(averagePrice);
var inventory = [
    { product: { name: "motor", price: 10.00 },
        quantity: 10 },
    { product: { name: "sensor", price: 12.50 },
        quantity: 4 },
    { product: { name: "LED", price: 1.00 },
        quantity: 20 }
];
function calcInventoryValue(itemArray) {
    var total = 0;
    itemArray.forEach(function (i) { return total += i.product.price * i.quantity; });
    return Math.round((total) * (Math.pow(10, 2))) / (Math.pow(10, 2));
}
var value = calcInventoryValue(inventory);
console.log(value);
