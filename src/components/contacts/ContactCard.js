import {
  StyledButton,
  StyledProfileImg,
  ProfileImgDiv,
} from "./Contact.styles";
import { UserContext } from "../../hooks/userContext";
import { useContext } from "react";
import ContactsPage from "./ContactsPage";

const ContactCard = ({
  firstName = "",
  lastName = "",
  phoneNumber = "",
  profilePic = "",
  index,
}) => {
  const { contacts, setContacts } = useContext(UserContext);

  const removeContact = () => {
    setContacts(
      contacts.filter((contact) => contacts.indexOf(contact) !== index)
    );
  };

  return (
    <>
      <div className="d-flex justify-content-between bg-white py-2 shadow align-items-center w-75">
        <div className="d-flex gap-3 align-items-center gap-5 w-100 h-100">
          <ProfileImgDiv className="border-end">
            <StyledProfileImg
              className="w-100 p-2"
              src={profilePic}
              alt={`Profile of ${firstName} ${lastName}.`}
            />
          </ProfileImgDiv>
          <div className="d-flex flex-column">
            <p className="m-0">
              {firstName} {lastName}
            </p>
            <p className="m-0">{phoneNumber}</p>
          </div>
        </div>
        <div className="px-4">
          <StyledButton onClick={removeContact}>X</StyledButton>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
