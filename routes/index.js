const router= require('express').Router();


router.get("/", (req, res)=>{
    res.send("hello worldsss");
})


module.exports = router