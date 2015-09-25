/**
 * Created by Sambit on 6/14/2015.
 */
(function(){
    angular.module('reserveApp').controller('MessageController', MessageControllerFn);
    MessageControllerFn.$inject = ['$stateParams'];
    function MessageControllerFn($stateParams){
        var messageCtrl = this;
        console.log($stateParams);
        messageCtrl.code = $stateParams.code;
    }
})();
