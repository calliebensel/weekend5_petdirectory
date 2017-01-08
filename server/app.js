var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var path = require( 'path' );
var mongoose = require( 'mongoose' );
var app = express();
var port = 5000;

var petDirectoryRouter = require( './routes/petRouter' );

app.use( bodyParser.urlencoded({ extended: false }));
app.use( bodyParser.json() );
app.use( express.static( 'public' ));
// router
app.use( '/petdirectory', petDirectoryRouter );

app.listen( port, function(){
  console.log( 'Server is listening on port:', port );
}); // end app.listen

mongoose.connect( 'mongodb://localhost:27017/petDB' );

app.get( '/', function( req, res ){
  res.sendFile( path.join(__dirname, '../public/views/index.html' ));
}); // end app.get
