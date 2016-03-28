    (function () {
        angular
            .module('mainApp')
            .config(config);

        function config($routeProvider, $httpProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/pocetna.html',
                    controller: 'controllerPocetna',
                    controllerAs: 'vm'
                })
                .when('/login', {
                    templateUrl: 'views/login.html',
                    controller: 'controllerLogin',
                    controllerAs: 'vm'
                })
                .when('/signup', {
                    templateUrl: 'views/signup.html',
                    controller: 'controllerLogin',
                    controllerAs: 'vm'
                })
                .when('/admin', {
                    templateUrl: 'views/admin.html',
                    controller: 'controllerAdmin',
                    controllerAs: 'vm'
                })
                .when('/admin/:id', {
                    templateUrl: 'views/admin-edit.html',
                    controller: 'controllerEdit',
                    controllerAs: 'vm'
                })
                .when('/akcija', {
                    templateUrl: 'views/akcija.html',
                    controller: 'controllerAkcija',
                    controllerAs: 'vm'
                })
                .when('/kontakt', {
                    templateUrl: 'views/kontakt.html',
                    controller: 'controllerKontakt',
                    controllerAs: 'vm'
                })
                .when('/Keyboard', {
                    templateUrl: 'views/item-list.html',
                    controller: 'controllerList',
                    controllerAs: 'vm'
                })
                .when('/Keyboard/:index', {

                    templateUrl: 'views/item-detail.html',
                    controller: 'controllerService',
                    controllerAs: 'vm'
                })
                .when('/CPU', {
                    templateUrl: 'views/item-list.html',
                    controller: 'controllerList',
                    controllerAs: 'vm'
                })
                .when('/CPU/:index', {
                    templateUrl: 'views/item-detail.html',
                    controller: 'controllerService',
                    controllerAs: 'vm'
                })
                .when('/RAM', {
                    templateUrl: 'views/item-list.html',
                    controller: 'controllerList',
                    controllerAs: 'vm'
                })
                .when('/RAM/:index', {
                    templateUrl: 'views/item-detail.html',
                    controller: 'controllerService',
                    controllerAs: 'vm'
                })
                .when('/FMem', {
                    templateUrl: 'views/item-list.html',
                    controller: 'controllerList',
                    controllerAs: 'vm'
                })
                .when('/FMem/:index', {
                    templateUrl: 'views/item-detail.html',
                    controller: 'controllerService',
                    controllerAs: 'vm'
                })
                .when('/GPU', {
                    templateUrl: 'views/item-list.html',
                    controller: 'controllerList',
                    controllerAs: 'vm'
                })
                .when('/GPU/:index', {
                    templateUrl: 'views/item-detail.html',
                    controller: 'controllerService',
                    controllerAs: 'vm'
                })
                .when('/Memory', {
                    templateUrl: 'views/item-list.html',
                    controller: 'controllerList',
                    controllerAs: 'vm'
                })
                .when('/Memory/:index', {
                    templateUrl: 'views/item-detail.html',
                    controller: 'controllerService',
                    controllerAs: 'vm'
                })
                .when('/MBoard', {
                    templateUrl: 'views/item-list.html',
                    controller: 'controllerList',
                    controllerAs: 'vm'
                })
                .when('/MBoard/:index', {
                    templateUrl: 'views/item-detail.html',
                    controller: 'controllerService',
                    controllerAs: 'vm'
                })
                .when('/Monitor', {
                    templateUrl: 'views/item-list.html',
                    controller: 'controllerList',
                    controllerAs: 'vm'
                })
                .when('/Monitor/:index', {
                    templateUrl: 'views/item-detail.html',
                    controller: 'controllerService',
                    controllerAs: 'vm'
                })
                .when('/Mouse', {
                    templateUrl: 'views/item-list.html',
                    controller: 'controllerList',
                    controllerAs: 'vm'
                })
                .when('/Mouse/:index', {
                    templateUrl: 'views/item-detail.html',
                    controller: 'controllerService',
                    controllerAs: 'vm'
                })

            .otherwise({
                redirectTo: '/'
            })


            $httpProvider.interceptors.push(httpInterceptor);
            httpInterceptor.$inject = ['$q', '$location', 'sessionService'];

            function httpInterceptor($q, $location, sessionService) {
                var vm = this;

                return {
                    'request': request,
                    'responseError': responseError
                }

                function request(config) {
                    config.headers = config.headers || {};
                    if (sessionService.get('token')) {
                        config.headers.Authorization = 'Bearer ' + sessionService.get('token');
                    }
                    return config;
                }

                function responseError(response) {
                    if (response.status === 401 || response.status === 403) {
                        $location.path('/login');
                    }
                    return $q.reject(response);

                }
            }

        }

    })();