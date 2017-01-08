var express = require( 'express' );
var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

// set up db
var petSchema = new Schema ({
  name: String,
  type: String,
  age: Number,
  image: String
}); // end petSchema

var Directory = mongoose.model( 'pets', petSchema );

module.exports = Directory;
