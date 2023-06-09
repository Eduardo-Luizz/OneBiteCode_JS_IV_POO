const Post = require("./Post")

class Author {
    constructor(name) {
        this.name = name
        this.posts = []
    }

    createPost(title, body) {
        const post = new Post(title, body, this) // só o this -> Envia para proxima classe ou metodo o objeto da classe todo
        this.posts.push(post)
        return post
    }
}

module.exports = Author