import ContactCard from "./ContactCard"

const ContactList = ({ contacts=[] }) => {
    return (
        <div className="bg-light d-flex flex-column gap-3 py-3 container-fluid align-items-center">
            {contacts.map((contact) => 
                <ContactCard 
                    key={contact.id}
                    firstName={contact.firstName} 
                    lastName={contact.lastName} 
                    phoneNumber={contact.phoneNumber} 
                    profilePic={contact.profilePic}
                />
            )}
        </div>
    )
}

export default ContactList;