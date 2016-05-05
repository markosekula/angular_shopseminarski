(function () {

    angular
        .module('mainApp')
        .factory('serviceKontakt', serviceKontakt);

    serviceKontakt.$inject = ['$http']

    function serviceKontakt($http) {
        var vm = this;
        return {
            insertKontakt: insertKontakt,
            selectAllContact: selectAllContact,
            deleteKontakt: deleteKontakt

        };

        function insertKontakt(contact) {
            return $http.post('http://localhost:8082/Seminarski/rest/contact/add', contact)
                .then(successKontakt)
                .catch(errorKontakt);

            function successKontakt() {
                vm.msg = 'Uspesno poslata poruka!'
                return vm.msg;

            }

            function errorKontakt() {
                return console.log('faield insert contact');
            }

        }

        function selectAllContact() {
            return $http.get('http://localhost:8082/Seminarski/rest/contact/getall')
                .then(successKontakt)
                .catch(errorKontakt);

            function successKontakt(response) {
                return response.data;

            }

            function errorKontakt() {
                return console.log('faield insert contact');
            }

        }

        function deleteKontakt(id) {
            return $http.delete('http://localhost:8082/Seminarski/rest/contact/' + id)
                .then(deleteSucces)
                .catch(errorDelete);

            function deleteSucces(response) {
                return response.data;
            }

            function errorDelete() {
                return console.log('faield delete contact');
            }
        }


    }

})();