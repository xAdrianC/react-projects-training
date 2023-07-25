import React, { useState } from 'react';
import { ElementExperience } from './ElementExpirience';

export const RenderBlockExperience = ({editFlag, title}) => {


  const [elements, setElements] = useState([]);

  const removeElement = (id) => {
    setElements(elements.filter(element => element.id !== id));
  }

  const editElement = (id, data) => {
    setElements(elements.map(element => element.id === id ? data : element));
  }

  const addElement = () => {
    setElements(
      [
        ...elements,
        { 
          id: elements.length,
          title: 'Title',
          period: 'Period',
          description: 'Description' 
        }
      ]);
  }

  return (
    <div>
      <hr />
      <div className="text-center">
        <h2>
          {title}
        </h2>
        {editFlag ? 
          <button className='btn btn-primary' onClick={addElement}>Add new element</button> 
          : null
        }
        
      </div>
      <hr />
      {elements.map((element, index) => {
        return <ElementExperience key={element.id} data={element} removeElement={removeElement} editElement={editElement} editFlag={editFlag} />
      }
      )}
    </div>
  )
}