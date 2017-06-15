/**
 * Created by Chinmay on 12-03-2016.
 */


var app =  angular.module('hashPage',[]);
app.controller('HashPageCntr',function($scope,$http){

    $http({

        method : "GET",
        url : "/fetchHashes"
    }).success( function (data) {
       $scope.data = data;
    });


});



