const express=require('express');
const app=express();
const cors=require('cors')


app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('backedn is running')
})

app.get('/login',(req,res)=>{
    res.send('login page')
})

app.get('/signup',(req,res)=>{
    res.send('sign up page')
})

app.listen(3000)