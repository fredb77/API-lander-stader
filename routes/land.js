var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true});
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  fs.readFile("./land.json", (err,data) => {
    if (err) throw err;
    var land = JSON.parse(data);
    res.send(land);
  });

}); // END router.get


router.post('/', urlencodedParser, function(req, res) {
  
  fs.readFile('./land.json', (err, data) => {

      if (err) throw err;

      var land = JSON.parse(data);

      var a = land.length;
      a++;

          newland = {
              "id": a,
              "countryname": req.body.newland
          }
      
          land.push(newland);

      var saveLand = JSON.stringify(land, null, 2);

      fs.writeFile('./land.json', saveLand, (err, data) => {
          if (err) throw err;
      });

      res.send("Nytt land <b>" + req.body.newland + "</b> sparat...<br/><br/><a href='http://127.0.0.1:5500/'>Tillbaks</a>")

  });   // END fs
  
});   // END router.post

module.exports = router;
