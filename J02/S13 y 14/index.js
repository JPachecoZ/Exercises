let app = angular.module("MyApp",[])

app.controller("formCtrl", function($scope){
    $scope.master = { firstName: "John", lastName: "Doe" }
    $scope.reset = function(){
        $scope.user = angular.copy($scope.master)
    }
    $scope.reset()
})
