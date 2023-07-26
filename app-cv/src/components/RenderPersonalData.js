const RenderPersonalData = ({ data, toggleFormEditing, editFlag }) => {
  const { name, surname, email } = data;
  return (
    <div className="card text-center">
      <div className="card-header">
        Personal data
      </div>
      <div className="card-container">
        <div className="card-body">
          <h5 className="card-title">
            Name: {name} {surname}
          </h5>
          <h5 className="card-title">
            Email: {email}
          </h5>
          <p className="card-text">
            Short Bio: {data.shortBio}
          </p>
        </div>
      </div>
      {editFlag ? 
        <div className="card-footer text-muted">
          <button href="#" className="btn btn-primary" onClick={toggleFormEditing}
          >Editar</button>
        </div>
        : null
      }
    </div>
  )
}

export default RenderPersonalData;