(function () {
  var contactApp = angular.module('contact-app');
  contactApp.service('ContactDataSvc', function ($http) {
    this.getContacts = function () {
      return $http.get('http://localhost:3000/contacts')
        .then(function (response) {
          return response.data;
        });
    }
  });
})();

