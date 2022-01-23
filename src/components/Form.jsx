import '../styles/common.css';
import '../styles/form.css';

const Form = () => {
  return (
    <section>
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
    </section>
  )
};

export default Form;