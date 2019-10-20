(function () {
  function FooterController(AppConfigSvc) {
    this.author = AppConfigSvc.author;
    this.builtDate = AppConfigSvc.builtDate;
  }

  var contactApp = angular.module('contact-app');
  contactApp.controller('footer-controller', FooterController);
})();
