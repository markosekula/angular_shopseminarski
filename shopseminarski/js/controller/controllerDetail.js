(function () {
    angular
        .module('mainApp')
        .controller('controllerService', controllerService);

    controllerService.$inject = ['$location', '$routeParams', 'mainFactory', 'serviceKorpa'];

    function controllerService($location, $routeParams, mainFactory, serviceKorpa) {

        var vm = this;
        vm.back = back;

        activate();

        vm.addToCart = addToCart;

        function addToCart(product) {
            // console.log("servicekorpa:", product)
            serviceKorpa.serviceAddToCart(product);

        }

        function activate(index) {
            mainFactory.getDetailItems($routeParams.index)
                .then(function (data) {
                    vm.item = data;
                    vm.onAction = function () {
                        if (vm.item.akcija == 1) {
                            return "proizvod je na akciji";
                        } else {
                            return "proizvod nije na akciji";
                        }

                    }

                });

        }

        function back() {
            $location.path("/");
        }

    }

})();