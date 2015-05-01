app = angular.module('{@= app_name @}');

app.directive('bdHeader',require('./bdHeader'));
app.directive('bdFooter',require('./bdFooter'));
app.directive('bdSidebar',require('./bdSidebar'));
app.directive('menuLink',require('./menuLink'));
app.directive('popupMenu',require('./popupMenu'));