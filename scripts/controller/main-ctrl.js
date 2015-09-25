/**
 * Created by Sambit on 6/12/2015.
 */
(function() {
    angular.module('reserveApp').controller('MainController', MainControllerFn);
    MainControllerFn.$inject = ['appLoginService', '$window','$location'];
    function MainControllerFn(service, $window, $location) {
        var mainCtrl = this;
        mainCtrl.isLoggedIn = service.isLoggedIn;
        mainCtrl.logoutOwner = function(){
            service.isLoggedIn = false;
            sessionStorage.removeItem('loggedIn');
            $window.location.reload();
            $location.path('/login');
        }
    }
})();