app.controller('editorialController', [
    '$scope',
    'editorialService',
    function ($Scope, editorialService) {
        $Scope.editoriales = [];
        $Scope.editorialActual = {
            Id: '0',
            Nombre: ''
        };
        $scope.accionActual = 'Agregar';
        $Scope.obtenerEditoriales = function () {
            editorialService.obtenerEditoriales()
            .then(function (response) {
                $scope.editoriales = response.data;
            });
        }
        $scope.salvarEditorial = function () {
            if ($scope.accionActual === 'Agregar') {
                editorialService.agregarEditorial($scope.editorialActual)
                .then(function (response) {
                    $scope.obtenerEditoriales();
                    $scope.limpiar();
                    alert('Editorial Agregada!');
                });
            }
            else if ($scope.accionActual === 'Editar') {
                editorialService.editarEditorial($scope.editorialActual)
                .then(function (response) {
                    $scope.obtenerEditoriales();
                    $scope.limpiar()
                    alert('Editorial Editada!');
                });

            } else if ($scope.accionActual === 'Eliminar') {
                editorialService.eliminarEditorial($scope.editorialActual)
                .then(function (response) {
                    $scope.obtenerEditoriales();
                    $scope.limpiar()
                    alert('Editorial Eliminada!');
                });
            }
                $scope.limpiar = function () {
                    $scope.accionActual = 'Agregar';
                    $scope.accionActual = {
                        Id: '0',
                        Nombre: ''
                    }
                }
                $scope.editar = function (editorial) {
                    $scope.accionActual = "Editar";
                    $scope.accionActual = editorial;
                }
                $scope.eliminar = function (editorial) {
                    $scope.accionActual = 'Eliminar';
                    $scope.editorialActual = editorial;
                }

                $scope.obtenerEditoriales();
           }
        }
 ])