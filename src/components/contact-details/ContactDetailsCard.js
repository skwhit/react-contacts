import detail from './ContactDetails.module.css'

const  ContactDetailsCard = ({ contact }) => {
    return (
        <div className="d-flex align-items-center flex-column">
            <div className={detail.imgContainer}>
                <img className="rounded-responsive"src={contact?.profilePic} alt={`Profile of ${contact?.firstName}${contact?.lastName}.`}/>
            </div>
            <div className="w-50 px-2 d-flex flex-column align-items-center">
                <p className="text-center fs-2">{contact?.firstName} {contact?.lastName}</p>
                <dl className={detail.listContainer}>
                    <dt>Phone Number</dt>
                    <dd className="text-indent">{contact?.phoneNumber}</dd>

                    <dt>Email</dt>
                    <dd className="text-indent">{contact?.email}</dd>

                    <dt>Address</dt>
                    <dd className="text-indent">{contact?.address}</dd>
                </dl>
            </div>
        </div>
    )
}

export default ContactDetailsCard;