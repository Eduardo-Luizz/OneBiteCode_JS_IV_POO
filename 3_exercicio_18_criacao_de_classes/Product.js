class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addStock(qtdAddStock) {
        this.inStock += qtdAddStock
    }
    calculateDiscount(percentToDiscount) {
        const discount = this.price * ((100 - percentToDiscount) / 100);
        return discount
    }
}

const mouse = new Product("Mouse Gamer", "Gamer com 20.000 DPI", 499.99);

console.log(`Nome do Produto: ${mouse.name}`);
console.log(`Descrição do produto: ${mouse.description}`);
console.log(`Preço do produto: ${mouse.price}`);
console.log(`Quantidade em estoque: ${mouse.inStock}`);

mouse.addStock(2);

console.log(`Quantidade após chamar a função para adicionar: ${mouse.inStock}`); 
console.log(`Preço após chamar a função de desconto: ${mouse.calculateDiscount(50)}`); 

const watch = new Product("Relógio de Pulso", "...", 80)
watch.addStock(99)
console.log(watch)
console.log(watch.calculateDiscount(15))
console.log(watch.calculateDiscount(10))
