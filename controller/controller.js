const home=async(req,res)=>{
    try {
       res.send("home page mein welcome hain aapka"); 
    } catch (error) {
       console.log(error) ;
    }
}

const login=async(req,res)=>{
    try {
      await res.send("login page hellloooo bhai")  
    } catch (error) {
      console.log(error);  
    }
}


module.exports=home;