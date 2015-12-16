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
    },{
        url: '/users/create',
        templateUrl: "templates/users/edit.html",
        controller: 'users.editController'
    },{
        url: '/users/subscriptions/:id',
        templateUrl: "templates/users/editSubscription.html",
        controller: 'users.editSubscriptionController'
    },{
        url: '/users/subscriptions',
        templateUrl: "templates/users/subscriptions.html",
        controller: 'users.subscriptionsController'
    },{
        url: '/users/:id',
        templateUrl: "templates/users/edit.html",
        controller: 'users.editController'
    },{
        url: '/issues',
        templateUrl: "templates/issues/list.html",
        controller: 'issues.listController'
    },{
        url: '/issues/create',
        templateUrl: "templates/issues/edit.html",
        controller: 'issues.editController'
    },{
        url: '/issues/trash',
        templateUrl: "templates/issues/trash.html",
        controller: 'issues.trashController'
    },{
        url: '/issues/:id',
        templateUrl: "templates/issues/edit.html",
        controller: 'issues.editController'
    }
];
module.exports = routeMap;
