/**
 * Created by Sambit on 6/13/2015.
 */
(function() {
    angular.module('reserveApp').factory('appProfileService', appProfileServiceFn);
    function appProfileServiceFn() {
        var details = {};
        details.name = 'Eatery Foods Inc.';
        details.address = '4502 University City Blvd, Charlotte';
        details.phone = '980-988-2343';
        details.email = 'eatery@eatery.com';
        details.url = 'www.eatery.com';
        return details;
    }
})();