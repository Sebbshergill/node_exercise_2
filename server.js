var express = require('express')
var server = express()

server.use(express.static('public'))
    
    //server default-----------------------------------------
    server.get('/', function (req, res) {
      res.send('Hei Verden')
    })

    //greet request ------------------------------------------
    server.get('/greet', function (req, res) { 
        var greetings = [
          "hello"
        , "ciao"
        , "welcome"
        , "howdy"
        , "greetings"
        , "salut"
        , "hallo"
        , "hola"
        , "Gday"
        , "Hey"
        ];
        var greeting = Math.floor(Math.random() * greetings.length);

        greeting = greetings[greeting];


      res.send(greeting)
    })

    //greet:id request ---------------------------------------
    server.get('/greet:id', function(req, res) {

        var greetings = [
          "hello"
        , "ciao"
        , "welcome"
        , "howdy"
        , "greetings"
        , "salut"
        , "hallo"
        , "hola"
        , "Gday"
        , "Hey"
        ];
        var greeting = Math.floor(Math.random() * greetings.length);

        greeting = greetings[greeting];

      res.send(greeting + req.params.id);
    })

//server listen-------------------------------------------
server.listen(8080, function () {
  console.log('Server running on 8080')
})

