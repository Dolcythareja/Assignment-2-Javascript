// Smoothie class with methods
// Attribution for Class Structure and Methods:
// MDN Web Docs - JavaScript Classes and Methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class Smoothie {
    constructor(base, fruits, addIns, size) {
        this.base = base;
        this.fruits = fruits;
        this.addIns = addIns;
        this.size = size;
    }
// Method to calculate price
    calculatePrice() {
        let price = 0;

        // Base price based on the type of base
        switch (this.base) {
            case 'Coconut Milk':
            case 'Rice Milk':
            case 'Cashew Milk':
                price += 2;
                break;
            case 'Coconut Water':
            case 'Greek Yogurt':
                price += 2.5;
                break;
            default:
                price += 1.5;
        }

        // Price for each fruit selected
        price += this.fruits.length * 1.25;

        // Price for each add-in selected
        price += this.addIns.length * 1.75;

        // Additional cost for size
        switch (this.size) {
            case 'Small':
                price += 1;
                break;
            case 'Medium':
                price += 1.5;
                break;
            case 'Large':
                price += 2;
                break;
            case 'Extra Large':
                price += 2.5;
                break;
            default:
                price += 1;
        }

        return price.toFixed(2); 
    }
}
