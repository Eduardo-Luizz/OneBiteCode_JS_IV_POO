class Comment {
    constructor(name, content) {
        this.name = name
        this.content = content
        this.createdAt = new Date()
    }
}

module.exports = Comment