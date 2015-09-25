/**
 * Created by Sambit on 6/14/2015.
 */
(function() {
    angular.module('reserveApp').factory('appLoginService', appLoginServiceFn);
    function appLoginServiceFn(){
        var status = {};
        status.isLoggedIn = (function(){
            if(sessionStorage.getItem('loggedIn')){
                return true;
            }
            return false;
        })();
        return  status;
    }
})();
