const port = 8000;
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const app = express()

//gunakan ejs
app.set('view engine', 'ejs')

//thirtd-party-model
app.use(expressLayouts)

//build-in-midleware
app.use(express.static('public'))
app.use(morgan('dev'))

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

app.get('/', (req, res) => {

  res.render('index', {
    title: 'home',
    layout: 'layouts/index',
  })
})
// app.get('/create', (req, res) => {

//   res.render('create', {
//     title: 'create',
//     layout: 'layouts/index',
//   })
// })
app.get('/segitiga', (req, res) => {
  res.render('segitiga', {
    layout: 'layouts/index',
    title: 'segitiga'
  })
})
app.get('/persegi', (req, res) => {
  res.render('persegi', {
    layout: 'layouts/index',
    title: 'persegi'
  })
})
app.get('/trigonometri', (req, res) => {
  res.render('trigonometri', {
    layout: 'layouts/index',
    title: 'trigonometri'
  })
})
app.get('/matrix-2', (req, res) => {
  res.render('matrix-2', {
    layout: 'layouts/index',
    title: 'matrix'
  })
})
app.get('/matrix-3', (req, res) => {
  res.render('matrix-3', {
    layout: 'layouts/index',
    title: 'matrix'
  })
})
app.get('/matrix-select', (req, res) => {
  res.render('matrix-select', {
    layout: 'layouts/index',
    title: 'matrix-select'
  })
})
app.get('/statistika', (req, res) => {
  res.render('statistika', {
    layout: 'layouts/index',
    title: 'statistika'
  })
})


app.use('/', (req,res)=>{
  res.status(404)
  res.send('nothing')
})

app.listen(port, () =>{
  console.log(`server listenig at http://localhost:${port}`);
})
