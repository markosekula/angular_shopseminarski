(function () {

    angular
        .module('mainApp')
        .controller('controllerAdmin', controllerAdmin);

    controllerAdmin.$inject = ['loginService', '$location', 'adminService', 'serviceKontakt', '$route'];

    function controllerAdmin(loginService, $location, adminService, serviceKontakt, $route) {
        var vm = this;

        vm.prikazidugmice = false;
        vm.prikazisveinpute = false;
        vm.formizmeni = false;
        vm.prikazikontakt = false;
        vm.prikaziporudzbine = false;
        vm.prikazikorisnike = false;
        vm.prikazikomentare = false;

        vm.izmeniartikal = izmeniartikal;
        vm.logout = logout;
        vm.nazadnapocetnu = nazadnapocetnu;
        vm.adminInsertItem = adminInsertItem;
        vm.getAllContact = getAllContact;
        contactAll();
        vm.deleteContact = deleteContact;
        vm.getAllUsers = getAllUsers;
        vm.getDistinctType = getDistinctType;
        distinctType();
        vm.dodajDugme = dodajDugme;
        vm.listaSvihArtikala = listaSvihArtikala;
        vm.getDateAndTime = getDateAndTime;
        vm.openOrder = openOrder;
        vm.deleteUser = deleteUser;
        vm.openCommentsForProduct = openCommentsForProduct;
        vm.deleteAllComments = deleteAllComments;
        vm.openComments = openComments;

        function getDistinctType(typedistinct) {
            vm.listaproizvoda = typedistinct;
            vm.dodajartikal = typedistinct;

            vm.prikazikontakt = false;
            vm.prikazidugmice = true;
            vm.prikazisveinpute = false;
            vm.formizmeni = false;
            vm.prikaziporudzbine = false;
            vm.prikazikorisnike = false;
            vm.prikazikomentare = false;
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
            // console.log("dsadas:" + lista)
            return itemOneTypeForEdit(lista).then(function (data) {
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
            vm.prikaziporudzbine = false;
            vm.prikazikorisnike = false;
            vm.prikazikomentare = false;

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

        function getDateAndTime() {
            vm.prikaziporudzbine = true;

            vm.prikazikontakt = false;
            vm.prikazidugmice = false;
            vm.prikazisveinpute = false;
            vm.formizmeni = false;
            vm.prikazikorisnike = false;
            vm.prikazikomentare = false;

            getDate();

        }

        function getDate() {
            return adminService.getDateAndTime().then(function (data) {
                vm.dateAndTime = data;
                return vm.dateAndTime;

            });
        }

        function openOrder(id) {
            $location.path('/admin/cart/' + id);
        }

        function getAllUsers() {
            vm.prikazikorisnike = true;

            vm.prikaziporudzbine = false;
            vm.prikazikontakt = false;
            vm.prikazidugmice = false;
            vm.prikazisveinpute = false;
            vm.formizmeni = false;
            vm.prikazikomentare = false;

            getUsers();

        }

        function getUsers() {
            return adminService.getAllUsers().then(function (data) {
                vm.allUsers = data;
                return vm.allUsers;

            });
        }

        function deleteUser(id) {
            // console.log(id)
            return adminService.deleteUser(id).then(function (data) {
                getUsers();
                vm.msg = "Korisnik obrisan!!";
                return vm.msg;

            });

        }

        function openCommentsForProduct() {
            vm.prikazikomentare = true;

            vm.prikazikorisnike = false;
            vm.prikaziporudzbine = false;
            vm.prikazikontakt = false;
            vm.prikazidugmice = false;
            vm.prikazisveinpute = false;
            vm.formizmeni = false;

            getDistinctComments();
        }

        function getDistinctComments() {
            return adminService.getDistinctComments().then(function (data) {
                vm.distinctcomments = data;
                id = vm.distinctcomments

                return vm.distinctcomments;

            });

        }

        function deleteAllComments(id) {
            console.log(id)
            return adminService.deleteAllCommentsForOneItem(id).then(function (data) {
                getDistinctComments();
                vm.msg = "Obrisani svi komentari za dati artikal !!"
                return vm.msg;

            });

        }

        function openComments(id) {
            $location.path('/admin/comments/' + id);
        }




    }



})();