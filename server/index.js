const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const names = [
    {id:1, name:'Abc', email: 'abc@gmail.com'},
    {id:2, name:'Bd', email: 'bd@gmail.com'},
    {id:3, name:'Fa', email: 'fa@gmail.com'}
]

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/names', (req, res) => {
    res.send(names)
})

app.post('/names', (req, res) => {
    console.log(req.body)
    const newUser = req.body;
    newUser.id = names.length + 1;
    names.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
    console.log(`Example app listening on Port ${port}`)
})