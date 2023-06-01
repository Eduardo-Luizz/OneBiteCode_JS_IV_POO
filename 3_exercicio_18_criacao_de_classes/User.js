class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, senha) {
        if (this.email === email && this.password === senha) {
            return '\nLogin bem sucedido\n'
        } else {
            return '\nEmail ou senha incorretos\n'
        }
    }
}

const joao = new User('João dos Santos', 'joao@email.com', '123456')
const eduardo = new User('eduardo', 'eduardo@email.com', '121314')

console.log(joao)
console.log(eduardo)
console.log(eduardo.login('eduardo@email.com', '121314'))
console.log(eduardo.login('eduardo@email.com', '1213141'))
