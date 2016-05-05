(function () {

    angular
        .module('mainApp')
        .controller('controllerAdminCart', controllerAdminCart);

    controllerAdminCart.$inject = ['$location', '$routeParams', 'adminService'];

    function controllerAdminCart($location, $routeParams, adminService) {

        var vm = this;
        var id = ($routeParams.id);
        vm.back = back;
        vm.deletePurchase = deletePurchase;
        getCart(id);

        function getCart(id) {
            return getAllCart(id).then(function (data) {
                console.log("Success CART !!");
            });

        }

        function getAllCart(id) {
            return adminService.getCart(id).then(function (data) {
                vm.cartAll = data;
                return vm.cartAll;
            });
        }

        function back() {
            $location.path('/admin');
        }

        function deletePurchase() {
            return adminService.deletePurchase(id).then(function (data) {
                $location.path('/admin');
            });

        }

    }


})();