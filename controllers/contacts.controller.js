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
      self.edittingSelected = 0;
      this.cleanAlert();
    }

    this.editSelected = function () {
      self.edittingSelected = 1;
      this.cleanAlert();
    }

    this.saveDispatch = function () {
      if (self.edittingSelected === 1) {
        ContactDataSvc.saveUser(self.selectedContact)
          .then(function () {
            self.userSaveSuccess = "User data successfully updated";
          }, function () {
            self.userSaveError = "User data update failed";
          });
      } else {
        ContactDataSvc.createUser(self.selectedContact)
          .then(function () {
            self.userSaveSuccess = "User data successfully added";
            ContactDataSvc.getContacts()
              .then(function (data) {
                console.log(data);
                self.contacts = data;
              });
          }, function () {
            self.userSaveError = "User add failed";
          });
      }
    }


    this.editSelectedDone = function () {
      this.cleanAlert();
      this.saveDispatch();
      self.edittingSelected = 0;
    }

    this.addNew = function () {
      self.selectedContact = { id: Date() };
      console.log(self.selectedContact);
      self.edittingSelected = 2;
    }

    this.deleteSelected = function () {
      ContactDataSvc.deleteUser(self.selectedContact.id)
        .then(function () {
          self.userSaveSuccess = "User data successfully deleted";
          self.selectedContact = null;
          ContactDataSvc.getContacts()
            .then(function (data) {
              console.log(data);
              self.contacts = data;
            });
        }, function () {
          self.userSaveError = "User data delete failed";
        });
    }
  }
})();
