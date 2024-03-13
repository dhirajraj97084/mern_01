const express=require('express');
const app=express();
port=3400;
const router=require('./router/routers');

app.use('/api/auth',router);

app.listen(port ,()=>{
    console.log(`your application is successfully run ${port}`)
});