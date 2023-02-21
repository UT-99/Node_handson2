const express = require("express");

const app = express();
app.get('/', (req , resp )=>{
    resp.send("<h2 style ='text-align:center;color:Purple'>This is home page </h2>");
    resp.end();
})

app.get('/about', (req , resp )=>{
    resp.send("<h2 style ='text-align:center;color:Red'>This is about page </h2>");
    resp.end();
})

app.get('/contact', (req , resp )=>{
    resp.send("<h2 style ='text-align:center;color:blue'>This is contact page </h2>");
    resp.end();
})


app.listen(4001)


