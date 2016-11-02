angular.module('plunker', [])

  .controller('MainCtrl', function($scope) {
          
        var technologies =[{
            name:"c#", likes:0, dislikes:0},
            {
            name:"ASP.NET", likes:0, dislikes:0},
            {
            name:"JAVA", likes:0, dislikes:0},
          ];
          $scope.technologies = technologies;
          
          $scope.incrementLikes = function(technology){
              technology.likes++;  
          }
          $scope.incrementdisLikes = function(technology){
              technology.dislikes++;  
          }
   });

