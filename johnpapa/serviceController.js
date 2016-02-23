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
        mainFactory.getOneItem($routeParams.index)
            .then(function (data) {
                vm.item = data;
            });
        // }

        function back() {
            $location.path("/shop");
        }

    }





})();