angular.module('starter.services', [])


.factory('firebaseData',function($firebase){

  var ref = new Firebase("https://todo-list-c79fe.firebaseio.com/Todo");

  return {
    ref : function(){
      return ref;
    }
  }

})


.factory('SignupService',function($rootScope,$state,$ionicPopup){
 
  return {

    dosignup: function(username,email,password){

      firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
        $rootScope.alreadySignedIn = snapshot.val();
        })
      /*if($rootScope.alreadySignedIn){
          $ionicPopup.alert({
            title:'Error Signing In',
            template:'User already exists! try logging in!'
          });
        }
        .then{

        }*/

 /*         $state.go('login', {}, {location: "replace"}); */  
    }
  }
 
})


.factory('LoginService',function($rootScope,$state){
 
  return {

    dologin: function(email,password){

      firebase.auth().signInWithEmailAndPassword(email, password).then(function(authData){
        var currentUser = authData.uid;
        $rootScope.Uid=$rootScope.currentUser;
        window.localStorage.setItem('authUser',currentUser);
        console.log(currentUser);
         $state.go('home', {}, {location: "replace"});
      }).catch(function(error){
        if (true) {
          alert('error' + error);
        };
      });
        
      },
      isLoggedIn : function(){
      var thisUser =  window.localStorage.getItem('authUser');
      return thisUser ? true : false;
      }
    }
})

.factory('TodoService',function($rootScope,$state,firebaseData,$ionicPopup,$firebaseArray){
 
  return {

    dotodo: function(titles,date,hints){
      var ref = new Firebase("https://todo-list-c79fe.firebaseio.com/Todo");
      var todoref= $firebaseArray(ref);
      $rootScope.todolist=todoref;
      $rootScope.uid=window.localStorage.getItem('authUser');
        todoref.$add({
        Uid   :$rootScope.uid,
        Title : titles,
        date : date,
        Hints : hints
      })

      $state.go('home', {}, {location: "replace"});
     }
}
 
})

