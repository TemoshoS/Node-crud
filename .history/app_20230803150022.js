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

const image = "https://www.tutorialspoint.com/javafx/images/javafx-mini-logo.jpg";
//read data
app.get('/',async(req,res)=>{

  try {

    const jobRef = db.collection('jobs');
    const reponse = await jobRef.get();

    let responseArray = [];

    reponse.forEach((results)=>{
      responseArray.push({...results.data(),image:image,id:results.id})

    })

    res.status(200).send(responseArray)
    
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

//delete a job
app.delete('/delete/:id',async(req,res)=>{
  try {

    const response = await db.collection('jobs').doc(req.params.id).delete();
    res.send(response)
    console.log('job deleted')
    
  } catch (error) {

    console.log(error)
    res.send(error)
    
  }
})

//update data
app.put('/update/:id',(req,res)=>{

  const id = req.params.id;
  const updateData ={
    companyName: req.body.companyName,
    description: req.body.description,
    title: req.body.title,
    location: req.body.location
  }

  db.collection('jobs').doc(id).update(updateData).then(()=>{
    console.log('updated')
    res.send('updated')
  }).catch((error)=>{
    
  })
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