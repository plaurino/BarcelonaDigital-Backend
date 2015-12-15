app = angular.module('{@= app_name @}');

app.directive('bdHeader',require('./bdHeader'));
app.directive('bdFooter',require('./bdFooter'));
app.directive('bdSidebar',require('./bdSidebar'));
app.directive('menuLink',require('./menuLink'));
app.directive('menuSection',require('./menuSection'));
app.directive('popupMenu',require('./popupMenu'));
app.directive('compareTo',require('./compareTo'));
app.directive('checkUsername',require('./checkUsername'));