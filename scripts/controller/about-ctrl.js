/**
 * Created by Sambit on 6/12/2015.
 */
(function(){
    angular.module('reserveApp').controller('AboutController', AboutControllerFn);
    AboutControllerFn.$inject = ['appProfileService'];
    function AboutControllerFn(service){
        var aboutCtrl = this;
        aboutCtrl.details = service;
    }
})();