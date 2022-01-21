const express = require('express');
const app = express();
const yelp = require('yelp-fusion');
const keys = require("./config/keys");
const fetch = require('node-fetch')

const yelpApiKey = keys.yelpApiKey;
const youtubeApiKey = keys.youtubeApiKey;
const client = yelp.client(yelpApiKey);
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.redirect('/home')
})
app.get('/home', (req, res) => {
    console.log(youtubeApiKey)
    res.render('home.ejs')
})


app.get('/result', (req, res) => {
    const location = req.query.location
    const searchRequest = {
        categories: "physicaltherapy, c_and_mh",
        location: location,
        limit: 10
    };
    let category = req.query.category;

    let yelp = client.search(searchRequest).then(response => {
        let businesses = response.jsonBody.businesses
       
        return (businesses)
    }).catch(e => {
        console.log(e)
        return (e);
    });

    async function youtube() {
        console.log("Ready to get Youtube data!");
        let url = `https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&type=video&part=snippet&q=${category}&videoEmbeddable=true&maxResults=5`;
        const response = await fetch(url);
        const data = await response.json();
        const videos = data;
        console.log(videos)
    
        return videos
    }


    function getData() {
        Promise.all([yelp, youtube()])
            .then(values =>
                Promise.all(values.map(value => JSON.stringify(value))))
            //doesn't JSON.stringify make the json readable like text but with the quotes?
            .then(finalVals => {
                let businesses = finalVals[0];
                let videos = finalVals[1];
                businesses = JSON.parse(businesses)
                videos = JSON.parse(videos)
                console.log(videos)
                let items = videos.items
                items.forEach(val => String(val))
                let videoId = [];
                for (let i = 0; i < items.length; i++) {
                    videoId.push(items[i].id.videoId)
                }
                console.log(videoId)
                res.render('result.ejs', { businesses, videoId, items });
            });
    }
    getData();
});


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})