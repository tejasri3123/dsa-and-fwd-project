class Inventory {
    constructor() {
        this.items = {};
    }

    // Add new product
    addProduct(name, quantity) {
        if (this.items[name]) {
            this.items[name] += quantity;
        } else {
            this.items[name] = quantity;
        }
        console.log(name + " added. Quantity: " + this.items[name]);
    }

    // Sell product
    sellProduct(name, quantity) {
        if (!this.items[name]) {
            console.log("Product not found");
            return;
        }

        if (this.items[name] < quantity) {
            console.log("Not enough stock");
            return;
        }

        this.items[name] -= quantity;
        console.log(quantity + " " + name + " sold. Remaining: " + this.items[name]);
    }

    // Display inventory
    displayInventory() {
        console.log("Current Inventory:");
        for (let item in this.items) {
            console.log(item + " : " + this.items[item]);
        }
    }
}

// Example usage
let shop = new Inventory();

shop.addProduct("Rice", 50);
shop.addProduct("Sugar", 30);
shop.sellProduct("Rice", 10);
shop.displayInventory();