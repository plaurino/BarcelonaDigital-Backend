angular.module("BarcelonaDigitalBackend").run(['$templateCache', function(a) { a.put('templates/users/login.html', '<div layout="column" layout-align="center center"><h1>Login</h1><div class="login-container" layout="row" layout-align="center center"><div class="md-whiteframe-z3" flex-gt-lg="40" flex-gt-md="60" flex-gt-sm="80" flex-sm="98"><form name="loginForm" ng-submit="login(credentials)"><md-input-container><label>Email</label><input type="email" name="email" ng-model="credentials.username" required><div ng-messages="loginForm.email.$error"><div ng-message="required">Este campo es requerido.</div></div></md-input-container><md-input-container><label>Contraseña</label><input type="password" name="password" ng-model="credentials.password" required><div ng-messages="loginForm.password.$error"><div ng-message="required">Este campo es requerido</div></div></md-input-container><md-input-container><md-button>Login</md-button></md-input-container></form></div></div></div>');
	a.put('templates/promotions/list.html', '<div layout="row" flex layout-fill layout-align="center center"><md-card flex-sm="98" flex-gt-sm="90" flex-gt-md="80" flex-gt-lg="60"><md-card-content><md-list><md-subheader>Promociones</md-subheader><md-divider inset></md-divider><md-list-item ng-repeat="promotion in promotions"><md-item-content><div class="md-tile-content"><h3>{{promotion.name}}</h3><h4>{{promotion.description}}</h4><p>{{promotion.coupons.length}} cupones de descuento.</p></div><div class="md-lite-right"><md-button aria-label="" ng-click="showActions($event, promotion)"><md-icon aria-label="Acciones" class="icon-navigation-grey600 icon-navigation-grey600-ic_more_vert_grey600_24dp"></md-icon></md-button></div></md-item-content><md-divider ng-if="$index !== (promotions.length-1)" inset></md-divider></md-list-item></md-list></md-card-content></md-card><div class="controls"><md-button class="md-fab md-fab-bottom-right md-warn"><md-icon aria-label="Agregar promoción" class="icon-content-white icon-content-white-ic_add_white_24dp"></md-icon><md-tooltip>Agregar promoción</md-tooltip></md-button></div></div>');
	a.put('templates/promotions/edit.html', '<div layout="row" flex layout-fill layout-align="center center" xmlns="http://www.w3.org/1999/html"><md-card flex-sm="98" flex-gt-sm="90" flex-gt-md="80" flex-gt-lg="60"><md-card-content><h2>Promoción</h2><div class="promotion-edit-container"><form name="editForm" ng-submit="edit(promotion)"><div layout><md-input-container flex-sm="100" flex-gt-sm="90" flex-gt-md="80" flex-gt-lg="70"><label>Nombre</label><input type="text" name="name" ng-model="promotion.name" required><div ng-messages="editForm.name.$error"><div ng-message="required" ng-show="editForm.name.$error.required">Este campo es requerido.</div></div></md-input-container></div><div layout><md-input-container flex><label>Descripción</label><textarea name="description" ng-model="promotion.description" required>\n' +
 '                                </textarea><div ng-messages="editForm.description.$error"><div ng-message="required" ng-show="editForm.description.$error.required">Este campo es requerido</div></div></md-input-container></div><div layout="row"><md-input-container layout="column" flex ng-class="{\'md-input-invalid\' : editForm.promotion_type.$invalid, \'md-input-has-value\': editForm.promotion_type.$valid}"><label ng-class="{\'md-no-float\' : editForm.promotion_type.$invalid}">Tipo de promoción: <span class="md-warn">{{ promotion.promotion_type }}</span></label><md-radio-group ng-model="promotion.promotion_type" name="promotion_type" required class="md-primary"><md-radio-button ng-repeat="item in promotion_types" ng-value="item.key">{{item.label}}</md-radio-button></md-radio-group><div ng-messages="editForm.promotion_type.$error"><div ng-message="required" ng-show="editForm.promotion_type.$error.required">Este campo es requerido</div></div></md-input-container><md-input-container layout="column" flex ng-class="{\'md-input-invalid\' : editForm.coupon_type.$invalid, \'md-input-has-value\': editForm.coupon_type.$valid}"><label ng-class="{\'md-no-float\' : editForm.coupon_type.$invalid}">Tipo de vouchers: <span class="md-warn">{{ promotion.coupon_type }}</span></label><md-radio-group ng-model="promotion.coupon_type" name="coupon_type" required class="md-primary"><md-radio-button ng-repeat="item in coupon_types" ng-value="item.key">{{item.label}}</md-radio-button></md-radio-group><div ng-messages="editForm.coupon_type.$error"><div ng-message="required" ng-show="editForm.coupon_type.$error.required">Este campo es requerido</div></div></md-input-container></div><div layout="row"><md-input-container layout="column" flex><label>Porcentaje de descuento:</label><input type="number" name="discount_percentage" ng-model="promotion.discount_percentage" required min="0" max="100"><div ng-messages="editForm.discount_percentage.$error"><div ng-message="required" ng-show="editForm.discount_percentage.$error.required">Este campo es requerido</div><div ng-message="min" ng-show="editForm.discount_percentage.$error.min">El valor minimo permitido es 0.</div><div ng-message="max" ng-show="editForm.discount_percentage.$error.max">El valor maximo permitido es 100.</div></div></md-input-container><md-input-container layout="column" flex><md-select ng-model="promotion.subscription_plan" name="subscription_plan" placeholder="Seleccionar un plan de suscripción" required><md-option ng-repeat="item in subscription_plan_types" ng-value="item.id">{{item.title}}</md-option></md-select><div ng-messages="editForm.subscription_plan.$error"><div ng-message="required" ng-show="editForm.subscription_plan.$error.required">Este campo es requerido</div></div></md-input-container></div><div layout><md-input-container flex><label>Fecha de vencimiento</label><input type="date" name="expired_at" ng-model="promotion.expired_at" required min="{{validators.expired_at_min}}"><div ng-messages="editForm.expired_at.$error"><div ng-message="required" ng-show="editForm.expired_at.$error.required">Este campo es requerido.</div><div ng-message="min" ng-show="editForm.expired_at.$error.min">La fecha ingresada no puede ser menor a la actual.</div></div></md-input-container></div><div layout><md-input-container><md-button>Guardar</md-button></md-input-container></div></form></div></md-card-content></md-card></div>');
	a.put('templates/promotions/create.html', '<div layout="row" flex layout-fill layout-align="center center"><md-card flex-gt-sm="90" flex-gt-md="80" flex-gt-lg="60"><md-card-content></md-card-content></md-card></div>');
	a.put('templates/promotions/bottom-sheet-action-list.html', '<md-bottom-sheet class="md-list md-has-header promotion-actions"><md-subheader>Usted desea:</md-subheader><md-list layout="row" layout-align="center center"><md-list-item flex><md-button class="md-list-item-content md-primary md-raised" ng-click="edit()">Editar</md-button></md-list-item><md-list-item flex><md-button class="md-list-item-content md-warn md-raised" ng-click="delete()">Eliminar</md-button></md-list-item></md-list></md-bottom-sheet>');
	a.put('templates/directives/popup-menu.html', '<md-button aria-label="" ng-click="toggle()"><md-icon aria-label="Acciones" class="icon-navigation-grey600 icon-navigation-grey600-ic_more_vert_grey600_24dp"></md-icon></md-button><div ng-show="visible" class="menu-list md-whiteframe-z5"><md-subheader>Acciones</md-subheader><md-divider inset></md-divider><md-list><md-list-item ng-repeat="action in actionList"><md-item-content ng-class="action.class" ng-click="action.click($event, item)" class="md-tile-content md-button md-default-theme" md-ink-ripple>{{action.label}}</md-item-content><md-divider ng-if="$index !== (actions.length-1)" inset></md-divider></md-list-item></md-list></div>');
	a.put('templates/directives/menu-link.html', '<md-button ng-class="{\'md-primary\' : isSelected()}" ng-href="#{{section.url}}" ng-click="checkAction()">{{section.name}}</md-button>');
	a.put('templates/directives/bd-sidebar.html', '<md-sidenav class="site-sidenav md-sidenav-left md-whiteframe-z2" md-component-id="left" md-is-locked-open="$mdMedia(\'gt-lg\')"><md-toolbar class="md-theme-indigo"><h1 class="md-toolbar-tools"><a ng-href="/#/" layout="row" flex class="logo" ng-click="site.openPage()"><img class="logotype" src="/assets/img/logo.png" alt="Barcelona Digital"></a></h1></md-toolbar><md-content class="md-padding" flex role="navigation"><ul class="menu"><li ng-repeat="section in sections" class="list-item"><menu-link section="section" ng-if="section.type === \'link\' && section.public !== session.isAuthenticated()"></menu-link></li></ul></md-content></md-sidenav>');
	a.put('templates/directives/bd-header.html', '<md-toolbar><div class="md-toolbar-tools"><md-button ng-click="site.openMenu(\'left\')" class="md-icon-button" hide-gt-lg aria-label="Toggle Menu"><md-icon class="icon-navigation-white icon-navigation-white-ic_menu_white_24dp"></md-icon></md-button><span class="title">{{(site.getCurrentPage()).name}}</span><!-- fill up the space between left and right area --> <span flex></span></div></md-toolbar>');
	a.put('templates/directives/bd-footer.html', '<footer></footer>');
	a.put('templates/dashboard.html', '{{greeting}}');
	a.put('templates/.gitkeep', '');
	 }]);