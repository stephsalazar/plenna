import { Link } from 'react-router-dom';
import '../styles/common.css';

const NotFound = () => {
  return (
    <section className='not-found'>
      <h1>Oh oh!</h1>
      <h2>Parece que has entrado a una vista que no existe</h2>
      <h2>Pero no te preocupes, presiona el boton y lo solucionaremos</h2>
      <Link to="/">
          <button className="button">Click aquí</button>
      </Link>
    </section>
  )
};

export default NotFound;