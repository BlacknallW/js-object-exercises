class Person {
    constructor(name) {
        this.name = name;
        this.friends = [];
    }
    addFriend(friend) {
        this.friends.push(friend);
    }
    createGreeting(other) {
        return 'Yo ' + other.name + '! from ' + this.name + '.';
    }
    greet(other) {
        console.log(this.createGreeting(other));
    }
}



