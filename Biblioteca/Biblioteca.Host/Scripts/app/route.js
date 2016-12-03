app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: "/Scripts/app/Home/Home.template.html",
            controller: "homeController"
        })
            .when('/editoriales', {
                templateUrl: "/Scripts/app/Editorial/Editorial.Templates.html",
                controller: "editorialController"
            })
       .otherwise({
           redirectTo: "/"
       })
    }
])