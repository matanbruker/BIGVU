const express = require("express");
const router = express.Router();
const screenshot = require("./screenshot");
const createVideo = require("./createVideo");
const fs = require("fs");

router.post("/", (req, res) => {
    var url = req.body.url;
    if(typeof(url) == "undefined"){ // check if client provided url
        res.status(400).send("No url was provided");
        return;
    }
    // use regex to check if input is url format
    const isURLValid = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(isURLValid){
        // if url dont start with https:// or http:// add https:// to the url
        if(!url.startsWith("https://") && !url.startsWith("http://"))
            url = "https://".concat(url);
        
        // take screenshot
        screenshot.capture(url).then((isAvailable) => {
            if(!isAvailable){ // check if website is available
                res.status(404).send("Page not found");
                return;
            }

            // extarct name of the website from url, the name will be the name of the mp4 file
            const arr = url.split(".")[0].split("/");
            var name = arr[arr.length - 1];
            if(name === "www") // in case url starts with 'www'
                name = url.split(".")[1];
            
            // create the video
            createVideo.create(name);
            // delete screenshot png
            setTimeout(() => {fs.unlinkSync(__dirname.concat("\\screenshot.png"))}, 1000);
            // return the path of the mp4 file
            res.status(201).send({file: __dirname.concat("\\").concat(name).concat(".mp4")});
        });
    }
    else{
        res.status(400).send("Invalid url");
    }
});

module.exports = router;