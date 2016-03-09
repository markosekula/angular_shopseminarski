(function () {

    angular
        .module('mainApp')
        .controller('controllerLogin', controllerLogin);

    controllerLogin.$inject = ['$location', 'loginService', 'mainFactory'];

    function controllerLogin($location, loginService, mainFactory) {

        var vm = this;
        vm.openKeyboard = openKeyboard;
        vm.openCPU = openCPU;
        vm.openRAM = openRAM;
        vm.message = '';
        vm.login = login;
        vm.itemDetail = itemDetail;
        activateRandom();

        function login(user) {
            return Message(user).then(function () {
                console.log("Activated!");

            });
        }

        function Message(user) {
            return loginService.login(user).then(function (data) {
                vm.message = data;
                return vm.message;

            });
        }

        function activateRandom() {
            return getRandom().then(function () {
                console.log("Activated Random!")
            });

        };

        function getRandom() {
            return mainFactory.getRandom()
                .then(function (data) {
                    vm.randomitems = data;
                    return vm.randomitems;
                });

        };

        function itemDetail(index) {
            $location.path('/' + index.vrsta + '/' + index.id);
        };

        function openKeyboard() {
            $location.path('/Keyboard');
        }

        function openCPU() {
            $location.path('/CPU');
        }

        function openRAM() {
            $location.path('RAM');

        }




    }


})();