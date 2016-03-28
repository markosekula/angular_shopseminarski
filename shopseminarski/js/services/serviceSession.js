(function () {

    angular
        .module('mainApp')
        .factory('sessionService', sessionService);

    function sessionService() {

        return {
            set: set,
            get: get,
            destroy: destroy

        };

        function set(key, value) {
            return localStorage.setItem(key, value);
        }

        function get(key) {
            return localStorage.getItem(key);
        }

        function destroy(key) {
            return localStorage.removeItem(key);
        }


    }


})();