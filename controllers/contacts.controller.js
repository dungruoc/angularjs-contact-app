(function () {
  var contactApp = angular.module('contact-app');
  contactApp.controller('contacts-controller', ContactsController);

  function ContactsController(ContactDataSvc, LoggingSvc) {
    var self = this;
    ContactDataSvc.getContacts()
    .then(function(data) {
      self.contacts = data;
    })

    this.selectContact = function (index) {
      this.selectedContact = this.contacts[index];
      LoggingSvc('contact selected: ' + index);
    }
  }
})();
