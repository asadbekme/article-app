import { useState } from "react"

const Input = ({ type ='text', label, state, setState }) => {

  return (
    <div className="form-floating mt-2">
      <input 
        type={type} 
        className="form-control" 
        value={state}
        id="floatingInput"
        placeholder={label} 
        onChange={(e) => setState(e.target.value)}
      />
      <label for="floatingInput">{label}</label>
    </div>
  )
}

export default Input