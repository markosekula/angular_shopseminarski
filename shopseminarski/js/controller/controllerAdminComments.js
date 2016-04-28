(function () {

    angular
        .module('mainApp')
        .controller('controllerAdminComments', controllerAdminComments);

    controllerAdminComments.$inject = ['$location', '$routeParams', 'adminService', '$route'];

    function controllerAdminComments($location, $routeParams, adminService, $route) {

        var vm = this;
        var id = ($routeParams.id);
        vm.back = back;
        vm.deleteOneComment = deleteOneComment;

        vm.nextButton = nextButton;
        vm.previousButton = previousButton;

        getCountPages(id);
        getTenCommentsForOneProduct(id, 1);
        vm.getTenCommentsForOneProduct = getTenCommentsForOneProduct;

        function getTenCommentsForOneProduct(id_proizvoda, page_no) {
            return adminService.getTenComments(id, page_no).then(function (data) {
                vm.allComments = data;
                vm.clicked = page_no;
                vm.currentPage = page_no;
                return vm.allComments;
            });
        }

        function getCountPages(id) {
            return adminService.getCountComments(id).then(function (response) {
                vm.numberOfPages = response;
                vm.pages = [];
                for (var i = 1; i <= response; i++) {
                    vm.pages.push(i);
                }
            });
        }

        function nextButton() {
            // console.log("NEXT:", vm.currentPage)
            vm.currentPage++;
            vm.clicked = vm.currentPage;
            if (vm.currentPage == vm.pages.length + 1) {
                vm.currentPage = 1;
            }
            getTenCommentsForOneProduct(id, vm.currentPage);
        }

        function previousButton() {
            //console.log("PREVIOUS:", vm.currentPage)
            vm.currentPage--;
            vm.clicked = vm.currentPage;
            if (vm.currentPage < 1) {
                vm.currentPage = vm.pages.length;
            }
            getTenCommentsForOneProduct(id, vm.currentPage);

        }

        function deleteOneComment(id) {
            return adminService.deleteOneComment(id).then(function (data) {
                $route.reload();
            });
        }

        function back() {
            $location.path("/admin");
        }




    }


})();