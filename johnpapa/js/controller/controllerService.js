(function () {
    angular
        .module('mainApp')
        .controller('controllerService', controllerService);

    controllerService.$inject = ['$location', '$routeParams', 'mainFactory'];

    function controllerService($location, $routeParams, mainFactory) {

        var vm = this;
        vm.back = back;


        //   activate();

        // function activate(index) {
        mainFactory.getDetailItems($routeParams.index)
            .then(function (data) {
                vm.item = data;
                console.log(vm.item)
                vm.onAction = function () {
                    if (vm.item.akcija == 1) {
                        return "proizvod je na akciji";
                    } else {
                        return "proizvod nije na akciji";
                    }

                }

            });

        // }

        function back() {
            $location.path("/");
        }




    }





})();