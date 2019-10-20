(function () {
  var contactApp = angular.module('contact-app');
  contactApp.controller('contacts-controller', ContactsController);

  function ContactsController(ContactDataSvc, LoggingSvc) {
    this.contacts = ContactDataSvc.contacts;

    this.selectContact = function (index) {
      this.selectedContact = this.contacts[index];
      LoggingSvc('contact selected: ' + index);
    }
  }
})();
