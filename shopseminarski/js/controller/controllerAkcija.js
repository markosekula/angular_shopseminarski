(function () {

    angular
        .module('mainApp')
        .controller('controllerAkcija', controllerAkcija);

    controllerAkcija.$inject = ['$location', 'mainFactory'];

    function controllerAkcija($location, mainFactory) {

        var vm = this;
        vm.itemDetail = itemDetail;
        vm.nazadnapocetnu = nazadnapocetnu;

        randomOnAction();


        function randomOnAction() {
            return itemRandomOnAction().then(function () {
                console.log("Activated RandomOnAction!")
            });

        };

        function itemRandomOnAction() {
            return mainFactory.randomOnAction()
                .then(function (data) {
                    vm.randomonaction = data;
                    return vm.randomonaction;

                });

        };


        function itemDetail(index) {
            $location.path('/' + index.vrsta + '/' + index.id);
        };

        function nazadnapocetnu() {
            $location.path('/');

        }



    }


})();