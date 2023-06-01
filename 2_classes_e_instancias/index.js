class Book {
    // Configuraremos as instâncias aqui dentro
}

const eragon = new Book()

console.log(eragon)

//
class Book1 {
    constructor(title) {
        this.title = title
    }
}

const eragon1 = new Book1("Eragon")
const eldest1 = new Book1("Eldest")

console.log(eragon1, eldest1)

//
class Book2 {
    constructor(title) {
        this.title = title
        this.published = false
    }

    publish() {
        this.published = true
    }
}

const eragon2 = new Book2("Eragon")
const eldest2 = new Book2("Eldest")

eragon2.publish()

console.log(eragon2)
console.log(eldest2)
console.log(eragon2 instanceof Book2)