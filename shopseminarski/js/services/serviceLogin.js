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
            isloggedAdmin: isloggedAdmin,
            signup: signup


        };

        function login(user) {
            return $http.post('http://localhost:8082/Seminarski/rest/korisnik/exist', user).then(msgSucces);

            function msgSucces(msg) {
                if (msg.data) {
                    console.log(msg.data.token)
                    sessionService.set('token', msg.data.token);
                    sessionService.set('id', msg.data.id);
                    sessionService.set('admin', msg.data.admin);

                    if (msg.data.admin == 1) {
                        $location.path('/admin');

                    } else {
                        $location.path('/');
                    }

                } else {
                    vm.message = 'Neispravni podaci!!';
                    return vm.message;
                }
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
            sessionService.destroy('id');
            sessionService.destroy('admin');
            $location.path('/pocetna');
        }


        function isloggedAdmin() {
            if (sessionService.get('admin') == 1)
                return true;

        }




    }

})();