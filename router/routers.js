const express=require("express");
const router=express.Router();
const home=require('../controller/controller')
 
router.route('/').get(home);

router.get('/about',(req,res)=>{
    res.send('welcome to About page')
})
router.route('/login').get((req,res)=>{
    res.send('welcome to login page to dhiraj');
})

module.exports=router;