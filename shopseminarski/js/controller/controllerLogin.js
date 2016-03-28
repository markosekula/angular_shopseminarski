(function () {

    angular
        .module('mainApp')
        .controller('controllerLogin', controllerLogin);

    controllerLogin.$inject = ['$location', 'loginService'];

    function controllerLogin($location, loginService) {

        var vm = this;
        vm.message = '';

        vm.login = login;
        vm.signup = signup;
        vm.nazadnapocetnu = nazadnapocetnu;

        function login(user) {
            return Message(user).then(function () {
                console.log("Activated!");

            });
        }

        function Message(user) {
            return loginService.login(user).then(function (data) {
                vm.message = data;
                return vm.message;
            });
        }

        function signup(usersignup) {
            return Poruka(usersignup).then(function () {
                console.log("Activated Signup!");

            });
        }

        function Poruka(usersignup) {
            return loginService.signup(usersignup).then(function (data) {
                vm.poruka = data;
                return vm.poruka;

            });

        }

        function nazadnapocetnu() {
            $location.path('/');

        }




    }


})();