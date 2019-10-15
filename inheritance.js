var mom = {
    firstName: 'Alice',
    lastName: 'Wong',
    eyeColor: 'brown',
    hairColor: 'black',
    showInfo(subject){
        console.log(subject)
    }
};

var daughter = {
    firstName: 'Ilene',
    hairColor: 'brown',
    lastName: mom.lastName,
    showInfo: mom.showInfo

};

console.log(daughter.lastName)

mom.showInfo(mom)
daughter.showInfo(daughter)