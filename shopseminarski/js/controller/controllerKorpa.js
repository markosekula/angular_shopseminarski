(function () {

    angular
        .module('mainApp')
        .controller('controllerKorpa', controllerKorpa);

    controllerKorpa.$inject = ['sessionService', 'serviceKorpa', '$location'];

    function controllerKorpa(sessionService, serviceKorpa, $location) {
        var vm = this;

        vm.cart = [];

        vm.cartPrice = 0;

        var alreadySaved = JSON.parse(sessionService.get('korpa'));
        if (alreadySaved) {
            vm.cart = alreadySaved;

        }

        vm.onClickClearCart = onClickClearCart;
        vm.submitBuying = submitBuying;
        vm.clickRemoveItem = clickRemoveItem;
        getCartPrice();

        function getCartPrice() {
            vm.cart.forEach(function (product) {
                vm.cartPrice += product.cena * product.quantity;
            });
            return vm.cartPrice;
        }

        function onClickClearCart() {
            serviceKorpa.clearCart();
            vm.cart = [];
        }

        function clickRemoveItem(item) {
            serviceKorpa.removeItem(item);

        }

        function submitBuying() {
            if (sessionService.get('token') === null) {
                $location.path('/login');
            } else {
                var cart = {};
                cart.cart = vm.cart;
                cart.ukupna_cena = vm.cartPrice;

                console.log(cart)

                return insertCart(cart).then(function (data) {
                    console.log("Activated Success Shoppping!!!");
                });
            }

        }

        function insertCart(cart) {
            return serviceKorpa.insertCart(cart).then(function (data) {
                vm.msg = data;
                return vm.msg;
            });
        }

    }

})();