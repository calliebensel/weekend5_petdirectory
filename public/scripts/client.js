console.log( 'js is ready' );

var myApp = angular.module( 'myApp', [] );

myApp.controller( 'DirectoryController', [ '$scope', '$http', function( $scope, $http ){
  console.log( 'NG is working' );

// get from db
$scope.getPet = function(){
  console.log( 'searching for:', $scope.petNameIn );

  $http({
    method: 'GET',
    url: '/petdirectory'
  }).then( function( response ){
    console.log( 'back from get call:', response );
    $scope.directoryResults = response.data;
  }); // end http
}; // end getPet function

// post to db
$scope.postPet = function(){
console.log( 'in the postPet function' );
var newPet = {
  name: $scope.petNameIn,
  type: $scope.typeOfAnimalIn,
  age: $scope.petAgeIn,
  image: $scope.picUrlIn
}; // end var newPet
console.log( 'newPet', newPet );

// call to db, send user input
$http({
  method: 'POST',
  url: '/petdirectory',
  data: newPet
}).then( function( response ){
  $scope.getPet();
});
  // console.log( 'after the post:', response );
}; // end postPet
}]); // myApp.controller


// $scope.nameIn = '';
// $scope.typeIn = '';
// $scope.ageIn = '';
// $scope.imageIn = '';
