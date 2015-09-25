/**
 * Created by Sambit on 6/12/2015.
 */
(function(){
    angular.module('reserveApp').controller('ContactController', ContactControllerFn);
    ContactControllerFn.$inject = ['$location','appContactService'];
    function ContactControllerFn($location, service){
        var contactCtrl = this;
        contactCtrl.contacts = service.allContact();
        contactCtrl.addContact = function(){
            $location.path('/newContact');
        };
        contactCtrl.deleteContact = function(phone) {
            service.deleteContact(phone);
        };
    }
})();
