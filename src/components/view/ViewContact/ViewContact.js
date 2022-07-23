import s from './ViewContact.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeDots } from 'react-loader-spinner';
import ContactsList from 'components/ContactsList/ContactsList';

import Filter from 'components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { NavLink } from 'react-router-dom';

export default function ViewContact() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(contactsSelectors.getAllContacts);
  const isLoading = useSelector(contactsSelectors.getStateLoading);
  const isError = useSelector(contactsSelectors.getStateError);
  return (
    <div className={s.formPage}>
      <div>
        <button className={s.button}>
          <NavLink to="/addcontact">Add Contact</NavLink>
        </button>
        <h1 className={s.title}>View Contact</h1>
        <div className={s.massage}>
          {/* {isNameEmpty && <p>Enter your name</p>}
          {isEmailEmpty && <p>Enter your email</p>}
          {isPasswordEmpty && <p>Enter your password</p>}
          {!isPasswordValid && (
            <p>Minimum allowed password length is 8 characters</p>
          )}
          {isError && errorMessage !== '' && <p>{errorMessage}</p>} */}
          {isError && <p>{isError.message}</p>}
        </div>
      </div>
      <div>
        <Filter />
        <div className={s.wrapper}>
          {contacts.length !== 0 ? <ContactsList /> : ''}
        </div>
        {isLoading && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ThreeDots
              height="100"
              width="100"
              color="red"
              ariaLabel="loading"
            />
          </div>
        )}
      </div>
    </div>
  );
}
