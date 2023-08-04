const { render } = require('ejs');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

//setup view engine
app.set('view engine', 'ejs')

const admin = require('firebase-admin')
const credendials = require('./key.json')

//initialize admin
admin.initializeApp({
  credential: admin.credential.cert(credendials)
})
const db = admin.firestore()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//read data
app.get('/',async(req,res)=>{

  try {

    const jobRef = db.collection('jobs');
    const reponse = await jobRef.get
    
  } catch (error) {

    console.log(error)
    
  }
})

//create a post
app.post('/add-job',async(req, res)=>{
  //res.render('addjob', { title: 'Add job' })
  try {
    const jobJson ={
      title: req.body.title,
      companyName: req.body.companyName,
      location: req.body.location,
      description: req.body.description,
      time: admin.firestore.Timestamp.now()
    }

    const response = await db.collection('jobs').add(jobJson)

    res.send(response)
  } catch (error) {
   
    res.send(error)
  }
})


const students = [

  {
    name: 'Temosho',
    surname: 'Shaku',
    age: '39'
  },
  {
    name: 'Maduane',
    surname: 'Shaku',
    age: '29'
  },
  {
    name: 'Core',
    surname: 'Shaku',
    age: '26'
  }


]

//middleware
app.use(morgan('dev'))

//middleware for static
app.use(express.static('public'))


// Define routes
app.get('/', (req, res) => {
  res.render('index', { students, title: 'Home' })
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})



app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
})


//listen to request
app.listen(port, () => {
  console.log(`Server ruuning on port ${port}`);
})