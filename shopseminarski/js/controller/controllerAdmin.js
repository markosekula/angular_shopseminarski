(function () {

    angular
        .module('mainApp')
        .controller('controllerAdmin', controllerAdmin);

    controllerAdmin.$inject = ['loginService', '$location', 'adminService', 'serviceKontakt'];

    function controllerAdmin(loginService, $location, adminService, serviceKontakt) {
        var vm = this;

        vm.prikazidugmice = false;
        vm.prikazisveinpute = false;
        vm.formizmeni = false;
        vm.prikazikontakt = false;

        vm.izmeniartikal = izmeniartikal;
        vm.logout = logout;
        vm.nazadnapocetnu = nazadnapocetnu;
        vm.adminInsertItem = adminInsertItem;
        vm.getAllContact = getAllContact;
        contactAll();
        vm.deleteContact = deleteContact;

        vm.getDistinctType = getDistinctType;
        distinctType();
        vm.dodajDugme = dodajDugme;
        vm.listaSvihArtikala = listaSvihArtikala;


        function getDistinctType(typedistinct) {
            //console.log("tip:" + typedistinct)
            vm.listaproizvoda = typedistinct;
            vm.dodajartikal = typedistinct;

            vm.prikazikontakt = false;
            vm.prikazidugmice = true;
            vm.prikazisveinpute = false;
            vm.formizmeni = false;
        }

        function distinctType() {
            return returnDistinctType().then(function (data) {
                console.log("Activated distinctType Admin!")

            });

        };

        function returnDistinctType() {
            return adminService.getDistinctType().then(function (data) {
                vm.distincttype = data;
                return vm.distincttype;
            });

        }

        function listaSvihArtikala(lista) {
            console.log("dsadas:" + lista)
            return itemOneTypeForEdit(lista).then(function (data) {
                // console.log("listaaaaaa:" + lista)
                vm.formizmeni = true;
                vm.prikazisveinpute = false;
                return vm.ime = lista;

            });

        }

        function itemOneTypeForEdit(lista1) {
            return adminService.getOneType(lista1).then(function (data) {
                vm.items = data;
                return vm.items;

            });

        };


        function dodajDugme(tip) {
            vm.dodajartikal = tip;
            //console.log("tip dodaj:" + tip)
            vm.prikazisveinpute = true;
            vm.formizmeni = false;
            return vm.ime = tip;

        }

        function logout() {
            loginService.logout();
        }

        function nazadnapocetnu() {
            $location.path('/');
        }

        function adminInsertItem(proizvodi) {
            return porukaAdmin(proizvodi).then(function () {

                console.log("Activated InsertItem!");
            });
        }

        function porukaAdmin(proizvodi) {
            //console.log("prozZZZ", proizvodi)
            return adminService.insertItem(proizvodi).then(function (data) {
                vm.porukaadmin = data;
                return vm.porukaadmin;
            });
        }

        function izmeniartikal(id) {
            console.log(id)
            $location.path('/admin/' + id);
        }

        function getAllContact() {
            //            return getContact().then(function () {
            //                console.log("Success received message!!")
            vm.prikazikontakt = true;

            vm.prikazidugmice = false;
            vm.prikazisveinpute = false;
            vm.formizmeni = false;

            //  });


        };

        function contactAll() {
            return getContact().then(function () {
                console.log("Success received message!!")
            });

        };

        function getContact() {
            return serviceKontakt.selectAllContact().then(function (data) {
                vm.contact = data;
                return vm.contact;

            });
        };

        function deleteContact(id) {
            //console.log("sda delete contact:" + id);
            return deleteOneContact(id).then(function (data) {
                console.log("Success delete message!!")
                contactAll();

            })
        }

        function deleteOneContact(id) {
            return serviceKontakt.deleteKontakt(id).then(function (data) {
                vm.poruka = "Poruka obrisana!!"
                return vm.poruka;

            });

        }


    }



})();