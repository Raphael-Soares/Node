const express = require("express");
const {randomUUID} = require("crypto");

const app = express();
const port = 2020;
app.use(express.json());

const Tasks = require("./db/Tasks");

app.post("/tasks", async (req, res) => {
    const {title} = req.body;

    const task = await Tasks.create({
        id: randomUUID(),
        title,
        done: false,
    });

    return res.json(task);
});

app.get("/tasks", async (req, res) => {
    const tasks = await Tasks.findAll();
    res.json(tasks);
});

app.put("/tasks/:id", async (req, res) => {
    const {id} = req.params;
    const task = await Tasks.findOne({
        where: {
            id: id,
        },
    });

    task.title = req.body.title;
    task.done = req.body.done;
    await task.save();

    res.json({message: "auterado com sucesso"});
});

app.delete("/tasks/:id", async (req, res) => {
    const {id} = req.params;
    const task = await Tasks.destroy({
        where: {
            id: id,
        },
    });

    res.json({message: "Deletado com sucesso"});
});

app.listen(port, () => console.log("ouvindo em ==> http:localhost:" + port));
