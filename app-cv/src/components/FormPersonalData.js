
export const FormPersonalData = ({ data, handleData, toggleFormEditing, editFlag }) => {

  const handleChange = (event) => {
    const { name, value } = event.target;
    handleData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleData(data);
    toggleFormEditing();
  };

  return (
    <div>
      <h2 className="text-center">Personal data</h2>
      <form onSubmit={handleSubmit} className="container">
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Name:</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="name"
              className="form-control"
              value={data.name}
              onChange={handleChange}
              />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Surname:</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="surname"
              className="form-control"
              value={data.surname}
              onChange={handleChange}
              />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Email:</label>
          <div className="col-sm-10">
            <input
              type="email"
              name="email"
              className="form-control"
              value={data.email}
              onChange={handleChange}
              />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Short bio:</label>
          <div className="col-sm-10">
            <textarea
              name="shortBio"
              className="form-control"
              value={data.shortBio}
              onChange={handleChange}
              />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormPersonalData;