describe('address book', () => {

    let addressBook;
    let newContact;

    beforeEach(() => {
        newContact = new Contact();
        addressBook = new AddressBook();
    });

    it('should be able to add a contact', () => {
        addressBook.addContact(newContact);
        expect(addressBook.getContact(0)).toBe(newContact);
    });

    it('should be able to delete a contact', () => {
        const addressBook = new AddressBook();
        const newContact = new Contact();
        const initialContacts = addressBook.getAllContacts();

        addressBook.addContact(newContact);
        addressBook.removeContact(newContact);
        expect(addressBook.getAllContacts().length).toBe(initialContacts.length);
    });
}); 

describe('async address book', () => {
    let addressBook;
    let newContact;
    let initialContacts;
    
    beforeEach(async done => {
        newContact = new Contact();
        addressBook = new AddressBook();
        initialContacts = await addressBook.getInitialContacts();
        done();
    });

    it('should return an array from initial contacts get request', done => {
        expect(initialContacts instanceof Array).toBe(true);
        done();
    });
});