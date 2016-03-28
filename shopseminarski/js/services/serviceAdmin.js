(function () {

    angular
        .module('mainApp')
        .factory('adminService', adminService);

    adminService.$inject = ['$http', 'sessionService', '$location'];

    function adminService($http, sessionService, $location) {
        var vm = this;

        return {
            insertItem: insertItem,
            getOneType: getOneType,
            getDistinctType: getDistinctType,
            getIdForEdit: getIdForEdit,
            editItem: editItem,
            deleteItem: deleteItem

        };

        function insertItem(proizvodi) {
            return $http.post('http://localhost:8082/Seminarski/rest/items/add', proizvodi)
                .then(insertSuccess)
                .catch(ErrorInsert);

            function insertSuccess() {
                vm.porukaadmin = 'Uspesno unet proizvod!!';
                return vm.porukaadmin;
            }

            function ErrorInsert() {
                return console.log('faield');
            }
        }

        function getOneType(vrsta) {
            //            console.log("vrstaAA:" + vrsta);
            return $http.get('http://localhost:8082/Seminarski/rest/items/getitem/' + vrsta)
                .then(Complete)
                .catch(Error);

            function Complete(response) {
                //                console.log("comp")
                //                console.log(response.data);
                return response.data;
            }

            function Error() {
                return console.log('faield');
            }

        }


        function getDistinctType() {
            return $http.get('http://localhost:8082/Seminarski/rest/items/return/distinct')
                .then(successDistinctType)
                .catch(errorDistinctType);

            function successDistinctType(response) {
                return response.data;

            }

            function errorDistinctType() {
                return console.log('faield distinct type');
            }

        }

        function getIdForEdit(id) {
            return $http.get('http://localhost:8082/Seminarski/rest/items/getitem/byadmin/' + id)
                .then(Complete)
                .catch(Error);

            function Complete(response) {
                return response.data;
            }

            function Error(response) {
                //  console.log(response)
                if (response.data.error == "HTTP 401 Unauthorized") {
                    console.log('HTTP faield edit id.');
                    $location.path('/pocetna');

                } else if (response.status == 401) {
                    //console.log(response.status)
                    sessionService.destroy('token');
                    sessionService.destroy('id');
                    sessionService.destroy('admin');
                    $location.path('/pocetna');
                    console.log('faield edit id. Status. ');

                } else {
                    return console.log('faield edit id');
                }
            }

        }

        function editItem(item) {
            return $http.put('http://localhost:8082/Seminarski/rest/items/update/item/all', item)
                .then(updateSucces)
                .catch(errorUpdate);

            function updateSucces(response) {
                return response.data;
            }

            function errorUpdate() {
                return console.log('faield edit item');
            }
        }

        function deleteItem(id) {
            return $http.delete('http://localhost:8082/Seminarski/rest/items/' + id)
                .then(deleteSucces)
                .catch(errorDelete);

            function deleteSucces(response) {
                return response.data;
            }

            function errorDelete() {
                return console.log('faield delete item');
            }
        }





    }


})();