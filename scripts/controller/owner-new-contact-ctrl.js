/**
 * Created by Sambit on 6/13/2015.
 */
(function(){
    angular.module('reserveApp').controller('NewContactController', NewContactControllerFn);
    NewContactControllerFn.$inject = ['$location','appContactService'];
    function NewContactControllerFn($location, service){
        var newContactCtrl = this;
        newContactCtrl.contact = [];
        newContactCtrl.addContact = function(){
            service.addNewContact(newContactCtrl.newContact);
            newContactCtrl.newContact = {};
            $location.path('/contactList');
        };
    }
})();