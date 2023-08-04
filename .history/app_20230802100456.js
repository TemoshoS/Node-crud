const {render} = require('ejs');
const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs')

const students = [

  {
    name:'Temosho',
    surname: 'Shaku',
    age: '39'
  },
  {
    name:'Temosho',
    surname: 'Shaku',
    age: '39'
  }

]


app.listen(port,()=>{
    console.log(`Server ruuning on port ${port}`);
})