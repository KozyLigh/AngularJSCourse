angular.module('app', []);

angular.module('app').controller('LotteryController', function($scope, $q, $http){

    $scope.result = "";
    var generatedRand=0;
    $scope.drawnNumbers = [];
    $scope.numberOne=null;
    $scope.numberOneDrawTime=null;
    $scope.numberTwo=null;
    $scope.numberTwoDrawTime=null;
    $scope.numberThree=null;
    $scope.numberThreeDrawTime=null;

    var currentNumber=1;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $scope.drawLotteryNumbers = function()
    {
        $scope.result = 'Drawing number ' + currentNumber;
        var promise = createLotteryPromise();

        promise.then(function(success){
                currentNumber++;
                $scope.result = 'Drawing number ' + currentNumber;
                return createLotteryPromise();
            }, function(failure){
                currentNumber++;
                $scope.result = 'Drawing number ' + currentNumber;
                return createLotteryPromise();
            })
            .then(function(success){
                currentNumber++;
                $scope.result = 'Drawing number ' + currentNumber;
                return createLotteryPromise();
            }, function(failure){
                currentNumber++;
                $scope.result = 'Drawing number ' + currentNumber;
                return createLotteryPromise();
            });

    };

    function createLotteryPromise()
    {
        var deffered = $q.defer();
        var timeout = getRandomInt(parseInt(2000), parseInt(5000));
        setTimeout(function(){
            generatedRand=getRandomInt(parseInt(1), parseInt(100));
            while($scope.drawnNumbers.indexOf(generatedRand)>-1){
                generatedRand=getRandomInt(parseInt(1), parseInt(100));
            }
            $scope.drawnNumbers.push(generatedRand);

            if(currentNumber==1){
                $scope.numberOneDrawTime=timeout;
                $scope.numberOne=generatedRand;
            }else if(currentNumber==2){
                $scope.numberTwoDrawTime=timeout;
                $scope.numberTwo=generatedRand;
            }else{
                $scope.numberThreeDrawTime=timeout;
                $scope.numberThree=generatedRand;
            }
            deffered.resolve(generatedRand);
        }, timeout);

        return deffered.promise;
    }


});