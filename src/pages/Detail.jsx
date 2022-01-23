import { Link } from 'react-router-dom';
import MedicalHistory from '../components/MedicalHistory';
import Profile from '../components/Profile';
import '../styles/detail.css';
import '../styles/common.css';

const Detail = props => {
  const patient = props.patient;
   
  return (
    <section className='split-view'>
      <Profile data={patient} />
      <div className='info'>
        <MedicalHistory visits={patient.medicalHistory} infoText='Historial de Consultas:' />
        <Link to="/consult">
          <button className="button">Nueva Consulta</button>
        </Link>
        <MedicalHistory visits={patient.nextVisits} infoText='Próximas Consultas:' />
      </div>
    </section>
  )
};

export default Detail;