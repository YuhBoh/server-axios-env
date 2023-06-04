const express = require('express');
const router = new express.Router();
const axios = require('axios');
require('dotenv').config();

const GifyUrl = `http://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_APY_KEY}&limit=3&rating=pg13`;

router.get('/', (req, res) => {

    axios.get(GifyUrl)
        .then((response) => {

            console.log('process.env.GIPHY_APY_KEY:', process.env.GIPHY_APY_KEY);
            let url = response.data.data[0].images.downsized_medium.url;
            let title = response.data.data[0].title;
            res.send({ url: url, title: title });
        })
        .catch((err) => {
            console.log('process.env.GIPHY_APY_KEY:', process.env.GIPHY_APY_KEY);
            console.log(err)
            res.sendStatus(500);
        })
});

// response = {url: 'the url of the gif', title: 'the title'}

module.exports = router;

// const GifyUrl = 'http://api.giphy.com/v1/gifs/trending?api_key=F1y9MCztyxMRibkGUnlcVBDON0pfka99&limit=3&rating=pg13';


// axios.get(GifyUrl)
// .then((response) => {
//   let url = response.data.data[0].images.downsized_medium.url;
//   setGifUrl(url);

//   let title = response.data.data[0].title;
//   setGifTitle(title);

// })
// .catch((err) => { console.log(err) })
