app = angular.module('{@= app_name @}');

app.controller('appController',require('./app'));
app.controller('dashboardController',require('./dashboard'));
app.controller('users.loginController',require('./users/login'));
app.controller('users.listController',require('./users/list'));
app.controller('promotions.listController',require('./promotions/list'));
app.controller('promotions.createController',require('./promotions/create'));
app.controller('promotions.editController',require('./promotions/edit'));
app.controller('issues.listController',require('./issues/list'));
app.controller('issues.editController',require('./issues/edit'));
app.controller('issues.trashController',require('./issues/trash'));
