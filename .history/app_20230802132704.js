const {render} = require('ejs');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

//setup view engine
app.set('view engine', 'ejs')

app.use(morgan)

const students = [

  {
    name:'Temosho',
    surname: 'Shaku',
    age: '39'
  },
  {
    name:'Maduane',
    surname: 'Shaku',
    age: '29'
  },
  {
    name:'Core',
    surname: 'Shaku',
    age: '26'
  }
 

]

//middleware
app.use((req,res, next)=>{
    console.log('hostname', req.hostname)
    console.log('url', req.path)
    console.log('Method', req.method)

    next()
})

// Define your routes
app.get('/',(req,res)=>{
    res.render('index',{students, title:'Home'})
})

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'})
})

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'})
})

//listen to request
app.listen(port,()=>{
    console.log(`Server ruuning on port ${port}`);
})