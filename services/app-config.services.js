(function () {
  var contactApp = angular.module('contact-app');
  contactApp.factory('AppConfigSvc', function (AppNameSvc) {
    return {
      name: AppNameSvc,
      author: "DANG Minh Dung",
      builtDate: new Date().toDateString()
    }
  }
);
})();
