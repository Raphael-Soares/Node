const router = require("express").Router();
const Person = require("../models/Person");

router.get("/", async (req, res) => {
    try {
        const people = await Person.find();
        res.status(200).json(people);
    } catch (err) {
        res.status(500).json({message: "Something went wrong", error: err});
    }
});

router.post("/", async (req, res) => {
    const {name, salary, approved} = req.body;

    const person = {
        name,
        salary,
        approved,
    };

    try {
        await Person.create(person);

        res.status(201).json({message: "Dados inseridos com sucesso"});
    } catch (err) {
        res.status(500).json({message: "Something went wrong", error: err});
    }
});

router.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const person = await Person.findById(id);
        if (!person) {
            res.status(422).json({message: "Not found"});
            return;
        }
        res.status(200).json(person);
    } catch (err) {
        res.status(500).json({message: "Something went wrong", error: err});
    }
});

router.get("/name/:name", async (req, res) => {
    const {name} = req.params;
    try {
        const person = await Person.find({name: name});

        if (!person) {
            res.status(422).json({message: "Not found"});
            return;
        }
        res.status(200).json(person);
    } catch (err) {
        res.status(500).json({message: "Something went wrong", error: err});
    }
});

router.patch("/name/:name", async (req, res) => {
    const Name = req.params.name;
    const {name, salary, approved} = req.body;
    try {
        const person = await Person.updateOne({name: Name}, {name, salary, approved});
        res.status(200).json({name, salary, approved});
    } catch (err) {
        res.status(500).json({message: "Something went wrong", error: err});
    }
});

router.delete("/name/:name", async (req, res) => {
    const name = req.params.name;
    try {
        await Person.deleteOne({name: name});
        res.status(200).json({message: "Person deleted."});
    } catch (err) {
        res.status(500).json({message: "Something went wrong", error: err});
    }
});

module.exports = router;
