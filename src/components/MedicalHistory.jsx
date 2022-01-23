const MedicalHistory = props => {
  const { visits, infoText } = props;

  return (
    <section>
      <h2>{infoText}</h2>
      {
        visits.map((visit, i) => (
          <details key={i}>
            <summary>{visit.date}</summary>
            <p>{visit.resume}</p>
          </details>
        ))
      }
    </section>
  )
};

export default MedicalHistory;