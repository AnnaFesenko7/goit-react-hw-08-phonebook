import s from './ContactsList.module.css';
import useScrollbar from 'components/hooks/useScrollbar';
import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import * as contactsSelectors from '../../redux/contacts/contacts-selectors';
import { useRef } from 'react';

export default function ContactsList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const hasScroll = contacts.length > 10;
  const contactsWrapper = useRef(null);
  useScrollbar(contactsWrapper, hasScroll);
  return (
    <div
      className={s.contactsWrapper}
      style={{ height: hasScroll ? '600px' : 'auto' }}
      ref={contactsWrapper}
    >
      <ul className={s.contactsList}>
        {contacts.map(contact => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </ul>
    </div>
  );
}
