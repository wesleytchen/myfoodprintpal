import React, { useState } from "react";
import Select from 'react-select'

function Form(props) {
    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.addItem(name);
    }

    function handleChange(e) {
        setName(e.value);
    }

    const options = [
        {value: "grapefruit", label: "Grapefruit"},
        {value: "lime", label: "Lime"},
        {value: "coconut", label: "Coconut"},
        {value: "mango", label: "Mango"}
    ]
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                What did you eat?
                </label>
            </h2>
            <div class="d-grid gap-2 col-6 mx-auto">
                <Select options={options} 
                    onChange={handleChange}/>
                <button type="submit" className="btn btn-primary btn-lg">
                    Add
                </button>
            </div>
        </form>
    );
}

export default Form;
