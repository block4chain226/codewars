// You're hosting an event, and the admission tickets are expensive. Groups of people are trying to cheat the system by using the same tickets multiple times. Stop them!

function Ticket(code){
    this.code = code
    this.used = false

    this.useTicket = function() {
        this.used = true
        Object.freeze(this)
    }
}

function validTicket(ticket, correctCode){
    if(ticket.used === false && ticket.code === correctCode) return true
    return false
}