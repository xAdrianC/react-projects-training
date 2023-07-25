import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const ElementExperience = ({data, editElement, removeElement, editFlag}) => {

  const [isEditing, setIsEditing] = useState(false);

  const handleClickDelete = () => {
    removeElement(parseInt(data.id));
  }

  const handleClickEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(!isEditing)
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    editElement(parseInt(data.id), { ...data, [name]: value });
  };

  return (
    <div>
      {isEditing ?
        <form onSubmit={handleSubmit} className="container">
          <div className="card text-center" >
            <div className="card-body">
              <input
                type="text"
                name="title"
                className="form-control"
                value={data.title}
                onChange={handleChange}
              />
              <input
                type="text"
                name="period"
                className="form-control"
                value={data.period}
                onChange={handleChange}
              />
              <input
                type="text"
                name="description"
                className="form-control"
                value={data.description}
                onChange={handleChange}
              />
              {editFlag ?
                <div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                : null
              }
            </div>
          </div>
        </form>
        :
        <div className="card text-center" >
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.period}</p>
            <p className="card-text">{data.description}</p>
            {editFlag ?
              <div>
                <button className="btn btn-primary" onClick={handleClickEdit} >
                  <FontAwesomeIcon icon="fa-solid fa-pencil" />
                </button>
                <button className="btn btn-danger" onClick={handleClickDelete} >
                  <FontAwesomeIcon icon="fa-solid fa-trash" />
                </button>
              </div>
              : null
            }
          </div>
        </div>
      }
    </div>
  )
}