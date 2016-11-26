app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
        .when('/', {
            template: "<p>Hola Mundo con Angular.</p"
        })
       .otherwise({
           redirectTo: "/"
       })
    }
])