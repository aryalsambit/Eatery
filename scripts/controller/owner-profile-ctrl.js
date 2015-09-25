/**
 * Created by Sambit on 6/12/2015.
 */
(function(){
    angular.module('reserveApp').controller('ProfileController', ProfileControllerFn);
    ProfileControllerFn.$inject = ['$location','appProfileService'];
    function ProfileControllerFn($location, service){
        var profileCtrl = this;
        profileCtrl.details = angular.copy(service);
        profileCtrl.updateProfile = function(){
            service.name = profileCtrl.details.name;
            service.address = profileCtrl.details.address;
            service.phone = profileCtrl.details.phone;
            service.email = profileCtrl.details.email;
            service.url = profileCtrl.details.url;
            $location.path('/about');
        };
    }
})();