/**
 * Created by Sambit on 6/15/2015.
 */
(function(){
    angular.module('reserveApp').controller('EditController',EditControllerFn);
    EditControllerFn.$inject = ['appReservationService','$location','$stateParams','$filter'];
    function EditControllerFn(service, $location, $stateParams,$filter){
        var editCtrl = this;
        editCtrl.reservationItem = service.getGuest($stateParams.code);
        editCtrl.updateReservation = function(){
            editCtrl.reservationItem.date = $filter('date')(editCtrl.reservationItem.date, "MM/dd/yyyy");
            editCtrl.reservationItem.time = $filter('date')(editCtrl.reservationItem.time, "HH:mm:ss");
            service.updateGuest(editCtrl.reservationItem);
            $location.path('/home');
        }
    }
})();
