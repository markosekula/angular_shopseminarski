(function () {
    angular
        .module('mainApp')
        .factory('mainFactory', mainFactory);

    mainFactory.$inject = ['$http'];

    function mainFactory($http) {
        return {
            getAllItems: getAllItems,
            getOneItem: getOneItem


        };

        function getAllItems() {
            return $http.get('http://localhost:8082/Seminarski/rest/proizvodi/ispis')
                .then(getItemsComplete)
                .catch(getItemsFailed);

            function getItemsComplete(response) {
                return response.data;

            }

            function getItemsFailed(error) {
                console.log('failed');

            }

        }


        function getOneItem(index) {
            return $http.get('http://localhost:8082/Seminarski/rest/proizvodi/' + index)
                .then(itemComplete)
                .catch(itemFailed);

            function itemComplete(response) {
                return response.data;
            }

            function itemFailed(error) {
                console.log('failed');

            }

        }

    }

})();