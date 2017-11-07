const express = require('express')
const csv = require('csvtojson')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => res.send({status: 200, numbers: [1, 2, 3, 4, 5]}))

app.get('/books', (req, res) => {
    csv()
        .fromFile('./books.csv')
        .on('json', (json) => {
            console.log('requested')
            res.json({ status: 200, books: json })
        })
        .on('done', (error) => {
            res.json({ status: 200 })
        })
})

app.listen(3000, () => console.log('Listening on port 3000!'))