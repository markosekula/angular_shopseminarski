(function () {

    angular
        .module('mainApp')
        .controller('controllerAdminComments', controllerAdminComments);

    controllerAdminComments.$inject = ['$location', '$routeParams', 'adminService', '$route'];

    function controllerAdminComments($location, $routeParams, adminService, $route) {

        var vm = this;
        var id = ($routeParams.id);
        vm.back = back;
        vm.currentPage = 1;
        vm.deleteOneComment = deleteOneComment;

        vm.pageNumber = pageNumber;


        getCountPages(id);
        getTenCommentsForOneProduct(id, vm.currentPage);
        vm.getTenCommentsForOneProduct = getTenCommentsForOneProduct;



        function getTenCommentsForOneProduct(id_proizvoda, page_no) {

            return adminService.getTenComments(id, page_no).then(function (data) {
                vm.allComments = data;
                vm.clicked = page_no;
                return vm.allComments;
            });
        }

        function getCountPages(id) {
            return adminService.getCountComments(id).then(function (response) {
                vm.numberOfPages = response;
                console.log(response);
                vm.pages = [];
                for (var i = 1; i <= response; i++) {
                    vm.pages.push(i);
                }
            });
        }

        function pageNumber(goUp) {
            console.log(vm.currentPage)
            if (vm.currentPage >= 1 && vm.currentPage < vm.pages.length) {
                if (goUp === true) {
                    vm.currentPage++;
                    vm.clicked = vm.currentPage;
                } else {
                    vm.currentPage--;
                    vm.clicked = vm.currentPage;
                }
                getTenCommentsForOneProduct(id, vm.currentPage)

            }
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