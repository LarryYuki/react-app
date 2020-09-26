const express = require('express');
// const app = express();
const router=express.Router()

router.get('/example',(res,req)=>{
    res.send("success")
})


module.exports=router

