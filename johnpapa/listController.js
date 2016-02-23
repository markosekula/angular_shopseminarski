(function () {
    angular
        .module('mainApp')
        .controller('controllerList', controllerList);

    controllerList.$inject = ['$location', 'mainFactory'];

    function controllerList($location, mainFactory) {

        var vm = this;
        vm.itemDetail = itemDetail;

        activate();


        function activate() {
            return getKeyboard().then(function () {
                console.log("Activated")
            });

        };

        function getKeyboard() {
            return mainFactory.getAllItems()
                .then(function (data) {
                    vm.items = data;
                    return vm.items;

                });

        };

        function itemDetail(ix) {
            $location.path("/item/" + ix);
        };


    };

})();