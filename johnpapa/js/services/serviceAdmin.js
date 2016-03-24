(function () {

    angular
        .module('mainApp')
        .factory('adminService', adminService);

    adminService.$inject = ['$http'];

    function adminService($http) {
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
            return $http.get('http://localhost:8082/Seminarski/rest/items/getitem/by/' + id)
                .then(Complete)
                .catch(Error);

            function Complete(response) {
                console.log(response.data)
                return response.data;
            }

            function Error() {
                return console.log('faield edit id');
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