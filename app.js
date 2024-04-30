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
    layout: 'layouts/main-layout',
  })
})
// app.get('/create', (req, res) => {

//   res.render('create', {
//     title: 'create',
//     layout: 'layouts/main-layout',
//   })
// })
app.get('/segitiga', (req, res) => {
  res.render('segitiga', {
    layout: 'layouts/main-layout',
    title: 'segitiga'
  })
})
app.get('/persegi', (req, res) => {
  res.render('persegi', {
    layout: 'layouts/main-layout',
    title: 'persegi'
  })
})
app.get('/trigonometri', (req, res) => {
  res.render('trigonometri', {
    layout: 'layouts/main-layout',
    title: 'trigonometri'
  })
})
app.get('/matrix-2', (req, res) => {
  res.render('matrix-2', {
    layout: 'layouts/main-layout',
    title: 'matrix'
  })
})
app.get('/matrix-3', (req, res) => {
  res.render('matrix-3', {
    layout: 'layouts/main-layout',
    title: 'matrix'
  })
})
app.get('/matrix-select', (req, res) => {
  res.render('matrix-select', {
    layout: 'layouts/main-layout',
    title: 'matrix-select'
  })
})
app.get('/statistika', (req, res) => {
  res.render('statistika', {
    layout: 'layouts/main-layout',
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
