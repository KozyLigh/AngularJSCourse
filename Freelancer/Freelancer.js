/**
 * Created by Kozy on 7.4.2016.
 */
angular.module('WebPage', [])
    .controller('WebPageController', function() {
        var webPageCtrl = this;

        webPageCtrl.title='Web page inquiry form';
        webPageCtrl.submit = function (email, phoneNumber, address, zipCode, demand ){
            alert('Your demand for a web page freelancer has been sent for \n Email has been sent to '+email+'\n phone number '+phoneNumber+'\n address '+'\n zip code '+zipCode+'\n demand:\n'+demand);
        };

    });

angular.module('AngularForm', [])
    .controller('AngularFormController', function() {
        var formCtrl = this;
        formCtrl.title='AngularJS inquiry form';
        formCtrl.submit = function (email, phoneNumber, address, zipCode, demand ){
            alert('Your demand for a angular form freelancer has been sent for \n Email has been sent to '+email+'\n phone number '+phoneNumber+'\n address '+'\n zip code '+zipCode+'\n demand:\n'+demand);
        };
    });

angular.module('Consultancy', [])
    .controller('ConsultancyController', function() {
        var consultCtrl = this;
        consultCtrl.title='Consultancy inquiry form'
        consultCtrl.submit = function (email, phoneNumber, address, zipCode, salary, demand ){
            var jsonObject = [];
            jsonObject.push({email:email, phone_number:phoneNumber, address:address, zip_code:zipCode, salary:salary, demand:demand });
            alert('Your demand for a consultancy has been sent for \n Email has been sent to '+email+'\n phone number '+phoneNumber+'\n address '+'\n zip code '+zipCode+'\n salary or:' + salary+ ' per hour \ndemand:\n'+demand );
        };
    });

angular.module('Freelancer', ['WebPage', 'AngularForm', 'Consultancy', 'ngAnimate']);
