var express = require("express");
const { response } = require("../app");
var router = express.Router();

const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

router.get("/", function(req, res, next){
    //const deleteVar = req.query.deleted;
    
    console.log("HELLO from blitz");
    console.log("cat woo ")
    
    const amount = 4;
    const url = `https://cat-fact.herokuapp.com/facts/random?amount=${amount}`;
    //fetch(url,options)
   
    fetch(url)
    .then( response => response.json())
    .then (json => res.send({message: "PUBLIC API dog cat yooo", response: json}))
    .catch (error => console.error("error: " + error ));

    console.log("HELLO from AINE");
   // console.log(response);
    console.log ("ABOVE IS RESPONSE");
    console.log( " JSON Gonna be below");
   // console.log( json);


} );

module.exports = router;