import express from 'express';
import bodyparser from 'express';
const app=express();
app.use(bodyparser.json())

// CRUD
// C=Create => POST
//R=Read => GET
//U=Update => PUT
//D=Delete => DELETE

let product=[
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

// get product by id  [dynamic routing.....]
app.get('/product/:id',(req,res)=>{
    const id=req.params.id
    const result=product.filter((data)=>data.id==id)
    res.send(result);
    // console.log("dynamic routing",id)
})

// add product
app.post('/add',(req,res)=>{
    //   console.log(req.body) 
    product.push(req.body)
    res.send("your product has been added"+req.body)
})


// delete product
app.delete('/product/:id',(req,res)=>{
    const id=req.params.id
    product=product.filter((data)=>data.id!=id);
    res.json({message:'your product has been deleted',product})

})

// update product by id;
app.put("/product/:id",(req,res)=>{
    const id=req.params.id;
    let data=req.body
    console.log(data)
    for(let i=0;i<product.length;i++){
        if(id==product[i].id){
            product[i].title=data.title
            product[i].price=data.price
            break;
        }
    }
    res.json({message:'your product has been updated'})
})
const port=1000;
app.listen(port,()=>console.log(`server is running on port ${port}`));