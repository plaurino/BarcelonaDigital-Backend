// Generated by CoffeeScript 1.8.0

/**
@author
@description
@name menuFactory
 */


/* @ngInject */

(function() {
    module.exports = function($rootScope, $location) {
        var factory;

        factory = {
            currentPage: null,
            currentSubpage: null,
            sections: [
                {
                    type: 'section',
                    name: 'Dashboard',
                    key: 'dashboard',
                    url: '/',
                    public: false,
                    subSections: []
                },
                {
                    type: 'section',
                    name: 'Login',
                    key: 'login',
                    url: '/login',
                    public: true,
                    subSections: []
                },
                {
                    type: 'section',
                    name: 'Revistas',
                    key: 'issues',
                    url: '/issues',
                    public: false,
                    subSections: [
                        {
                            type: 'link',
                            name: 'Todas las revistas',
                            key: 'issues',
                            url: '/issues',
                            public: false
                        },
                        {
                            type: 'link',
                            name: 'Agregar nueva',
                            key: 'issues',
                            url: '/issues/create',
                            public: false
                        },
                        {
                            type: 'link',
                            name: 'Papelera',
                            key: 'issues',
                            url: '/issues/trash',
                            public: false
                        }
                    ]
                },
                {
                    type: 'section',
                    name: 'Usuarios',
                    key: 'users',
                    url: '/users',
                    public: false,
                    subSections: [
                        {
                            type: 'link',
                            name: 'Todos los usuarios',
                            key: 'users',
                            url: '/users',
                            public: false
                        },
                        {
                            type: 'link',
                            name: 'Agregar nuevo',
                            key: 'users',
                            url: '/users/create',
                            public: false
                        },
                        {
                            type: 'link',
                            name: 'Suscripciones',
                            key: 'users',
                            url: '/users/subscriptions',
                            public: false
                        }
                    ]
                },
                {
                    type: 'section',
                    name: 'Promociones',
                    key: 'promotions',
                    url: '/promotions',
                    public: false,
                    subSections: [
                        {
                            type: 'link',
                            name: 'Todas las promociones',
                            key: 'promotions',
                            url: '/promotions',
                            public: false
                        },
                        {
                            type: 'link',
                            name: 'Agregar nuevo',
                            key: 'promotions',
                            url: '/promotions/create',
                            public: false
                        },
                        {
                            type: 'link',
                            name: 'Papelera',
                            key: 'promotions',
                            url: '/promotions/trash',
                            public: false
                        }
                    ]
                },
                {
                    type: 'section',
                    key: 'logout',
                    name: 'Logout',
                    url: '/logout',
                    public: false,
                    subSections: []
                }
            ]
        };

        factory.getCurrentPage = function() {
            return factory.currentPage;
        };


        factory.selectPage = function(page) {
          factory.currentPage = page;
        };

        factory.isPageSelected = function(page) {
          return factory.currentPage === page;
        };

        factory.getCurrentSubpage = function() {
            return factory.currentSubpage;
        };


        factory.selectSubpage = function(page) {
            factory.currentSubpage = page;
        };

        factory.isSubpageSelected = function(page) {
            return factory.currentSubpage === page;
        };

        factory.clearCurrentSubpage = function() {
            factory.currentSubpage = null;
        };

        factory.clearCurrentPage = function() {
            factory.currentPage = null;
        };


        function onLocationChange() {
            var path = $location.path();

            var matchPage = function(page) {
              if (path === page.url) {
                  factory.selectPage(page);
                  factory.clearCurrentSubpage();
              }
            };

            var matchSubpage = function(page) {
                if (path === page.url) {
                    factory.selectSubpage(page);
                }
            };

            factory.sections.forEach(function(page) {
                if(page) {
                    matchPage(page);
                    page.subSections.forEach(function(subPage) {
                        matchSubpage(subPage);
                    })
                }
            });
        }

        $rootScope.$on('$locationChangeSuccess', onLocationChange);

        return factory;
  };

}).call(this);
