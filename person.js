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
    lazyGreet(other){
        setTimeout(function (){
            console.log(`Yo ${other.name}! From ${this.name}. What a bizarre way to phrase a greeting.`);
            console.log("Here's the timeout, you absolute animal.")
        }, 2000);
    };
}

let sammy = new Person(
    "Sammy",
    ["David","Karla","Sam","Judith"]
)

let david = new Person(
    "David",
    ["Sammy"],
)
sammy.greet(david);
sammy.lazyGreet(david);