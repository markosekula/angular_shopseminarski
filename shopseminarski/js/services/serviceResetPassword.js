(function () {

    angular
        .module('mainApp')
        .service('serviceResetPassword', serviceResetPassword);

    serviceResetPassword.$inject = ['$http'];

    function serviceResetPassword($http) {

        var vm = this;

        return {
            getEmailForChangePassword: getEmailForChangePassword

        };

        function getEmailForChangePassword(email) {
            return $http.get('http://localhost:8082/Seminarski/rest/reset/password/' + email)
                .then(SuccessfulChanges)
                .catch(ErrorChanges);

            function SuccessfulChanges(response) {
                return response.data;
            }

            function ErrorChanges(error) {
                return console.log('faield get email', error);
            }

        }

    }

})();