/**
 * Created by Sambit on 6/12/2015.
 */
(function() {
    angular.module('reserveApp').controller('LoginController', LoginControllerFn);
    LoginControllerFn.$inject = ['appLoginService', '$location', '$window'];
    function LoginControllerFn(service, $location, $window) {
        var loginCtrl = this;
        loginCtrl.authenticateUser = function(){
            if(loginCtrl.owner.email != null && loginCtrl.owner.email.length > 0 && loginCtrl.owner.password != null && loginCtrl.owner.password.length > 0){
                sessionStorage.setItem('loggedIn','true');
                service.isLoggedIn = true;
                $window.location.reload();
                $location.path('/');
            }
        };
    }
})();