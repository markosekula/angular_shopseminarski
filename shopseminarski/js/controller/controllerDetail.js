(function () {
    angular
        .module('mainApp')
        .controller('controllerDetail', controllerDetail);

    controllerDetail.$inject = ['$location', '$routeParams', 'mainFactory', 'serviceKorpa', 'sessionService', '$routeParams', 'serviceKomentar', '$route'];

    function controllerDetail($location, $routeParams, mainFactory, serviceKorpa, sessionService, $routeParams, serviceKomentar, $route) {

        var vm = this;
        vm.back = back;
        vm.submitComment = submitComment;
        var id = ($routeParams.index);

        getComments(id);

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

        function submitComment(komentar) {
            if (sessionService.get('token') === null) {
                $location.path('/login');
            } else {

                var comment = {};

                comment.id_proizvoda = id;
                comment.komentar = komentar;

                insertComment(comment);

                //$route.reload();
                window.location.reload();


            }
        }

        function insertComment(comm) {
            return serviceKomentar.sendComment(comm).then(function (data) {

            });
        }

        function getComments(id) {
            return serviceKomentar.getComments(id).then(function (data) {
                vm.comments = data;
                return vm.comments;
            });
        }

    }

})();