const fruits = require("../fruits.json")

// build a class
//it will have a constructor to build instances of the fruit to return to the controller
//method showAll will access fruits json and return instances of all fruit to controller
//method show which access one fruit, build an instance and return to controller 'show' 

class Fruit {
    constructor({genus, name, id, family, order, nutritions}) {
        this.genus = genus,
        this.name = name,
        this.id = id,
        this.family = family,
        this.order = order,
        this.nutritions = nutritions
    }
    
    static showAll = () => {
        
        return fruits.map(fruit => new Fruit(fruit))
    }

    static show = (name) => {
        const fruit = fruits.find(fruit => fruit.name.toLowerCase() === name.toLowerCase())
    if (fruit) {
        return new Fruit(fruit)
        
    } else {
        throw Error("This fruit doesn't exist on the API")
    }
    }

    static create = (data) => {
        const newFruit = data
        const fruit = fruits.find(fruit => fruit.name.toLowerCase() === newFruit.name.toLowerCase())
        if (fruit) {
            throw Error("The fruit already exists.")
        } else {
            newFruit['id'] = fruits.length + 1
            fruits.push(newFruit)
            return new Fruit(newFruit)
        }

    }

    update(data) {
        const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
        console.log('It entered update in Model');
        if(updatedFruit) {
            updatedFruit.name = data.name
            updatedFruit.family = data.family
            return new Fruit(updatedFruit)
        } else {
            throw "Fruit not found"
        }
    }

    destroy() {
        const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())

        if (deletedFruit) {
            const index = fruits.indexOf(deletedFruit)
            fruits.splice(index, 1)
            return "Hellooooo"
        } else {
            throw Error("Fruit not found")
        }
    }
}

module.exports = Fruit