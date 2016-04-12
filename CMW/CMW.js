angular.module('app', []);

angular.module('app').controller('PromiseController', function($scope, $q, $http){

        var carsCtrl={};
        function gatherCarsData(){
            $http.get('http://smartninja.betoo.si/api/CMW/cars').then(function(success){
                $scope.cars = success.data;
                gatherTimeslotsData();
            }, function(error){
                alert('Cars didn\'t work');
            });

        };

        function gatherTimeslotsData(){
            $http.get('http://smartninja.betoo.si//api/CMW/timeslots').then(function(success){
                $scope.timeslots = success.data;
            }, function(error){
                alert('Timeslots didn\'t work');
            });
        };

    gatherCarsData();

    $scope.reserveSelected = function ( timeslot, email ){

        var data = angular.toJson({
            timeslotId: $scope.timeslot.id,
            email: $scope.email
        },true);

        var config = {
            headers : {
                'Content-Type': 'application/json'
            }
        }

        $http.post('http://smartninja.betoo.si//api/CMW/reservations', data, config).then(function(success){
            alert('Reservation worked');
        }, function(error){
            alert('Reservation didn\'t work');
        });
    }


    });
