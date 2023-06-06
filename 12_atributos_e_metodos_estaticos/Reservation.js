// Para usarmos os atributos e métodos estáticos basta declará-los diretamente na classe precedidos pela palavra reservada **static**. 
// E para utilizá-los só precisamos acessar a partir da própria classe ao invés de a partir de uma instância:  
// Obs.: Repare que também podemos modificar seu valor normalmente via atribuição.
// Também podemos combinar o uso do static com o get e o set sem problemas:

class Reservation {
    constructor(guests, room, days) {
        this.guests = guests
        this.room = room
        this.days = days
        this.total = days * Reservation.baseFee
    }

    static baseFee = 150

    static showBaseFee() {
        console.log(`Base fee is ${Reservation.baseFee}`)
    }

    static get premiumFee() {
        return Reservation.baseFee * 1.5
    }
}

Reservation.showBaseFee()
console.log(`Premium fee is $${Reservation.premiumFee}`)

const r1 = new Reservation(3, "201", 5)
console.log(r1)

Reservation.baseFee = 200

const r2 = new Reservation(2, '104', 2)
console.log(r2)

console.log(`Premium fee is $${Reservation.premiumFee}`)