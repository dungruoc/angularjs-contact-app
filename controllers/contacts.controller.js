(function () {
  var contactApp = angular.module('contact-app');
  contactApp.controller('contacts-controller', ContactsController);

  function ContactsController(ContactDataSvc, LoggingSvc) {
    var self = this;
    ContactDataSvc.getContacts()
      .then(function (data) {
        self.contacts = data;
      });

    this.cleanAlert = function () {
      self.userSaveSuccess = null;
      self.userSaveError = null;
    }

    this.selectContact = function (index) {
      self.selectedContact = self.contacts[index];
      self.edittingSelected = false;
      this.cleanAlert();
    }

    this.editSelected = function () {
      self.edittingSelected = true;
      this.cleanAlert();
    }

    this.editSelectedDone = function () {
      self.edittingSelected = false;
      this.cleanAlert();
      ContactDataSvc.saveUser(self.selectedContact)
        .then(function () {
          console.log('success');
          self.userSaveSuccess = "User data successfully updated";
        }, function () {
          self.userSaveError = "User data update failed";
        });
    }
  }
})();
