angular.module('starter.controllers', [])



.controller('signupCtrl', function($scope,SignupService){

$scope.sign= function(signData) {

var username = signData.username;
var email = signData.email;
var password = signData.password;

SignupService.dosignup(username,email,password);

}

})


.controller('loginCtrl', function($scope,LoginService){


$scope.login= function(loginData) {

var email = loginData.email;
var password = loginData.password;

LoginService.dologin(email,password);
}

})

.controller('homeCtrl', function($state,$scope,$rootScope,$firebaseArray,firebaseData,LoginService){
var ref = new Firebase("https://todo-list-c79fe.firebaseio.com/Todo");
var thisUser =  window.localStorage.getItem('authUser');
$scope.Uid=thisUser;
$scope.todos = $firebaseArray(ref);
console.log($scope.todos);

$scope.logout=function(){
  firebase.auth().signOut().then(function(){
      window.localStorage.removeItem('authUser');
      $state.go('login');
  })
}

$scope.delete = function(todo){
        return $scope.todos.$remove(todo);
    }

  })

.controller('todoCtrl', function($scope,TodoService){

      $scope.todo= function(todoData) {

      var titles = todoData.titles;
      var date = todoData.date;
      var hints = todoData.hints;
      TodoService.dotodo(titles, date, hints);
    }

  })

.controller('profileCtrl', function($scope){
  })
.controller('AccountCtrl', function($scope){
  })

