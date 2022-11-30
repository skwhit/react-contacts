// import {styledContactCard} from "./Contact.styles"

// import React from "react"
// import styled from 'styled-components';
// import {css} from 'styled-components';

// const styledContactCard = styled.div`
// border: none;
// `

const ContactCard = ({ firstName='', lastName='', phoneNumber='', profilePic='' }) => {
    return (
        <div>
            <div>
                <div>
                    <img src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} />
                </div>
                <div>
                    <p>{firstName} {lastName}</p>
                    <p>{phoneNumber}</p>
                </div>
            </div>
            <div>
                <button>X</button>
            </div>
        </div>
    )
}

export default ContactCard;