(function () {
  var contactApp = angular.module('contact-app');
  contactApp.service('ContactDataSvc', function ($http) {
    this.getContacts = function () {
      return $http.get('http://localhost:3000/contacts')
        .then(function (response) {
          return response.data;
        });
    }

    this.saveUser = function (user) {
      return $http.put('http://localhost:3000/contacts/' + user.id,
        user)
        .then(function (response) {
        });
    }

    this.createUser = function (user) {
      return $http.post('http://localhost:3000/contacts',
        user)
        .then(function (response) {
        });
    }

    this.deleteUser = function (id) {
      return $http.delete('http://localhost:3000/contacts/' + id,
        null)
        .then(function (response) {
        });
    }

  });
})();

