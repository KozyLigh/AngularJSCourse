/**
 * Created by kozy on 31/03/16.
 */
var count=prompt('Vpisi stevilo');
var currentCount=1;
if(isNaN(count)){
    alert(count + ' is not a number!');
}else {
    function x(number) {
        while (currentCount <= number && currentCount > 0) {
            if (currentCount % 3 == 0 && currentCount % 5 == 0) {
                console.log('fizzbuzz');
            } else if (currentCount % 3 == 0) {
                console.log('fizz');
            } else if (currentCount % 5 == 0) {
                console.log('buzz');
            } else {
                console.log(currentCount);
            }
            currentCount++;
        }
    }

    x(count);
}
