import s from './AddContact.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Form from 'components/Form/Form';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { contactsOperations } from 'redux/contacts';
import { NavLink } from 'react-router-dom';

export default function AddContact() {
  const [message, setMessage] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(contactsOperations.fetchContacts());
  // }, [dispatch]);

  // const contacts = useSelector(contactsSelectors.getAllContacts);
  // const isLoading = useSelector(contactsSelectors.getStateLoading);
  // const isError = useSelector(contactsSelectors.getStateError);
  const showAlert = name => {
    setMessage(`${name} is already in contacts`);
    setTimeout(() => setMessage(false), 3000);
  };
  const saveContact = (name, number) => {
    dispatch(contactsOperations.saveContact({ name, number }));
  };

  return (
    <>
      <div className={s.formPage}>
        <div>
          <button className={s.button}>
            <NavLink to="/viewcontact">View Contact</NavLink>
          </button>
          <h1 className={s.title}>Add Contact</h1>
          <div className={s.massage}>{message && <p>{message}</p>}</div>
        </div>
        <div>
          <Form showAlert={showAlert} dispatchSaveContact={saveContact} />
        </div>
      </div>
    </>
  );
}
