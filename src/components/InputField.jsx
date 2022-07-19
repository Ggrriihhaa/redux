const InputField =({text, handleInput, handlSubmit}) => {
return (
    <label>
    <input value={text} onChange={(e) => handleInput(e.target.value)} />
    <button onClick={handlSubmit}>Add Todo</button>
  </label>
)
}

export default InputField