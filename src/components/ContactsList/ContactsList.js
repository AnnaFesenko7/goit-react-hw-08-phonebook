import s from './ContactsList.module.css';
// import { useState } from 'react';
import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import * as contactsSelectors from '../../redux/contacts/contacts-selectors';

export default function ContactsList() {
  // const [isContact, setIsContact] = useState(true);
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  // useEffect(() => {
  //   if (contacts.length === 0) {
  //     setIsContact(false);
  //     console.log(contacts);
  //   }
  // }, [contacts]);
  return (
    <>
      {/* {!isContact && <p>No contacts saved yet</p>} */}
      <ul className={s.contactsList}>
        {contacts.map(contact => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </ul>
    </>
  );
}
