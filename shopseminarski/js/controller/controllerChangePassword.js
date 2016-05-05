(function () {

    angular
        .module('mainApp')
        .controller('controllerChangePassword', controllerChangePassword);

    controllerChangePassword.$inject = ['$location', 'serviceResetPassword', '$routeParams'];

    function controllerChangePassword($location, serviceResetPassword, $routeParams) {
        var vm = this;
        var email = ($routeParams.email);
        vm.changePassword = changePassword;
        vm.backToLogin = backToLogin;


        function changePassword(pass) {
            var userAccount = {};
            userAccount.email = email;
            userAccount.pass = pass;

            // console.log(userAccount);

            return sendDataForChangePassword(userAccount).then(function (data) {

            });
        }

        function sendDataForChangePassword(userAccount) {
            return serviceResetPassword.changePasswordUser(userAccount).then(function (data) {
                vm.msg = data;
                return vm.msg;

            });
        }

        function backToLogin() {
            $location.path("/login");
        }
    }

})();