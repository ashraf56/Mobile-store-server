const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
let cors = require('cors')
let user = require('./MOCK_DATA.json')
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Mobilestore.')
})
app.get('/user', (req, res) => {
    res.send(user)
})

app.listen(port, () => {
    console.log(`app running onport ${port}`);
})
