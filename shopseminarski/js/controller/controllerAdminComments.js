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

        getAllCommentsForOneProduct(id);

        function getAllCommentsForOneProduct(id) {
            return adminService.getAllComments(id).then(function (data) {
                vm.allComments = data;
                return vm.allComments;
            });
        }

        function deleteOneComment(id) {
            return adminService.deleteOneComment(id).then(function (data) {
                $route.reload();
            })
        }

        function back() {
            $location.path("/admin");
        }

    }


})();