const {render} = require('ejs');
const express = require('express');
const app = express();
const port = 3000;

//setup view engine
app.set('view engine', 'ejs')

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

app.get('/',(req,res)=>{
    res.render('index',{students, title:'Home'})
})

app.get('/about',(req,res)=>{
    res.get('about',{title:'About'})
})

app.use((req,res)=>{
    res.status(404).render
})

//listen to request
app.listen(port,()=>{
    console.log(`Server ruuning on port ${port}`);
})