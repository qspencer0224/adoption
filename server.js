const express = require('express');

const app = express();

const PORT = 3000

require("dotenv").config();
const mongoose = require("mongoose");
const Cat = require('./models/cat');
const Dog = require('./models/dog')
const cats = require('./models/cats')
const dogs = require('./models/dogs')
const methodOverride = require('method-override');

app.set("view engine", "jsx");

app.engine("jsx", require("express-react-views").createEngine());

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));

app.use(methodOverride('_method'));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
    console.log("connected to mongo");
});
//======READ=====
//this will display our cats all on our homepage
app.get('/', async (req, res) =>{
    const allPets = await Cat.find({})
    res.render('Index', {pet: allPets})
})

app.get('/', async (req, res) =>{
    const allDogs =  Dog.find({})
    res.render('Index', {dog: allDogs})
})
//this will put a new pet (cats and dogs) into the system, THIS ONLY DISPLAYS WHAT"S INSIDE THE COMPONENT, not the webpage itself
app.get('/new', (req, res) =>{
    res.render('New')
})


//=====CREATE======
//this will send our req.body('name' in this instance) to our '/new' webpage
app.post('/new', async (req, res) =>{
    //use 'async/await' in cases where we're interacting with the database

    //Cat.create is creating a new item. The value of that item is 'req.body'
    await Cat.create(req.body)
    //then res.redirect is sending us back to our homepage
    res.redirect('/')
})

//This is creating a new dog to enter into our index of pets
app.post('/new', async (req, res) =>{
    await Dog.create(req.body)
    res.redirect('/')
})

//-----The Cat Edit Page
//this will display the cat that was chosen alongside with info
app.get('/editcat/:id', async (req, res) =>{
    //:id is our param and it is being 'indentified' by 'req.params.ID because it has to match what we have

    //the reason kitten is being used as a variable is to be used to represnt the data being pulled from our database 
    //similar to how document.querySelector, etc. is used
    //this preps our app.put to take our newly edited data and make it the current data
    const kitten =  await  Cat.findById(req.params.id)
    res.render('Edit', {meow: kitten})
})
//----The Dog Edit Page
app.get('/editdog/:id', async (req, res) =>{
    const puppy = await Dog.findById(req.params.id)
    res.render('DogEdit', {ruff: puppy})
})
//=====UPDATE======
app.put('/cat/editsubmit/:id', async (req, res) =>{
    //so findByIDandUpdate is our cat/editsubmit/:id and req.body is our newly edited info
    //this updates everything and makes it our current data 
    await  Cat.findByIdAndUpdate(req.params.id, req.body //",{new: true}" shows our new data in thunderclient)
    )
    res.redirect('/')
})

app.put('/dog/editsubmit/:id', async (req, res) =>{
    await Dog.findOneAndUpdate(req.params.id, req.body)
    res.redirect('/')
})
//=====DELETE=======
app.delete('/delete/:id', async (req, res) =>{
    //so findByIDandUpdate is our cat/editsubmit/:id and req.body is our newly edited info
    //this DELETES our current data 
    await  Cat.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

app.delete('/delete/id', async (req, res) =>{
    await Dog.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

app.listen(PORT, () =>{
    console.log('Now listening on', PORT)
})