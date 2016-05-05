(function () {

    angular
        .module('mainApp')
        .service('serviceResetPassword', serviceResetPassword);

    serviceResetPassword.$inject = ['$http'];

    function serviceResetPassword($http) {

        var vm = this;

        return {
            getEmailForChangePassword: getEmailForChangePassword,
            changePasswordUser: changePasswordUser
        };

        function getEmailForChangePassword(email) {
            return $http.get('http://localhost:8082/Seminarski/rest/reset-password/' + email)
                .then(SuccessChanges)
                .catch(ErrorChanges);

            function SuccessChanges(response) {
                vm.msg = response.data;
                return vm.msg;

            }

            function ErrorChanges(error) {
                return console.log('faield get email', error);
            }

        }

        function changePasswordUser(userAccount) {
            return $http.put('http://localhost:8082/Seminarski/rest/reset-password/update', userAccount)
                .then(SuccessChangePassword)
                .catch(ErrorChangePassword);

            function SuccessChangePassword(response) {
                vm.msg = "Successful Change Passwords!"
                return vm.msg;
            }

            function ErrorChangePassword(error) {
                return console.log('faield get change password', error);
            }

        }


    }

})();