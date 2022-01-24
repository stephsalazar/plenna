import { saveData } from '../utils/firebase/firestore';
import dateFormat from '../utils/date';
import '../styles/common.css';
import '../styles/form.css';

const Form = () => {

  const postData = async e => {
    e.preventDefault();
    
    const {
      conditions,
      physicaExamination,
      diagnostic,
      prescriptionAndTreatment,
      PatientNotes
    } = e.target.elements;

    const data = {
      resume: {
        conditions: conditions.value,
        physicaExamination: physicaExamination.value,
        diagnostic: diagnostic.value,
        prescriptionAndTreatment: prescriptionAndTreatment.value,
        PatientNotes: PatientNotes.value,
      },
      date: dateFormat,
    }

    try {   
      saveData(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  
  return (
    <form onSubmit={postData}>
      <h2>Formulario de consulta</h2>
      <textarea
        name='conditions'
        placeholder='Padecimientos' />
      <textarea
        name='physicaExamination'
        placeholder='Exploración Física'
      />
      <textarea
        name='diagnostic'
        placeholder='Diagnóstico'
      />
      <textarea
        name='prescriptionAndTreatment'
        placeholder='Receta y tratamiento'
      />
      <textarea
        name='PatientNotes'
        placeholder='Notas para la Paciente'
      />
      <button className="button" type="submit">Guardar datos</button>
    </form>
  )
};

export default Form;