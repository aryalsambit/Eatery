/**
 * Created by Sambit on 6/15/2015.
 */
(function(){
    angular.module('reserveApp').controller('ModifyController',ModifyControllerFn);
    ModifyControllerFn.$inject = ['appReservationService','$location'];
    function ModifyControllerFn(service, $location){
        var modifyCtrl = this;

        modifyCtrl.editReservation = function() {
            modifyCtrl.reservationItem = service.getGuest(modifyCtrl.code);
            if (modifyCtrl.reservationItem != null) {
                $location.path('/editReservation/' + modifyCtrl.code);
            }else{
                alert("Please enter valid confirmation code.");
            }
        };

        modifyCtrl.deleteReservation = function(){
            modifyCtrl.reservationItem = service.getGuest(modifyCtrl.code);
            if(modifyCtrl.reservationItem != null){
                if (confirm("Do you want to delete this reservation?"))
                {
                    service.deleteGuest(modifyCtrl.code);
                    $location.path('/home');
                }
            }else{
                alert("Please enter valid confirmation code.");
            }
        }
    }
})();
