const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const categories=require('./data/categories.json');
const AllCategory=require('./data/category.json');
const categoryDetails=require('./data/lessons.json');

app.get('/', (req, res) => {
  res.send('Web Learning Server Start')
});

app.get('/categories',(req,res)=>{
    res.send(categories);
})

app.get('/category/:id',(req,res)=>{
    const id=req.params.id;
    const category=AllCategory.filter(n => n.category_id === id);
    res.send(category);
})

app.get('/details/:id',(req,res)=>{
  const id=req.params.id;
  const details=categoryDetails.filter(d => d.details_id === id);
  res.send(details);
})

app.listen(port, () => {
  console.log(`Web Learning Server Start on port ${port}`)
});