const express = require('express')
const csv = require('csvtojson')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => res.send({1:2, 2:3}))
app.get('/books', (req, res) => 
    csv().fromFile('./books.csv')
    .on('json', (json) => {
        console.log('something')
        res.json({ status:200, books: json })
    })
    .on('done', (error) => {
        console.log('done')
        res.json({status: 500})
    }))
app.get('/authors', (req, res) => 
    csv({
        ignoreColumns: [0,1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
    }).fromFile('./books.csv')
    .on('json', (jsonObj) => {
        jsonObj
    })
    .on('end_parsed', (j) => {
        res.json({ status:200, authors: j })
    })
    .on('error', (error) =>{
        console.log('done')
        res.json({status: 500})
    } )
)

app.listen(3000, () => console.log('listening on port 3000'))