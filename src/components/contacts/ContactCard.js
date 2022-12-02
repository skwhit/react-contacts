import { StyledButton, StyledProfileImg } from "./Contact.styles"

const ContactCard = ({ firstName='', lastName='', phoneNumber='', profilePic='' }) => {
    return (
        <>
        <div className="d-flex justify-content-between w-50 bg-white py-2 shadow align-items-center">
            <div className="d-flex gap-3 align-items-center">
                <div className="col-3 border-end d-flex border-end">
                    <StyledProfileImg className="w-100 p-2" src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} />
                </div>
                <div className="d-flex flex-column">
                    <p className="m-0">{firstName} {lastName}</p>
                    <p className="m-0">{phoneNumber}</p>
                </div>
            </div>
            <div className="px-4">
                <StyledButton>X</StyledButton>
            </div>
        </div>
        </>
    )
}

export default ContactCard;