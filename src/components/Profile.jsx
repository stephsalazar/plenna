import patientImage from '../assets/images/patient.jpeg';
import '../styles/common.css';

const Profile = props => {
  const {
    name,
    age,
    weight,
    height,
    allergies,
  } = props.data;

  return (
    <section className='profile'>
      <img src={patientImage} alt='patient' width={'80%'}/>
      <p>Nombre: {name}</p>
      <p>Edad: {age}</p>
      <p>Peso: {weight}</p>
      <p>Estatura: {height}</p>
      <p>Alergias: {allergies}</p>
    </section>
  )
};

export default Profile;