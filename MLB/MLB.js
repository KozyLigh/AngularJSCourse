/**
 * Created by Kozy on 4.4.2016.
 */
angular.module('MLBSavings', [])
    .controller('MLBSavingsController', function($scope) {
        var savingsCtrl = this;

        savingsCtrl.savings = [];
        $scope.savingsCtrl.monthlyPayment=0;
        $scope.savingsCtrl.numberOfMonths=0;
        $scope.savingsCtrl.interestPercent=0;

        savingsCtrl.addSaving = function(monthlyPayment, numberOfMonths, interestPercent) {
            var fullValue=0;
            var valueNoInterest=parseFloat(monthlyPayment)*parseFloat(numberOfMonths);
            var interestValue=0;
            for(var i=0;i<numberOfMonths;i++){
                fullValue=fullValue+(parseFloat(monthlyPayment)+((parseFloat(fullValue)*(parseFloat(interestPercent)/100))));
            }
            interestValue=fullValue- valueNoInterest;
            savingsCtrl.savings.push({monthlyPayment:monthlyPayment, numberOfMonths:numberOfMonths, interestPercent:interestPercent, fullValue:fullValue, valueWithoutInterest:valueNoInterest, interestValue:interestValue, done:false});
            $scope.savingsCtrl.monthlyPayment=0;
            $scope.savingsCtrl.numberOfMonths=0;
            $scope.savingsCtrl.interestPercent=0;
        };

        savingsCtrl.removeSelected = function() {
            var oldSvaings = savingsCtrl.savings;
            savingsCtrl.savings = [];
            angular.forEach(oldSvaings, function(saving) {
                if (!saving.done){
                    savingsCtrl.savings.push(saving);
                }
            });
        };

    });

angular.module('MLBPayments', [])
    .controller('MLBPaymentsController', function($scope) {
        var paymentsCtrl = this;
        $scope.paymentsCtrl.monthlyPayment=0;
        $scope.paymentsCtrl.numberOfMonths=0;
        $scope.calculatedAmount=0;
        $scope.paymentAmount=0;
        $scope.paymentMonths=0;

        paymentsCtrl.showNeededAmount = function(monthlyPayment, numberOfMonths) {
            var calculatedAmount=parseFloat(monthlyPayment)*parseFloat(numberOfMonths);
            $scope.paymentAmount=monthlyPayment;
            $scope.paymentMonths=numberOfMonths;
            $scope.paymentsCtrl.monthlyPayment=0;
            $scope.paymentsCtrl.numberOfMonths=0;
            $scope.calculatedAmount=calculatedAmount;
        };
    });
angular.module('MLB', ['MLBSavings', 'MLBPayments']);
