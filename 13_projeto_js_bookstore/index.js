const App = require('./App')

const app = new App()

app.createAuthor('J. R. R. Tolkien', 'British', 'Literature')
app.createAuthor('Rick Riordan', 'American', 'Math')
const authors = app.getAuthor()

app.createBook('O Hobbit', 'Fantastic', 'Fantasy', 300, authors[0], 'Very beatifuly', 50.99, 100)
app.createBook('A Sociedade do Anel', 'Imaginarium', 'Fantasy', 400, authors[0], 'Amazing', 30.99, 100)
app.createBook('O Ladrão de Raios', 'Mitology', 'Mitology', 500, authors[1], 'Stocks', 99.99, 100)
app.createBook('A Pirâmide Vermelha', 'Fictision', 'Fictision', 600, authors[1], 'Free', 120.00, 100)
const books = app.getBooks()

app.createUser('Eduardo', 'eduardo@email.com', 12131415)
const users = app.getUsers()

app.showDataBase()

const items = [
    {
        product: books[0],
        quantity: 2
    },
    {
        product: books[1],
        quantity: 1
    },
    {
        product: books[3],
        quantity: 1
    }
]

app.createOrder(items, users[0])

app.showDataBase()