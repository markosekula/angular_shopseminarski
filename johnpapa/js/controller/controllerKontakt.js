(function () {

    angular
        .module('mainApp')
        .controller('controllerKontakt', controllerKontakt);

    controllerKontakt.$inject = ['$location'];

    function controllerKontakt($location) {

        var vm = this;
        vm.pocetna = pocetna;

        function pocetna() {
            $location.path('/pocetna');
        }






    }


})();