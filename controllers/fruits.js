const Fruit = require("../models/Fruit")

const index = (req, resp)=> {
    console.log('controller hit');
    try {
        const fruits = Fruit.showAll()
        resp.status(200).send(fruits)
    } catch (err) {
        resp.status(500).send({error: "Server error"})
    }
    
}

const show = (req, res) => {
    const name = req.params.name.toLowerCase()
    try {
        const fruit = Fruit.show(name)
        res.status(201).send(fruit)
    } catch (err) {
        res.status(404).send({error: err})
    }
}


const create = async (req, resp) => {
    try {
        const newFruit = await Fruit.create(req.body)
        resp.status(201).send(newFruit)

    } catch (err) {
        resp.status(409).send({error: err.message})
    }
}


const update = async (req, resp) => {
    const name = req.params.name.toLowerCase()
    try {
        const fruit = await Fruit.show(name)
        const result = await fruit.update(req.body)
        resp.status(200).send(result)
    } catch (err) {
        resp.status(404).send({error: err.message})
    }
}


const destroy = async (req, resp) => {
    const name = req.params.name.toLowerCase()
    try{
        const fruit = await Fruit.show(name)

        await fruit.destroy()
        resp.sendStatus(204)
    } catch (err) {
        resp.status(404).send({error: err.message});
    }
}

module.exports = {
    index, show, create, update, destroy
}