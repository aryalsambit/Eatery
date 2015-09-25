(function() {
    angular.module('reserveApp', ['ui.router', 'ui.bootstrap']).config(moduleConfig);
    moduleConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
    function moduleConfig($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.tpl.html'
            })
            .state('reserve', {
                url: '/reserve',
                templateUrl: 'templates/reservation.tpl.html',
                controller: 'ReserveController',
                controllerAs: 'reserveCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl:'templates/aboutus.tpl.html',
                controller: 'AboutController',
                controllerAs: 'aboutCtrl'
            })
            .state('reserveList', {
                url: '/reserveList',
                templateUrl:'templates/owner.reservation.tpl.html',
                controller: 'ReserveListController',
                controllerAs: 'reserveListCtrl'
            })
            .state('seating',{
                url:'/seating',
                templateUrl:'templates/owner.seating.tpl.html',
                controller: 'SeatingController',
                controllerAs: 'seatingCtrl'
            })
            .state('profile',{
                url:'/profile',
                templateUrl:'templates/owner.profile.tpl.html',
                controller: 'ProfileController',
                controllerAs: 'profileCtrl'
            })
            .state('contactList',{
                url:'/contactList',
                templateUrl:'templates/owner.contact-list.tpl.html',
                controller: 'ContactController',
                controllerAs: 'contactCtrl'
            })
            .state('newContact',{
                url:'/newContact',
                templateUrl:'templates/owner.new-contact.tpl.html',
                controller: 'NewContactController',
                controllerAs: 'newContactCtrl'
            })
            .state('details',{
                url:'/details/:code',
                templateUrl:'templates/owner.reservation.details.tpl.html',
                controller: 'DetailsController',
                controllerAs: 'detailsCtrl'
            })
            .state('message',{
                url:'/message/:code',
                templateUrl:'templates/message.tpl.html',
                controller: 'MessageController',
                controllerAs: 'messageCtrl'
            }).state('login',{
                url:'/login',
                templateUrl:'templates/owner.login.tpl.html',
                controller: 'LoginController',
                controllerAs: 'loginCtrl'
            }).state('modifyReservation',{
                url:'/modifyReservation',
                templateUrl:'templates/modify.reservation.tpl.html',
                controller: 'ModifyController',
                controllerAs: 'modifyCtrl'
            }).state('editReservation',{
                url:'/editReservation/:code',
                templateUrl:'templates/edit.reservation.tpl.html',
                controller: 'EditController',
                controllerAs: 'editCtrl'
            });
        }
})();