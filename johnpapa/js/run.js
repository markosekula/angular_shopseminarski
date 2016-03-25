(function () {
    angular
        .module('mainApp')
        .run(run);

    run.$inject = ['$rootScope', '$location', 'loginService'];

    function run($rootScope, $location, loginService) {

        var routepermission = ['/admin'];
        $rootScope.$on('$routeChangeStart', $routeChangeStart);

        function $routeChangeStart() {
            //console.log('exit: ' + routepermission.indexOf($location.path()));
            // console.log('logged: ' + loginService.islogged());

            if (routepermission.indexOf($location.path()) != -1 && !loginService.isloggedAdmin()) {
                $location.path('/pocetna');
            }

        }

    }

})();