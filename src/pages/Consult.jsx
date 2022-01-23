import { Link } from 'react-router-dom';
import Profile from '../components/Profile';
import Form from '../components/Form';

const Consult = props => {
  const patient = props.patient;

  return (
    <section className='split-view'>
      <Profile data={patient} />
      <div className='info'>
        <Form />
        <Link to="/closing">
          <button className="button">Siguiente</button>
        </Link>
      </div>
    </section>
  )
};

export default Consult;