(function () {

    angular
        .module('mainApp')
        .service('serviceKorpa', serviceKorpa);

    serviceKorpa.$inject = ['sessionService', '$location', '$route', '$http'];

    function serviceKorpa(sessionService, $location, $route, $http) {

        var vm = this;

        vm.cart = [];
        var alreadySaved = JSON.parse(sessionService.get('korpa'));
        if (alreadySaved) {
            vm.cart = alreadySaved;

        }

        return {
            serviceAddToCart: serviceAddToCart,
            clearCart: clearCart,
            removeItem: removeItem,
            insertCart: insertCart
        };

        function serviceAddToCart(product) {
            var found = false;

            vm.cart.forEach(function (item) {
                if (item.id === product.id) {
                    item.quantity++;
                    found = true;
                }
            });

            if (!found) {
                vm.cart.push(angular.extend({
                    quantity: 1
                }, product));

            }

            sessionService.set('korpa', JSON.stringify(vm.cart));

            $location.path('/korpa');

        }

        function removeItem(item) {
            var index = vm.cart.indexOf(item);
            vm.cart.splice(index, 1);
            sessionService.set('korpa', JSON.stringify(vm.cart));
            $route.reload();
        }

        function clearCart() {
            sessionService.destroy('korpa');
            vm.cart = [];
            $location.path('/');
        }

        function insertCart(cart) {
            // console.log("service:", cart)
            return $http.post('http://localhost:8082/Seminarski/rest/shopping/add', cart)
                .then(insertSuccess)
                .catch(ErrorInsert);

            function insertSuccess() {
                vm.msg = 'Uspesno izvrsena kupovina!!';
                return vm.msg;
            }

            function ErrorInsert(error) {
                return console.log('faield kupovina', error);
            }
        }


    }

})();