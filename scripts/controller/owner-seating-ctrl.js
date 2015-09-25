/**
 * Created by Sambit on 6/12/2015.
 */
(function(){
    angular.module('reserveApp').controller('SeatingController',SeatingControllerFn);
    SeatingControllerFn.$inject = ['appReservationService', '$location'];

    function SeatingControllerFn(service, $location){
        var seatingCtrl = this;
        seatingCtrl.ShowField = false;
        seatingCtrl.assignProperty = function(obj){
            obj.statusCode = 'Occupied';
            obj.status = true;
            obj.tableClass = 'seats occupied img-rounded';
            return obj;
        };

        seatingCtrl.resetProperty = function(obj){
            obj.cnf = '';
            obj.size = '';
            obj.time = '';
            obj.statusCode = 'Vacant';
            obj.status = false;
            obj.tableClass = 'seats available img-rounded';
            return obj;
        };

        seatingCtrl.toggleProperty = function(obj){
            if(obj.status == false){
                seatingCtrl.ShowField = true;
                seatingCtrl.assignReservation = function(){
                    var reserveItem = service.getGuest(seatingCtrl.code);
                    if (reserveItem != null) {
                        seatingCtrl.ShowField = false;
                        obj.cnf = reserveItem.conf;
                        obj.size = reserveItem.size;
                        obj.time = reserveItem.time;
                        seatingCtrl.assignProperty(obj);
                        service.updateTable(obj);
                    }else{
                        obj.cnf='';
                        alert("Please enter valid confirmation code.");
                    }
                    seatingCtrl.code = "";
                }
            }else{
                seatingCtrl.ShowField = false;
                seatingCtrl.resetProperty(obj);
                service.updateTable(obj);
            }
        };

        service.allAssignments();

        seatingCtrl.table = [];
        seatingCtrl.table.first = service.getTable(1);
        if(seatingCtrl.table.first == null){
            seatingCtrl.table.first = {};
            seatingCtrl.table.first.number = 1;
            seatingCtrl.resetProperty(seatingCtrl.table.first);
            service.addTable(seatingCtrl.table.first);
        }
        seatingCtrl.table.first.assign = function(){
            seatingCtrl.toggleProperty(seatingCtrl.table.first);
        };
        seatingCtrl.table.first.showDetails = function(){
            $location.path('/details/' + seatingCtrl.table.first.cnf);
        };

        seatingCtrl.table.second = service.getTable(2);
        if(seatingCtrl.table.second == null){
            seatingCtrl.table.second = {};
            seatingCtrl.table.second.number = 2;
            seatingCtrl.resetProperty(seatingCtrl.table.second);
            service.addTable(seatingCtrl.table.second);
        }
        seatingCtrl.table.second.assign = function(){
            seatingCtrl.toggleProperty(seatingCtrl.table.second);
        };
        seatingCtrl.table.second.showDetails = function(){
            $location.path('/details/' + seatingCtrl.table.second.cnf);
        };

        seatingCtrl.table.third = service.getTable(3);
        if(seatingCtrl.table.third == null){
            seatingCtrl.table.third = {};
            seatingCtrl.table.third.number = 3;
            seatingCtrl.resetProperty(seatingCtrl.table.third);
            service.addTable(seatingCtrl.table.third);
        }
        seatingCtrl.table.third.assign = function(){
            seatingCtrl.toggleProperty(seatingCtrl.table.third);
        };
        seatingCtrl.table.third.showDetails = function(){
            $location.path('/details/' + seatingCtrl.table.third.cnf);
        };

        seatingCtrl.table.fourth = service.getTable(4);
        if(seatingCtrl.table.fourth == null) {
            seatingCtrl.table.fourth = {};
            seatingCtrl.table.fourth.number = 4;
            seatingCtrl.resetProperty(seatingCtrl.table.fourth);
            service.addTable(seatingCtrl.table.fourth);
        }
        seatingCtrl.table.fourth.assign = function(){
            seatingCtrl.toggleProperty(seatingCtrl.table.fourth);
        };
        seatingCtrl.table.fourth.showDetails = function(){
            $location.path('/details/' + seatingCtrl.table.fourth.cnf);
        };

        seatingCtrl.table.fifth = service.getTable(5);
        if(seatingCtrl.table.fifth == null) {
            seatingCtrl.table.fifth = {};
            seatingCtrl.table.fifth.number = 5;
            seatingCtrl.resetProperty(seatingCtrl.table.fifth);
            service.addTable(seatingCtrl.table.fifth);
        }
        seatingCtrl.table.fifth.assign = function(){
            seatingCtrl.toggleProperty(seatingCtrl.table.fifth);
        };
        seatingCtrl.table.fifth.showDetails = function(){
            $location.path('/details/' + seatingCtrl.table.fifth.cnf);
        };

        seatingCtrl.table.sixth = service.getTable(6);
        if(seatingCtrl.table.sixth == null) {
            seatingCtrl.table.sixth = {};
            seatingCtrl.table.sixth.number = 6;
            seatingCtrl.resetProperty(seatingCtrl.table.sixth);
            service.addTable(seatingCtrl.table.sixth);
        }
        seatingCtrl.table.sixth.assign = function(){
            seatingCtrl.toggleProperty(seatingCtrl.table.sixth);
        };
        seatingCtrl.table.sixth.showDetails = function(){
            $location.path('/details/' + seatingCtrl.table.sixth.cnf);
        };
    }
})();
