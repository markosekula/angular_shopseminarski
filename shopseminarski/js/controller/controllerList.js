(function () {
    angular
        .module('mainApp')
        .controller('controllerList', controllerList);

    controllerList.$inject = ['$location', 'mainFactory', '$routeParams'];

    function controllerList($location, mainFactory, $routeParams) {

        var vm = this;
        vm.back = back;
        vm.Detail = Detail;
        var vrsta = $location.url();

        activateAllItem(vrsta);

        function activateAllItem(vrsta) {
            return getOneType(vrsta).then(function () {
                console.log("Activated Type!")
            });

        };

        function getOneType(vrsta) {
            return mainFactory.getOneTypeUser(vrsta)
                .then(function (data) {
                    vm.items = data;
                    //console.log(vm.items)
                    return vm.items;
                });

        };

        function Detail(index) {
            //console.log("objecta" + index);
            $location.path('/' + index.vrsta + '/' + index.id);

        }

        function back() {
            $location.path("/");
        }

    };

})();