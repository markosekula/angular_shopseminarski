(function () {

    angular
        .module('mainApp')
        .controller('controllerHome', controllerHome);

    controllerHome.$inject = ['loginService'];

    function controllerHome(loginService) {
        var vm = this;
        vm.txt = 'Page Home';
        vm.logout = logout;

        function logout() {
            loginService.logout();

        }

    }

})();