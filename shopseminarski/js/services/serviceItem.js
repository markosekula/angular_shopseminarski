(function () {

    angular
        .module('mainApp')
        .factory('mainFactory', mainFactory);

    mainFactory.$inject = ['$http'];

    function mainFactory($http) {

        return {
            getRandom: getRandom,
            getDetailItems: getDetailItems,
            randomOnAction: randomOnAction,
            getOneTypeUser: getOneTypeUser
        };

        function getRandom() {
            return $http.get('http://localhost:8082/Seminarski/rest/items/random/all')
                .then(Complete)
                .catch(Error);

            function Complete(response) {
                return response.data;
            }

            function Error() {
                return console.log('faield');
            }

        }

        function getDetailItems(id) {
            return $http.get('http://localhost:8082/Seminarski/rest/items/getitem/by/' + id)
                .then(Complete)
                .catch(Error);

            function Complete(response) {
                return response.data;
            }

            function Error() {
                return console.log('faield');
            }

        }

        function getOneTypeUser(vrsta) {
            return $http.get('http://localhost:8082/Seminarski/rest/items/getitem' + vrsta)
                .then(Complete)
                .catch(Error);

            function Complete(response) {
                return response.data;
            }

            function Error() {
                return console.log('faield');
            }

        }

        function randomOnAction() {
            return $http.get('http://localhost:8082/Seminarski/rest/items/random/on/action')
                .then(Complete)
                .catch(Error);

            function Complete(response) {
                return response.data;
            }

            function Error() {
                return console.log('faield');
            }

        }






    }


})();