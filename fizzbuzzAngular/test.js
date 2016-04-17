/**
 * Created by kozy on 17/04/16.
 */
angular.module('Fizzbuzz', []);

angular.module('Fizzbuzz', [])
    .controller('FizzbuzzController', function($scope,Fizzbuzz) {
        var fizzbuzzCtrl = this;
        $scope.$watch('fizzbuzzCtrl.number', function(number)
        {
            if(isNaN(fizzbuzzCtrl.number)&&fizzbuzzCtrl.number!=null){
                alert('This is not a number! Please only enter valid numbers!');
                fizzbuzzCtrl.number=null;
            }else {
                fizzbuzzCtrl.results = Fizzbuzz.getResults(number);
            }
        });
    });

angular.module('Fizzbuzz').factory('Fizzbuzz', function()
{
    return  {
        getResults: getResults
    };

    function getResults(number)
    {
        var results = [];
        var index=1;
        while (index<=number){
            var currentNumber = '';
            if(index%3==0 && index%5==0){
                currentNumber = 'fizzbuzz';
            }else if(index%5==0){
                currentNumber='buzz';
            }else if(index%3==0){
                currentNumber='fizz';
            }else{
                currentNumber = index;
            }
            results.push(currentNumber);
            index++;
        }
        return results;
    }
});