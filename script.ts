export{}

//Tallest Mountain
interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] =[
    {name: "Kilimanjaro", height: 19341},
    {name: "Everest", height: 29029},
    {name: "Denali", height: 20310}];

function findNameOfTallestMountain(mountains: Mountain[]):string{
    let tallestHeight: number = Math.max(...mountains.map(m=> m.height));
    let tallest: number = mountains.findIndex(m=> m.height == tallestHeight);
    return mountains[tallest].name;
}

let tallestname: string = findNameOfTallestMountain(mountains);
console.log(tallestname);

//Products
interface Product {
    name: string;
    price: number;
}

let products: Product[] = [
    {name: "Motorcycle", price: 17000},
    {name: "Dirt Bike", price: 11000},
    {name: "Four Wheeler", price: 15000},
    {name: "Side-by-side", price: 28000},
    {name: "Snowmobile", price: 10000},
    {name: "Jetski", price: 5000}
]

function calcAveragePrice(productArray: Product[]):number{
    let total: number = 0;
    productArray.forEach(p => total += p.price);
    return Math.round((total / productArray.length) * (10 ** 2))/ (10 ** 2);
}

let averagePrice: number = calcAveragePrice(products);
console.log(averagePrice);

//Inventory
interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[] = [
    {product:{name: "motor", price: 10.00},
    quantity: 10},
    {product:{name: "sensor", price: 12.50},
    quantity: 4},
    {product:{name: "LED", price: 1.00},
    quantity: 20}
]

function calcInventoryValue(itemArray: InventoryItem[]):number{
    let total: number = 0;
    itemArray.forEach(i => total += i.product.price * i.quantity);
    return Math.round((total) * (10 ** 2))/ (10 ** 2);
}

let value: number = calcInventoryValue(inventory);
console.log(value);