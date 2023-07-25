import React, { useState } from 'react';
import RenderPersonalData from './RenderPersonalData';
import FormPersonalData from './FormPersonalData';
import Navbar from './Navbar';
import { RenderBlockExperience } from './RenderBlockExperience';

export const Cv = () => {
  const INTIAL_DATA = {
    name: 'Name',
    surname: 'surname',
    email: 'email@email.com',
    shortBio: 'shortBio',
  }

  const [formData, setData] = useState(INTIAL_DATA);
  const [isEditing, setIsEditing] = useState(false);
  const [isFormEditing, setIsFormEditing] = useState(false);

  const handleData = (data) => {
    setData(data);
  }

  const readMode = () => {
    setIsEditing(false);
    setIsFormEditing(false);
  }

  const toggleFormEditing = () => {
    setIsFormEditing(!isFormEditing);
  }

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  }

  const navbarProps = {
    editFlag: isEditing,
    toggleEditing,
    readMode
  }

  const formPersonalDataProps = {
    data: formData,
    handleData,
    toggleFormEditing,
    editFlag: isEditing
  }

  const renderPersonalDataProps = {
    data: formData,
    toggleFormEditing,
    editFlag: isEditing
  }

  return (
    <div className="app-cv">
      <Navbar {...navbarProps} />
      {isFormEditing ? null : <RenderPersonalData {...renderPersonalDataProps} />}
      {isFormEditing ? <FormPersonalData {...formPersonalDataProps} /> : null}
      <RenderBlockExperience editFlag={isEditing} title={"Academic"}/>
      <RenderBlockExperience editFlag={isEditing} title={"Laboral"}/>
      <RenderBlockExperience editFlag={isEditing} title={"Certificates"}/>
      <RenderBlockExperience editFlag={isEditing} title={"Other"}/>
    </div>
  )
}

export default Cv;