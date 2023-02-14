import React, {useState} from "react";

function ColorForm(props) {
    let [input, setInput] = useState("")
    const handleSubmit = (e) => {
        // eliminate the default behavior of submit form
        e.preventDefault()
        props.addColor(input)

        setInput("");
    }  
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={input} type="text" onChange={ (e) => setInput(e.target.value)} />
            <button type="submit">
                Submit!
            </button>
        </form>
    </div>

  )
}

export default ColorForm