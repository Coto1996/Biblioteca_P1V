app.controller('libroController', [
    '$scope',
    'libroService',
    'editorialService',
    function ($scope, libroService) {
        $scope.libros = [];
        $scope.editoriales = [];
        $scope.libroActual = {
            Id: '0',
            Nombre: '',
            Ano: ''
        };
        $scope.EditorialSeleccionada = undefined;
        $scope.accionActual = 'Agregar';
        $scope.obtenerEditoriales = function () {
            editorialService.obtenerEditoriales()
            .then(function (response) {
                $scope.editoriales = response.data;
            });
        }
        $scope.obtenerLibros = function () {
            libroService.obtenerLibros()
                .then(function (response) {
                    $scope.libros = response.data;
                });
        }
        $scope.salvarLibro = function () {
            if ($scope.accionActual === 'Agregar') {
                libroService.agregarLibro($scope.libroActual)
                    .then(function (response) {
                        libroService.agregarEditorial(response.data, $scope.EditorialSeleccionada)
                        .then(function(){
                            $scope.obtenerLibros();
                            $scope.limpiar();
                            alert('Libro Agregado!');
                        })
                    });
            }
            else if ($scope.accionActual === 'Editar') {
                libroService.editarLibro($scope.libroActual)
                    .then(function (response) {
                        $scope.obtenerLibros();
                        $scope.limpiar();
                        alert('Libro Editado!');
                    });
            } else if ($scope.accionActual === 'Eliminar') {
                libroService.eliminarLibro($scope.libroActual)
                    .then(function (response) {
                        $scope.obtenerLibros();
                        $scope.limpiar();
                        alert('Libro Eliminado!');
                    });
            }

        }
        $scope.limpiar = function () {
            $scope.accionActual = 'Agregar';
            $scope.libroActual = {
                Id: '0',
                Nombre: '',
                Ano: 0
        }
        }
        $scope.editar = function (libro) {
            $scope.accionActual = 'Editar';
            $scope.libroActual = JSON.parse(JSON.stringify(libro));
            $scope.EditorialSeleccionada = undefined;
            $scope.EditorialSeleccionada = $scope.editoriales.find(function (editorial) {
                return editorial.Id === libro.editorial.Id;
            })
        }

        $scope.eliminar = function (libro) {
            $scope.accionActual = 'Eliminar';
            $scope.libroActual = JSON.parse(JSON.stringify(libro));;
        }

        $scope.obtenerEditoriales();
        $scope.obtenerLibros();
    }
]);