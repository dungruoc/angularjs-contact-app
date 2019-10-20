(function () {
  function AppConfig(AppNameSvc) {
    this.name = AppNameSvc;
    this.author = "DANG Minh Dung";
    this.builtDate = new Date().toDateString();
  }

  var contactApp = angular.module('contact-app');
  contactApp.service('AppConfigSvc', AppConfig);
})();
