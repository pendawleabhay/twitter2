/**
 * Created by Chinmay on 13-03-2016.
 */

var app =  angular.module('homePage',[]);

app.controller('searchCntr',function($scope,$http) {

    $scope.searchHash =function () {
        $http({
            method: "POST",
            data: {
                "search": $scope.search
            },
            url: "/setHash"
        }).success(function (data) {
            //alert("Hash value set");
            window.location.assign("/goToHashPage");
        });
    }
});



/*

app.factory('mySharedService', function ($rootScope)
{
    var SharedService = {};
    SharedService.message = '';
    sharedService.prepForBroadcast = function (msg)
    {
        this.message = msg;
        this.broadCastItem();
    };
    sharedService.broadcastItem = function ()
    {
        $rootScope.$broadCast('handleBroadcast');
    };
    return sharedService;
});*/
