(function () {
    angular
        .module('mainApp')
        .controller('controllerList', controllerList);

    controllerList.$inject = ['$location', 'mainFactory', '$routeParams'];

    function controllerList($location, mainFactory, $routeParams) {

        var vm = this;
        vm.itemDetail = itemDetail;

        activateKeyboard();
        //  activateProcessor();

        function activateKeyboard() {
            return getKeyboard().then(function () {
                console.log("Activated Keyboard!")
            });

        };

        function getKeyboard() {
            return mainFactory.getAllKeyboard()
                .then(function (data) {
                    vm.items = data;
                    return vm.items;
                });

        };


        //        function activateProcessor() {
        //            return getProcessor.then(function () {
        //                console.log("Activated Processor!")
        //
        //            });
        //
        //        };
        //
        //        function getProcessor() {
        //            return mainFactory.getAllProcessor()
        //                .then(function (data) {
        //                    vm.items = data;
        //                    return vm.items;
        //                });
        //
        //        };

        function itemDetail(ix) {
            $location.path("/Keyboard/" + ix);
        };



    };

})();