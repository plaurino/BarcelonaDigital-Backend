/*
  ----------------------------------------------------------------------
                            ROUTES
  ----------------------------------------------------------------------
  1. Define your routes here.
  2. If your app does not have routes , simple export an empty object
      @example
        module.exports = {}

  ----------------------------------------
                EXAMPLE
  ----------------------------------------
  {
    url: "/",
    templateUrl: "templates/home.html",
    controller: "homeController"
  }
 */
var routeMap;

routeMap = [{
        url: '/',
        templateUrl: "templates/dashboard.html",
        controller: 'dashboardController'
    },
    {
        url: '/login',
        templateUrl: "templates/users/login.html",
        controller: 'users.loginController'
    },
    {
        url: '/promotions',
        templateUrl: "templates/promotions/list.html",
        controller: 'promotions.listController'
    },
    {
        url: '/promotions/create',
        templateUrl: "templates/promotions/create.html",
        controller: 'promotions.createController'
    },
    {
        url: '/promotions/:id',
        templateUrl: "templates/promotions/edit.html",
        controller: 'promotions.editController'
    },
    {
        url: '/users',
        templateUrl: "templates/users/list.html",
        controller: 'users.listController'
    }
];
module.exports = routeMap;
