class Account {
    #password
    #balance

    constructor(user) {
        this.email = user.email
        this.#password = user.password
        this.#balance = 0
    }

    #authenticate(email, password) {
        return this.email === email && this.#password === password
    }

    getBalance(email, password) {
        if(this.#authenticate(email, password)) {
            return this.#balance
        } else {
            return null
        }
    }
}

const user = {
    email: 'eduardo@email.com',
    password: '123456'
}

const userAccount = new Account(user)

console.log(userAccount)
// console.log(userAccount.#password) // Gera erro
// console.log(userAccount.#balance) // Gera erro
// console.log(userAccount.#authenticate()) // Gera erro
console.log(userAccount.getBalance("eduardo@email.com", "123456"))
console.log(userAccount.getBalance("user@email.com", "000000"))