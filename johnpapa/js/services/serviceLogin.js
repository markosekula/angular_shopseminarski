(function () {

    angular
        .module('mainApp')
        .factory('loginService', loginService);

    loginService.$inject = ['$http', '$location', 'sessionService'];

    function loginService($http, $location, sessionService) {
        var vm = this;
        vm.admin = '';

        return {
            login: login,
            logout: logout,
            islogged: islogged,
            signup: signup,
            isAdmin: isAdmin

        };

        function login(user) {
            return $http.post('http://localhost:8082/Seminarski/rest/korisnik/login', user).then(msgSucces);

            function msgSucces(msg) {
                if (msg.data) {
                    // console.log(msg.data.token)
                    sessionService.set('token', msg.data.token);
                    $location.path('/admin');

                } else {
                    vm.message = 'Neispravni podaci!!';
                    return vm.message;
                }
            }

        }

        function isAdmin(admin) {
            if (vm.admin == 1) {
                return true;
            } else {
                return false;

            }

        }

        function signup(usersignup) {
            return $http.post('http://localhost:8082/Seminarski/rest/korisnik/existkorisnik', usersignup).then(signupSuccess);

            function signupSuccess(signup) {
                if (signup.data == 'true') {
                    //console.log(signup.data)
                    vm.poruka = 'Uspesna registarcija!!';
                    return vm.poruka;

                } else {

                    vm.poruka = 'Postoji vec korisnik sa istim email-om!';
                    return vm.poruka;

                }
            }
        }

        function logout() {
            sessionService.destroy('token');
            $location.path('/pocetna');
        }

        function islogged() {
            //console.log("aa " + sessionService.get('user'));
            if (sessionService.get('token')) return true;

        }




    }

})();