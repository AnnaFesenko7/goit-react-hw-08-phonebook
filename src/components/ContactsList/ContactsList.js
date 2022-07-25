import s from './ContactsList.module.css';

import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import * as contactsSelectors from '../../redux/contacts/contacts-selectors';
// import { useRef } from 'react';

export default function ContactsList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const hasScroll = contacts.length > 5;
  // const contactsWrapper = useRef(null);
  return (
    <div style={{ height: hasScroll ? '120px' : 'auto' }}>
      <ul className={s.contactsList}>
        {contacts.map(contact => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </ul>
    </div>
  );
}
