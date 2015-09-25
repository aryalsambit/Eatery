/**
 * Created by Sambit on 6/13/2015.
 */
(function(){
    angular.module('reserveApp').factory('appReservationService', appReservationServiceFn);
    var reservationList = [];
    var assignmentList = [];
    function appReservationServiceFn() {
        var guest = {};

        guest.addNewGuest = function(newGuest){
            reservationList.push(newGuest);
            guest.updateItem();
        };

        guest.addTable = function(table){
            assignmentList.push(table);
            guest.updateAssignment();
        }

        guest.getGuest = function(conf){
            for (var i in reservationList) {
                if (reservationList[i].conf == conf) {
                    return reservationList[i];
                }
            }
            return null;
        };

        guest.getTable = function(number){
            for (var i in assignmentList) {
                if (assignmentList[i].number == number) {
                    return assignmentList[i];
                }
            }
            return null;
        };


        guest.updateGuest = function(item){
            for (var i in reservationList) {
                if (reservationList[i].conf == item.conf) {
                    reservationList[i] = item;
                    guest.updateItem();
                }
            }
        };

        guest.updateTable = function(newAssignment){
            for (var i in assignmentList) {
                if (assignmentList[i].number == newAssignment.number) {
                    assignmentList[i] = newAssignment;
                    guest.updateAssignment();
                }
            }
        };

        guest.deleteGuest = function (conf) {
            for (var i in reservationList) {
                if (reservationList[i].conf == conf) {
                    reservationList.splice(i, 1);
                    guest.updateItem();
                }
            }
            return null;
        };

        guest.allReservation = function () {
            var list = localStorage.getItem('reserveItems');
            if(list != null && list.length > 0){
                reservationList = JSON.parse(list);
            }
            return reservationList;
        };

        guest.allAssignments = function () {
            var list = localStorage.getItem('assignItems');
            if(list != null && list.length > 0){
                assignmentList = JSON.parse(list);
            }
            return assignmentList;
        };

        guest.updateItem = function(){
            if(localStorage.getItem('reserveItems') != null){
                localStorage.removeItem('reserveItems');
            }
            localStorage.setItem('reserveItems', JSON.stringify(reservationList));
        };

        guest.updateAssignment = function(){
            if(localStorage.getItem('assignItems') != null){
                localStorage.removeItem('assignItems');
            }
            localStorage.setItem('assignItems', JSON.stringify(assignmentList));
        };

        return guest;
    }
})();
