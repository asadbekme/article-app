const Input = ({ type = "text", label, state, setState }) => {
  return (
    <div className="form-floating mt-2">
      <input
        type={type}
        className="form-control"
        value={state}
        onChange={(e) => setState(e.target.value)}
        id="floatingInput"
        placeholder={label}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
};

export default Input;
