var express = require( 'express' );
var router = express.Router();
var mongoose = require( 'mongoose' );
var Pet = require( '../models/pets' );

// TO DO: router.get
router.get( '/', function( req, res ){
  console.log( 'in the get route' );
  // find all
  Pet.find({}, function( err, directoryResults ){
    if( err ){
      console.log( err );
      res.sendStatus( 500 );
    } else {
      console.log( 'assignments -->', directoryResults );
      res.send( directoryResults );
    }
  });
}); // end router.get

// TO DO: router.delete

// TO DO: router.POST
router.post( '/', function( req, res ){
  console.log( 'in post user route, req.body ->', req.body );
  console.log( 'req.body', req.body );

  var newPet = new Pet({
    name: req.body.name,
    type: req.body.type,
    age: req.body.age,
    image: req.body.image
  }); // end newPet

  newPet.save( function( err ){
    if( err ){
      console.log( err );
      res.sendStatus( 500 );
    } else {
      console.log( 'new pet created' );
      res.sendStatus( 200 );
    }
  }); // end newPet.save
}); // end router.post

module.exports = router;
