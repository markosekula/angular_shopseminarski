   (function () {

       angular
           .module('mainApp')
           .controller('controllerPocetna', controllerPocetna);

       controllerPocetna.$inject = ['$location', 'mainFactory', 'loginService', 'sessionService'];

       function controllerPocetna($location, mainFactory, loginService, sessionService) {

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

           vm.logout = logout;
           vm.itemDetail = itemDetail;
           vm.show = show;
           activateRandom();

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

           function itemDetail(index) {
               $location.path('/' + index.vrsta + '/' + index.id);
           };

           function logout() {
               loginService.logout();

           }

           function show() {
               if (sessionService.get('token'))
                   return false;
               else
                   return true;

           }



       }


   })();