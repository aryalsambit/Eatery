/**
 * Created by Sambit on 6/12/2015.
 */
(function(){
    angular.module('reserveApp').controller('ReserveListController', ReserveListControllerFn);
    ReserveListControllerFn.$inject = ['appReservationService', '$location'];
    function ReserveListControllerFn(service, $location){
        var reserveListCtrl = this;
        reserveListCtrl.items = service.allReservation();
        reserveListCtrl.deleteItem = function(id) {
            service.deleteGuest(id);
        };
        reserveListCtrl.createReservation = function(){
            $location.path('/reserve');
        };
        reserveListCtrl.showDetails = function(conf) {
            $location.path('/details/' + conf);
        };
    }
})();