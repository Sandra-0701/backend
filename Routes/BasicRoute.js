const express=require('express');
const router = express.Router();

//built-in middleware express.js used to parse 
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const fruits = ['apple', 'orange', 'banana'];


const people = [
    {name:"Sandra",age:20},
    {name:"Suresh",age:40}
];

const person = [
    {name:"sandra",Location:"Ktra"},
    {name:"suresh",Location:"tvm"}
]





//API

//get
router.get('/',(req,res)=>{
    res.send(fruits);
})

router.get('/people',(req,res)=>{
    res.send(people);
})

//post request
router.post('/add',(req,res)=>{
    console.log(req.body);
    person.push(req.body);
    res.send({message:"data added",person})
})

//update request
router.put('/edit',(req,res)=>{
    console.log(req.body);
    person.splice(0,1,req.body);
    res.send({message:"Data updated"})
})

//delete
router.delete('/remove',(req,res)=>{
    person.pop();
    res.send({message:"Deleted",person})
})

module.exports = router;