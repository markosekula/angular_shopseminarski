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
        vm.openFMem = openFMem;
        vm.openGPU = openGPU;
        vm.openMemory = openMemory;
        vm.openMBoard = openMBoard;
        vm.openMonitor = openMonitor;
        vm.openMouse = openMouse;
        vm.message = '';
        vm.login = login;
        vm.signup = signup;
        vm.itemDetail = itemDetail;
        vm.nazadnapocetnu = nazadnapocetnu;
        activateRandom();
        randomOnAction();

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

        function signup(usersignup) {
            return Poruka(usersignup).then(function () {
                console.log("Activated!");

            });
        }

        function Poruka(usersignup) {
            return loginService.signup(usersignup).then(function (data) {
                vm.poruka = data;
                return vm.poruka;

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

        function openFMem() {
            $location.path('FMem');

        }

        function openGPU() {
            $location.path('GPU');

        }

        function openMemory() {
            $location.path('Memory');

        }

        function openMBoard() {
            $location.path('MBoard');

        }


        function openMonitor() {
            $location.path('Monitor');

        }

        function openMouse() {
            $location.path('Mouse');

        }

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

        function nazadnapocetnu() {
            $location.path('/');

        }


    }


})();