(function () {
  var contactApp = angular.module('contact-app');
  contactApp.value('LoggingSvc', function (message) {
    console.log(message);
  });
})();
