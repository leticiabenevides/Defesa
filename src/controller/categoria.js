angular.module('app',["firebase" ])
.controller('appCtrl',function($scope,$firebase){
  
  
  var ref = new Firebase("");
        var sync = $firebase(ref);


  $scope.DB = sync.$asArray();
  
 
  
  $scope.app={id:'',nome:''}
  
  
  $scope.add=function(){
    $scope.DB.$add($scope.app);
    $scope.app={id:'', nome:''}
  
  }
  
  $scope.edit=function(value){
    $scope.app=value
  }
  $scope.delete=function(item){
    $scope.DB.$remove(item)
  }
  
   $scope.delete=function(item){
    $scope.DB.$remove(item)
  }
 
})