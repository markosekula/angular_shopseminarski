(function () {

    angular
        .module('mainApp')
        .factory('serviceKomentar', serviceKomentar);

    serviceKomentar.$inject = ['$http'];


    function serviceKomentar($http) {

        return {
            sendComment: sendComment,
            getComments: getComments
        };

        function sendComment(comment) {
            return $http.post('http://localhost:8082/Seminarski/rest/comments/add', comment)
                .then(Complete)
                .catch(Error);

            function Complete(response) {
                return response.data;
            }

            function Error(error) {
                return console.log('faield', error);
            }
        }

        function getComments(idProizvoda) {
            return $http.get('http://localhost:8082/Seminarski/rest/comments/getcomments/' + idProizvoda)
                .then(Complete)
                .catch(Error);

            function Complete(response) {
                return response.data;
            }

            function Error(error) {
                return console.log('faield', error);
            }

        }
    }

})();