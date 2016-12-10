app.controller('editorialController', [
    '$scope',
    'editorialService',
    function ($scope, editorialService) {
        $scope.Editoriales = [];
        $scope.EditorialActual = {
            Id: '0',
            Nombre: ''
        };
        $scope.accionActual = 'Agregar';
        $scope.obtenerEditoriales = function () {
            editorialService.obtenerEditoriales()
                .then(function (response) {
                    $scope.Editoriales = response.data;
                });
        }
        $scope.salvarEditoriales = function () {
            if ($scope.accionActual === 'Agregar') {
                editorialService.agregarEditorial($scope.EditorialActual)
                    .then(function (response) {
                        $scope.obtenerEditoriales();
                        $scope.limpiar();
                        alert('Editorial Agregada!');
                    });
            }
            else if ($scope.accionActual === 'Editar') {
                editorialService.editarEditorial($scope.EditorialActual)
                    .then(function (response) {
                        $scope.obtenerEditoriales();
                        $scope.limpiar();
                        alert('Editorial Editada!');
                    });
            } else if ($scope.accionActual === 'Eliminar') {
                editorialService.eliminarEditorial($scope.EditorialActual)
                    .then(function (response) {
                        $scope.obtenerEditoriales();
                        $scope.limpiar();
                        alert('Editorial Eliminada!');
                    });
            }

        }
        $scope.limpiar = function () {
            $scope.accionActual = 'Agregar';
            $scope.EditorialActual = {
                Id: '0',
                Nombre: ''
            }
        }
        $scope.editar = function (editorial) {
            $scope.accionActual = 'Editar';
            $scope.EditorialActual = JSON.parse(JSON.stringify(editorial));
        }

        $scope.eliminar = function (editorial) {
            $scope.accionActual = 'Eliminar';
            $scope.EditorialActual = JSON.parse(JSON.stringify(editorial));;
        }

        $scope.obtenerEditoriales();
    }
]);