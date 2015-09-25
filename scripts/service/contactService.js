/**
 * Created by Sambit on 6/13/2015.
 */
(function(){
    angular.module('reserveApp').factory('appContactService', appContactServiceFn);
    var contactList = [];
    function appContactServiceFn() {
        var people = {};
        people.addNewContact = function(newContact){
            contactList.push(newContact);
            people.updateContact();
        };

        people.getContact = function(phone){
            for (var i in contactList) {
                if (contactList[i].phone == phone) {
                    return contactList[i];
                }
            }
        };

        people.deleteContact = function (phone) {
            for (var i in contactList) {
                if (contactList[i].phone == phone) {
                    contactList.splice(i, 1);
                    people.updateContact();
                }
            }
        };

        people.allContact = function () {
            var list = localStorage.getItem('contactItems');
            if(list != null && list.length > 0){
                contactList = JSON.parse(list);
            }
            return contactList;
        };

        people.updateContact = function(){
            if(localStorage.getItem('contactItems') != null){
                localStorage.removeItem('contactItems');
            }
            localStorage.setItem('contactItems', JSON.stringify(contactList));
        };
        return people;
    }
})();

