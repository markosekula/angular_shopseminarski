(function () {

    angular
        .module('mainApp')
        .controller('controllerKontakt', controllerKontakt);

    controllerKontakt.$inject = ['$location', 'serviceKontakt'];

    function controllerKontakt($location, serviceKontakt) {

        var vm = this;
        vm.pocetna = pocetna;
        vm.sendMessage = sendMessage;

        function pocetna() {
            $location.path('/pocetna');
        }


        function sendMessage(contact) {
            return insertContact(contact).then(function (data) {
                console.log("Success send message!!")

            });

        }

        function insertContact(contact) {
            return serviceKontakt.insertKontakt(contact)
                .then(function (data) {
                    vm.msg = data;
                    return vm.msg;

                });

        };





    }


})();