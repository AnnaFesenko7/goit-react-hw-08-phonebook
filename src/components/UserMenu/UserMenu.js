import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUseremail);

  return (
    <div className={s.wrapper}>
      <span className={s.link}>{email}</span>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </button>
    </div>
  );
}
