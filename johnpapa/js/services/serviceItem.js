(function () {
    angular
        .module('mainApp')
        .factory('mainFactory', mainFactory);

    mainFactory.$inject = ['$http'];

    function mainFactory($http) {
        return {

            getAllKeyboard: getAllKeyboard,
            getRandom: getRandom,
            getDetailItems: getDetailItems

        };

        function getAllKeyboard() {
            return $http.get('http://localhost:8082/Seminarski/rest/items/keyboard')
                .then(getKeyboardComplete)
                .catch(getKeyboardFailed);

            function getKeyboardComplete(response) {
                console.log(response)
                return response.data;

            }

            function getKeyboardFailed(error) {
                console.log('failed');

            }

        }

        function getRandom() {
            return $http.get('http://localhost:8082/Seminarski/rest/items/random/all')
                .then(getKeyboardComplete)
                .catch(getKeyboardFailed);

            function getKeyboardComplete(response) {
                console.log(response)
                return response.data;

            }

            function getKeyboardFailed(error) {
                console.log('failed');

            }

        }

        function getDetailItems(id) {
            return $http.get('http://localhost:8082/Seminarski/rest/items/getitem/by/' + id)
                .then(itemComplete)
                .catch(itemFailed);

            function itemComplete(response) {
                console.log(response.data)
                return response.data;

            }

            function itemFailed() {
                console.log('failed');

            }

        }
        //        function getOneType(vrsta) {
        //            return $http.get('http://localhost:8082/Seminarski/rest/items/getitem/' + vrsta)
        //                .then(itemComplete)why with value and why with value and key received in angular json objectkey received in angular json object
        //                .catch(itemFailed);
        //
        //            function itemComplete(response) {
        //                return response.data;
        //            }
        //
        //            function itemFailed(error) {
        //                console.log('failed');
        //
        //            }
        //
        //        }
    }

})();