(function () {

    angular
        .module('mainApp')
        .controller('controllerEdit', controllerEdit);

    controllerEdit.$inject = ['$location', '$routeParams', 'adminService'];

    function controllerEdit($location, $routeParams, adminService) {

        var vm = this;
        var id = ($routeParams.id);
        console.log("url:" + id)

        vm.item = {};

        idEdit(id);
        vm.buttonEdit = buttonEdit;
        vm.buttonDelete = buttonDelete;
        vm.nazadNaAdminStranicu = nazadNaAdminStranicu;

        function idEdit(id) {
            return getIdFromURL(id).then(function (data) {
                console.log("Id from URL for Edit!! Success!!");

            });

        };

        function getIdFromURL(id) {
            return adminService.getIdForEdit(id)
                .then(function (data) {
                    vm.idforedit = data;

                    //definisanje promenljive za dugme sacuvaj
                    vm.item = vm.idforedit;

                    return vm.idforedit;

                });

        };

        function buttonEdit(item) {
            console.log("aaa:", item)

            return editButton(item).then(function () {
                console.log("Success editing!!");

            });

        };

        function editButton(item1) {
            return adminService.editItem(item1)
                .then(function (data) {

                });

        };

        function buttonDelete() {
            //console.log("delete:", vm.idforedit.id)
            return deleteItem(vm.idforedit.id).then(function (data) {
                console.log("Delete item!! Success!!");

            });

        }

        function deleteItem(id) {
            return adminService.deleteItem(id)
                .then(function (data) {

                });
        };

        function nazadNaAdminStranicu() {
            $location.path('/admin');

        }


    }


})();