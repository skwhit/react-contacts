import React, { useEffect, useState, useMemo } from "react";
import Navbar from "./Navbar/Navbar";
import LoginPage from "./login";
import RegisterPage from "./register";
import ContactsPage from "./contacts";
import ContactDetailsPage from "./contact-details";
import ContactCreatePage from "./contact-create";
import { getContacts } from "../utils/contacts";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../hooks/userContext";
import { AuthContext } from "../hooks/authContext";

const mockContacts = [
  {
    id: 1,
    firstName: "Culley",
    lastName: "Snelman",
    profilePic: "https://i.pravatar.cc/300?u=1",
    phoneNumber: "351-346-6140",
    email: "csnelman0@blog.com",
    address: "09 Eggendart Parkway",
  },
  {
    id: 2,
    firstName: "Tammara",
    lastName: "Allcorn",
    profilePic: "https://i.pravatar.cc/300?u=2",
    phoneNumber: "676-783-9239",
    email: "tallcorn1@senate.gov",
    address: "78145 Brentwood Court",
  },
  {
    id: 3,
    firstName: "Cassandry",
    lastName: "Roze",
    profilePic: "https://i.pravatar.cc/300?u=3",
    phoneNumber: "223-879-6692",
    email: "croze2@w3.org",
    address: "2079 Morrow Parkway",
  },
  {
    id: 4,
    firstName: "Koressa",
    lastName: "Galey",
    profilePic: "https://i.pravatar.cc/300?u=4",
    phoneNumber: "761-858-5580",
    email: "kgaley3@economist.com",
    address: "5 Hanover Alley",
  },
];

function App(props) {
  const [contacts, setContacts] = useState([]);
  const [userLogin, setUserLogin] = useState(null);

  const providerContacts = useMemo(
    () => ({ contacts, setContacts }),
    [contacts, setContacts]
  );

  const providerLogin = useMemo(
    () => ({ userLogin, setUserLogin }),
    [userLogin, setUserLogin]
  );

  useEffect(() => {
    const storedContacts = getContacts();
    setContacts(storedContacts.length ? storedContacts : mockContacts);
    // console.log(contacts)
  }, []);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  useEffect(() => {
    console.log(userLogin);
  }, [userLogin]);

  return (
    <AuthContext.Provider value={providerLogin}>
      <Navbar />
      <div>
        {!userLogin ? (
          <>
            <LoginPage />
            <RegisterPage />
          </>
        ) : (
          <UserContext.Provider value={providerContacts}>
            <section className="contacts-container">
              <div className="contactCreate">
                <ContactCreatePage />
              </div>
              <div className="contactPage">
                <ContactsPage contacts={contacts} />
              </div>
            </section>
            {/* <ContactDetailsPage contact={contacts[0]} /> */}
          </UserContext.Provider>
        )}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
