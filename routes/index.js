const express = require("express");
const router = express.Router();
const { IgApiClient } = require('instagram-private-api');
const ig = new IgApiClient();
const puppeteer = require("puppeteer");
const https = require('https');
const $ = require('jquery');
const axios = require('axios') 

// Replace with your access token
//   ig.state.generateDevice('rehmanali_17');

// let { igApi, getCookie } = require("insta-fetcher");
router.get("/", (req, res) => res.send("Welcome to the browser"));



// router.post("/getInsta", async(req, res) => {
//   //  try{
//         const session_id = await getCookie("realdev0510", "realdev1121");
//         let ig = new igApi(session_id);
//        console.log(req.body.username, "==============")
    
//       // User data
//         let user ;
//         await  ig.fetchUser(req.body.username).then((res) => {
//           console.log(res)
//           user =  res;
//         })
        
//         // Fetch stories
//         let stories ;
//         await  ig.fetchStories(req.body.username).then((res) => {
//           console.log(res);
//           stories = res
//         }).catch(err => 
//           {stories = {}
//           console.log("stories are not available")
//         }) ;

//         let post ;
        
//         await  ig.fetchUserPostsV2(req.body.username).then((res) => {
//            post =  res;
//         }).catch(err =>
//           {post = {}
//           console.log("post are not available")
//         }
//           ) ;
//       res.status(200).json({
//           UserInfo: user,
//           Posts: post,
//           Stories : stories
//        }) 
//   //  }catch(err){
//   //    res.status(400).json({
//   //       message: err,
//   //       success: 0
//   //    })
//   //  }
  
// })


router.post("/getInsta", async(req, res) => {
  const  url = `https://www.instagram.com/${req.body.username}`;
   await  axios.get(`https://api.crawlbase.com/?token=UW6GgBzjINbtxsDFB6y3WQ&url=${url}&autoparse=true`)
   .then(async(ress) => {
    // console.log(ress, "data==========")
    await res.status(200).json({
     data: ress.data  
     }) 
   })
   .catch(err => {
    // console.log(err, "err==========")

     res.status(200).json({
      err: err.response }) 
    })
})


// router.get("/getInsta", async(req, res) => {
   
      
      
//         await ig.simulate.preLoginFlow();
//         const loggedInUser = await ig.account.login('rehmanali_17', '3WordPress!2K22!');
      
//         // Replace with the username of the user you want to scrape data from
//         const user = await ig.user.searchExact('kyliejenner');
      
//         // console.log(user);
      
//         // Get the user's posts
//         const posts = await ig.feed.user(user.pk).items();
//         // console.log(posts);
       
//         // Get the user's followers
//         const followersFeed = await ig.feed.accountFollowers(loggedInUser.pk).items();
//         // console.log(followersFeed);
      
//         // Get the user's following
//         const followingFeed = await ig.feed.accountFollowing(loggedInUser.pk).items();
//         // console.log(followingFeed);
      

//         res.status(200).json({
//             userPost: posts,
//             userFollowers: followersFeed,
//             userFollowing: followingFeed
//         })
    
// });
module.exports = router;
