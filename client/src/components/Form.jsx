import React, { useState } from 'react'
import './Form.css'
import { FFormfield } from './index'
const Form = () => {
  const [form, setForm] = useState({
    fname: '',
    lname: '',
  })
  const handleChange = () => {
    console.log('')
  }
  return (
    <form className="form">
      <FFormfield
        labelName="First Name"
        type="Text"
        name="Fname"
        placeholder="John"
        value={form.fname}
      />
      <FFormfield
        labelName="Last Name"
        type="Text"
        name="Fname"
        placeholder="Doe"
        value={form.lname}
      />
      <FFormfield
        labelName="First Name"
        type="Text"
        name="Fname"
        placeholder="John Doe"
        value={form.name}
        handleChange={handleChange}
      />
    </form>
  )
}

export default Form
