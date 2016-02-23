(function () {
    angular
        .module('mainApp', ['ngRoute'])
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/shop', {
                templateUrl: 'item-list.html',
                controller: 'controllerList',
                controllerAs: 'vm'
            })
            .when('/item/:index', {

                templateUrl: 'item-detail.html',
                controller: 'controllerService',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/shop'
            });


    };
})();