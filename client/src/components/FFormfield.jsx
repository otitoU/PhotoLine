import React from 'react'
import './FFormField.scss'
const FFormfield = ({ labelName, type, name, placeholder, value }) => {
  return (
    <div className="formfield">
      <label htmlFor={name} className="">
        {labelName}
      </label>

      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        required
        className=""
      />
    </div>
  )
}

export default FFormfield
