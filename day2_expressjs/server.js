import express from 'express';
const app=express();

// CRUD
// C=Create => POST
//R=Read => GET
//U=Update => PUT
//D=Delete => DELETE

const product=[
    {id:1,title:'iphone',price:75000},
    {id:2,title:'oneplus 8',price:35000},
    {id:3,title:'sony xperia',price:55000},
]
const movies=[
    {id:1,name:'KGF',release:2022},
    {id:2,name:'pk',release:2016},
    {id:3,name:'3 idiot',release:2007},
]
app.get('/',(req,res)=>{
    res.send("You are requesting for home route")
})
app.get('/product',(req,res)=>{
    res.send(product)
})

// get all products
app.get('/movies',(req,res)=>{
    res.send(movies)
})

// get product by id
app.get('/product/:id',(req,res)=>{
    console.log("dynamic routing",req.params)
})


const port=1000;
app.listen(port,()=>console.log(`server is running on port ${port}`));