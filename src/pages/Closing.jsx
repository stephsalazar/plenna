import '../styles/closing.css';

const Closing = props => {
  const name = props.name;
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  return (
    <section>
      <div className="resume">
        <h2>Resumen de Consulta</h2>
        <p>Nombre:</p>
        <span> {name} </span>
        <p>Padecimientos:</p>
        <span> {lorem} </span>
        <p>Exploración Física:</p>
        <span> {lorem} </span>
        <p>Diagnóstico:</p>
        <span> {lorem} </span>
        <p>Receta y tratamiento:</p>
        <span> {lorem} </span>
        <p>Notas para la paciente:</p>
        <span> {lorem} </span>
      </div>
      
      <div className="extras">
        <details>
          <summary>Tipo de consulta</summary>
          <p>
            <select name='consult' id='consult'>
              <option value='basica'>Básica</option> 
              <option value='plenna'>Plenna</option> 
              <option value='plus'>Plus</option> 
              {/* <option value=''></option>  */}
            </select>
          </p>
        </details>

        <details>
          <summary>Requiere estudios médicos</summary>
          <p>
          <select name='laboratory' id='laboratory'>
            <option value='no'>No</option> 
            <option value='si'>Si</option> 
          </select>
          </p>
        </details>

        <details>
          <summary>Servicios</summary>
          <p>
            <label><input type="Checkbox" name="" value=""/>Colocación DIU</label>
            <label><input type="Checkbox" name="" value="" />Colocación SIU</label>
            <label><input type="Checkbox" name="" value="" />Colocación Implante Subdérmico</label>
            <label><input type="Checkbox" name="" value=""/>Retiro DIU</label>
            <label><input type="Checkbox" name="" value=""/>Retiro SIU</label>
            <label><input type="Checkbox" name="" value="" />Retiro Implante Subdérmico</label>
          </p>
        </details>

        <details>
          <summary>Productos</summary>
          <p>
            <label><input type="Checkbox" name="" value=""/>Copa Menstrual</label>
            <label><input type="Checkbox" name="" value="" />Lubricante Vaginal</label>
            <label><input type="Checkbox" name="" value="" />Parche anticonceptivo</label>
            <label><input type="Checkbox" name="" value="" />Anillo Vibrador</label>
          </p>
        </details>

        <button className='button'>Finalizar</button>
      </div>
    </section>
  )
};

export default Closing;