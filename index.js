const express = require("express");
const app = express();
const taskData = [
    {
        id: 1,
        taks: "Learn Nodejs "
    },
    {
        id: 2,
        taks: "Learn MongoDB "
    },
    {
        id: 3,
        taks: "Learn Mongoose "
    },
    {
        id: 4,
        taks: "Learn Mysql "
    },
]

app.get("/", (req, res) => {
    res.send({
        success: true,
        message: "Server running"
    })
})


app.get("/tasks", (req, res) => {
    res.send(taskData)
})


app.listen(4000, () => {
    console.log(`Server running on port http://localhost:${4000}`)
})



