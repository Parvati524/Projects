const express = require('express');
const needle = require('needle');
const app = express();
app.use(express.static('public'));


app.get('/', (req, res) => {
    let price = ""
    needle.get('https://api.coindesk.com/v1/bpi/currentprice.json', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            price = JSON.parse(body);
            console.log(price);
            let USD = price.bpi.USD.rate;
            let usSign = price.bpi.USD.symbol;
            let GBP = price.bpi.GBP.rate;
            let gbpSign = price.bpi.GBP.symbol;
            let EUR = price.bpi.EUR.rate;
            let eurSign = price.bpi.EUR.symbol;
            console.log(usSign, gbpSign, eurSign)
            console.log(`USD ${USD} gbp ${GBP} eur ${EUR}`)
            console.log(USD)
            USD = USD.substr(0, USD.length - 2);
            GBP = GBP.substr(0, GBP.length - 2);
            EUR = EUR.substr(0, EUR.length - 2);
            console.log(USD, GBP, EUR);
            let queryParam = req.query.currency;
            console.log(queryParam)
            res.render('index.ejs', { USD: USD, GBP: GBP, EUR: EUR, queryParam: queryParam, usSign: usSign, gbpSign: gbpSign, eurSign: eurSign })
        }

    });

});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Port is running on ${port}`);
})