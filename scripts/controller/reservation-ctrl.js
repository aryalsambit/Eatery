/**
 * Created by Sambit on 6/12/2015.
 */
(function(){
    angular.module('reserveApp').controller('ReserveController', ReserveControllerFn);
    ReserveControllerFn.$inject = ['$location','$filter','appReservationService'];
    function ReserveControllerFn($location, $filter, service){
        var reserveCtrl = this;
        reserveCtrl.guest = [];
        reserveCtrl.addReservation = function(){
            reserveCtrl.newGuest.conf = 'CONF' + new Date().getTime()+ '_' + Math.floor((Math.random() * 10000) + 1);
            reserveCtrl.newGuest.date = $filter('date')(reserveCtrl.newGuest.date, "MM/dd/yyyy");
            reserveCtrl.newGuest.time = $filter('date')(reserveCtrl.newGuest.time, "HH:mm:ss");
            service.addNewGuest(reserveCtrl.newGuest);
            var code = reserveCtrl.newGuest.conf;
            reserveCtrl.newGuest = {};
            $location.path('/message/' + code);
        };
        reserveCtrl.modifyReservation = function(){
            $location.path('/modifyReservation');
        };
    }
})();