import s from './HomeView.module.css';
import { NavLink } from 'react-router-dom';

export default function HomeView() {
  return (
    <>
      <section className={s.hero}>
        <button className={s.heroButton}>
          <NavLink to="/addcontact">Add Contact</NavLink>
        </button>
        <button className={s.heroButton}>
          <NavLink to="/viewcontact">View Contact</NavLink>
        </button>
      </section>
    </>
  );
}
