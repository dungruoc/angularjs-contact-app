(function () {
  function HeaderController(AppConfigSvc) {
    this.appTitle = AppConfigSvc.name;
  }
  var contactApp = angular.module('contact-app');
  contactApp.controller('header-controller', HeaderController);
})();