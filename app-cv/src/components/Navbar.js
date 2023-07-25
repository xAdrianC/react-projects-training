import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Navbar = ({editFlag, toggleEditing, readMode}) => {

  const [visible, setVisible] = useState(true);

  const handleEditing = () => {
    if (editFlag) {
      readMode();
    } else {
      toggleEditing();
    }
  }

  const manageHideNavbar = (state) => {
    setVisible(state)
  }

  const handlePrint = () => {
    manageHideNavbar(false)
    readMode();
    // TODO: no estoy orgulloso de esto, investigar como hacer un callback
    setTimeout(() => {
      window.print();
      manageHideNavbar(true)
    }, 1000);    
  }

  return (
    <nav className={visible ? "navbar navbar-dark bg-primary px-2" : "hide"} >
      <h1 className="navbar-brand">
        AdrianC CV Generator
      </h1>
      <div>
        <button className={"btn btn-danger m-2 my-sm-0 mr-1"} onClick={handleEditing}>
          {editFlag ? 'Read mode' : 'Edit mode'}
        </button>
        <button className='btn btn-info m-2 my-sm-0 ' onClick={handlePrint}>
          <FontAwesomeIcon icon="print" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar;