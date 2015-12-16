app = angular.module('{@= app_name @}');

app.factory('authenticatorService',require('./authenticator'));
app.factory('authorizerService',require('./authorizer'));
app.factory('menuService',require('./menu'));
app.factory('localStorageService',require('./localStorage'));
app.factory('promotionService', require('./promotion'));
app.factory('subscriptionService', require('./subscription'));
app.factory('voucherService', require('./voucher'));
app.factory('userService', require('./user'));
app.factory('issueService', require('./issue'));
app.factory('collectionService', require('./collection'));