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
            deleteItem: deleteItem,
            getDateAndTime: getDateAndTime,
            getCart: getCart,
            deletePurchase: deletePurchase,
            getAllUsers: getAllUsers,
            deleteUser: deleteUser

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


        function getDateAndTime() {
            return $http.get('http://localhost:8082/Seminarski/rest/shopping/gettime')
                .then(SuccessDate)
                .catch(errorDate);

            function SuccessDate(response) {
                return response.data;
            }

            function errorDate(error) {
                return console.log('faield dateAndTime', error);
            }

        }

        function getCart(id) {
            return $http.get('http://localhost:8082/Seminarski/rest/admincart/' + id)
                .then(SuccessCart)
                .catch(errorCart);

            function SuccessCart(response) {
                console.log(response.data)
                return response.data;
            }

            function errorCart(error) {
                return console.log('faield GET CART', error);
            }

        }

        function deletePurchase(id) {
            return $http.delete('http://localhost:8082/Seminarski/rest/admincart/delete/' + id)
                .then(deleteSucces)
                .catch(errorDelete);

            function deleteSucces(response) {
                console.log(response.data)
                return response.data;
            }

            function errorDelete(error) {
                return console.log('faield delete purchase', error);
            }
        }

        function getAllUsers() {
            return $http.get('http://localhost:8082/Seminarski/rest/korisnik/getusers')
                .then(SuccessAllUsers)
                .catch(errorAllUsers);

            function SuccessAllUsers(response) {
                console.log(response.data)
                return response.data;
            }

            function errorAllUsers(error) {
                return console.log('faield All Users', error);
            }

        }

        function deleteUser(id) {
            return $http.delete('http://localhost:8082/Seminarski/rest/korisnik/delete/' + id)
                .then(deleteSucces)
                .catch(errorDelete);

            function deleteSucces(response) {
                console.log(response.data)
                return response.data;
            }

            function errorDelete(error) {
                return console.log('faield delete user', error);
            }
        }





    }


})();