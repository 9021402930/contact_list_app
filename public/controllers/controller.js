var app = angular.module("DemoApp", []);

app.controller("AppCtrl",['$scope','$http', function ($scope, $http) {

    var refresh = function () {
        $http.get('/contactlist').then(function (res) {
            console.log(res);
            $scope.contactlist = res.data;
            //$scope.contact = "";
        });
    };

    refresh();

    $scope.addcontact = function () {
        console.log($scope.contact);
        $http.post("/contactlist", $scope.contact).then(function (res) {
            console.log(res);
            refresh();
            location.reload();

        });
    };

    $scope.remove = function (id) {
        console.log(id);
        $http.delete('/contactlist/' + id).then(function (res) {
            refresh();
        });

    };

    $scope.edit = function (id) {
        console.log(id);
        $http.get('/contactlist/' + id).then(function (res) {
            $scope.contact = res.data;
        });
    };

    $scope.update = function () {
        console.log($scope.contact._id);
        $http.put('/contactlist/' + $scope.contact._id, $scope.contact).then(function (res) {
            refresh();
        });
    };
}]);
