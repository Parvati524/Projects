const express = require('express');
const app = express();
app.use(express.static('public'))
'use strict';
const yelp = require('yelp-fusion');
const client = yelp.client('ERVEM9NrMrOGxZYKci2QFbVmTILjHdUjtzhKwovXPJMxo6d0dYSBCpvlN8GggeqhAtFcSiRLVqqOQWh_OBXlHHIWxWusGfLPeeyNjdqZxO7SRyXSTva2gc8qJqSCYXYx');

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get('/home', (req, res) => {
  res.render('home.ejs');
});

app.get('/searchresults', (req, res) => {
  let queryParam = req.query.location;
  console.log(queryParam);
  client.search({
    location: queryParam,
    categories: "Food",
    limit: 10
  }).then(response => {
    let business = response.jsonBody.businesses;
    res.render('searchresults.ejs', { business })
  }).catch(e => {
    console.log(e);
  });
})

app.get('*', (req, res) => {
  res.render('error.ejs')
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Port is running on ${port}`)
})