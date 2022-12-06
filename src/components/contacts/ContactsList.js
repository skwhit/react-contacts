import ContactCard from "./ContactCard";

const ContactList = ({ contacts = [] }) => {
  return (
    <div className="bg-light d-flex flex-column gap-3 py-3 align-items-center w-100 h-100">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          index={contacts.indexOf(contact)}
          firstName={contact.firstName}
          lastName={contact.lastName}
          phoneNumber={contact.phoneNumber}
          profilePic={contact.profilePic}
        />
      ))}
    </div>
  );
};

export default ContactList;
