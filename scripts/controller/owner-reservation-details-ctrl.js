/**
 * Created by Sambit on 6/15/2015.
 */
(function(){
    angular.module('reserveApp').controller('DetailsController', DetailsControllerFn);
    DetailsControllerFn.$inject = ['appReservationService','$stateParams','$location'];
    function DetailsControllerFn(service,$stateParams,$location){
        var detailsCtrl = this;
        detailsCtrl.reserveDetails = service.getGuest($stateParams.code);
        detailsCtrl.editReservation = function(){
            $location.path('/editReservation/' + $stateParams.code);
        };
    }
})();
