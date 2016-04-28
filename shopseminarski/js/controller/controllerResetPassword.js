(function () {

    angular
        .module('mainApp')
        .controller('controllerResetPassword', controllerResetPassword);

    controllerResetPassword.$inject = ['$location', 'serviceResetPassword'];

    function controllerResetPassword($location, serviceResetPassword) {
        var vm = this;

        vm.backToLogin = backToLogin;
        vm.sendEmail = sendEmail;

        function backToLogin() {
            $location.path("/login");
        }

        function sendEmail(obj) {
            console.log("objekat", obj)
            var str = '';
            var p;

            if (obj.hasOwnProperty(p)) {
                str = '\n' + obj[p] + '\n';
            }

            console.log(str)

            return sendEmailForChangePassword(str).then(function (data) {
                console.log("Success send email!!")
            });
        }

        function sendEmailForChangePassword(email) {
            return serviceResetPassword.getEmailForChangePassword(email)
                .then(function (data) {

                });
        }


    }

})();