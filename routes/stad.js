var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true});
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  fs.readFile("./stad.json", (err,data) => {
    if (err) throw err;
    var stad = JSON.parse(data);
    res.send(stad);
  });
});

router.post('/', urlencodedParser, function(req, res) {
  
  fs.readFile('./stad.json', (err, data) => {

      if (err) throw err;

      var stad = JSON.parse(data);

      var a = stad.length;
      a++;

      const lid = parseInt(req.body.landid, 10);
      const pop = parseInt(req.body.popu, 10)
      
          newstad = {
              "id": a,
              "stadname": req.body.newstad,
              "countryid": lid,
              "population": pop
          }
      
          stad.push(newstad);

      var savestad = JSON.stringify(stad, null, 2);

      fs.writeFile('./stad.json', savestad, (err, data) => {
          if (err) throw err;
      });

      res.send("Ny stad <b>" + req.body.newstad + "</b> har skapats...<br/><br/><a href='https://fredb77.github.io/Inlamning-Stader-och-lander/'>Tillbaks</a>")

  });   // END fs
  
});   // END router.post

module.exports = router;
