function AddressBook() {
    this.contacts = [];
}

AddressBook.prototype.addContact = function(contact) {
    console.log(contact, 'contact');
    console.log(this.contacts, 'contacts list');
    this.contacts.push(contact);
};

AddressBook.prototype.getContact = function(idx) {
    return this.contacts[idx];
};

AddressBook.prototype.removeContact = function(idx) {
    this.contacts = this.contacts.filter((contact, index) => index !== idx ); 
}

AddressBook.prototype.getAllContacts = function() {
    return this.contacts;
}

AddressBook.prototype.getInitialContacts = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([]);
        }, 2000);
    });
}