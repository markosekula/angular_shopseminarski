(function () {

    angular
        .module('mainApp')
        .factory('loginService', loginService);

    loginService.$inject = ['$http', '$location', 'sessionService'];

    function loginService($http, $location, sessionService) {
        var vm = this;

        return {
            login: login,
            logout: logout,
            islogged: islogged

        };

        function login(user) {
            return $http.post('http://localhost:8082/Seminarski/rest/admin/login', user).then(msgSucces);

            function msgSucces(msg) {
                if (msg.data) {
                    //console.log(msg.data.token)
                    sessionService.set('token', msg.data.token);
                    $location.path('/home');

                } else {
                    vm.message = 'incorrect information';
                    return vm.message;
                }
            }

        }

        function logout() {
            sessionService.destroy('token');
            $location.path('/login');
        }

        function islogged() {
            //console.log("aa " + sessionService.get('user'));
            if (sessionService.get('token')) return true;

        }




    }

})();