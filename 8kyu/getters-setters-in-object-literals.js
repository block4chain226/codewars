//The object literal should then have a getter and setter called fullName which returns and parses
// the full name of the person respectively. A full name is defined as follows: If the first name is "Jane"
// and the last name is "Doe" then the full name is "Jane Doe" and vice versa.
// You may assume all full names are valid when parsing them.

const person = {
    firstname: 'Jane',
    lastname:'Doe',

    set firstName(value){
        this.firstname = value
    },
    set lastName(value){
        this.lastname = value
    },
    get firstName(){
        return this.firstname
    },
    get lastName(){
        return this.lastname
    },
    set fullName(value){
        const [first, last] = value.split(' ')
        this.firstname = first
        this.lastname = last
    },
    get fullName(){
        return this.firstname + ' ' + this.lastname
    }
}
