const express = require('express')
require('./db/mongoose')
const hbs = require('hbs')
const path = require('path')
const bodyParser = require('body-parser')

const College = require('./models/college')



const collegeRouter = require('./routers/college')

const app = express()
const port = process.env.PORT || 3000



//defining paths
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')
const publicPath = path.join(__dirname, '../public')


//setting handlebars and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)


app.use(express.static(publicPath))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(collegeRouter)




const XLSX = require('xlsx');
const fs = require('fs')

var workbook = XLSX.readFile('././data/data.xlsx');
names = workbook.SheetNames[1]
sheet1 = XLSX.utils.sheet_to_json(workbook.Sheets[names])

const data = []
for (let i = 1; i < sheet1.length; i++) {
    var college = {
        name: sheet1[i].__EMPTY,
        state: sheet1[i].__EMPTY_1,
        type: sheet1[i].__EMPTY_2,
        total_intl_UG: sheet1[i].__EMPTY_8,
        fin_aid: sheet1[i].__EMPTY_9,
        aid_intl_UG: sheet1[i].__EMPTY_11,
        avg_aid: sheet1[i].__EMPTY_12,
        tuition: sheet1[i].__EMPTY_14,
    }
    data.push(college)
}




app.get('/', (req,res) => {
    res.render('index', {
        data
    })
})

// app.post('/colleges', (req,res) => {
//     console.log(req.body)
//     res.render('index', {
//         data
//     })
// })


// College.insertMany(data).then((docs) => {
//     console.log(docs)
//   }).catch((err) => {
//     console.log(err)
//   })


app.listen(3000, () => {
    console.log('Server is up on port ' + port)
})
