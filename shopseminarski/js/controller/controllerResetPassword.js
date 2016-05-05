(function () {

    angular
        .module('mainApp')
        .controller('controllerResetPassword', controllerResetPassword);

    controllerResetPassword.$inject = ['$location', 'serviceResetPassword'];

    function controllerResetPassword($location, serviceResetPassword) {
        var vm = this;

        vm.backToLogin = backToLogin;
        vm.backToRegister = backToRegister;
        vm.sendEmail = sendEmail;

        function backToLogin() {
            $location.path("/login");
        }

        function backToRegister() {
            $location.path("/signup");
        }

        function sendEmail(obj) {
            console.log("objekat", obj)

            var str = '';

            for (var p in obj) {
                if (obj.hasOwnProperty(p)) {
                    str += '\n' + obj[p] + '\n';
                }
            }

            console.log(str)

            return sendEmailForChangePassword(str).then(function (response) {
                // console.log("Success send email!!")

            });
        }

        function sendEmailForChangePassword(email) {
            return serviceResetPassword.getEmailForChangePassword(email)
                .then(function (response) {
                    vm.msg = response;
                    return vm.msg;

                });
        }

    }

})();