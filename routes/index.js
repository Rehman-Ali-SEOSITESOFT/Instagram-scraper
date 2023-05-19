const express = require("express");
const router = express.Router();

const axios = require('axios') 


router.get("/", (req, res) => res.send("Welcome to the browser"));




router.post("/getInsta", async(req, res) => {
  const  url = encodeURIComponent(`https://www.instagram.com/${req.body.username}`);
   axios.get(`https://api.crawlbase.com/?token=UW6GgBzjINbtxsDFB6y3WQ&url=${url}&autoparse=true`)
   .then((ress) => {
    console.log(ress, "data==========")
    res.status(200).json({
     data: ress.data  
     }) 
   })
   .catch(err => {
    res.status(200).json({
      err: err.response }) 
    })
})


module.exports = router;
