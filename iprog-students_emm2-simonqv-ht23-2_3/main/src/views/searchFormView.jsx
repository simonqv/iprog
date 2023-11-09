
import  { useState } from 'react';

function SearchFormView(props) {
    
    const [formValues, setFormValues] = useState({
        query: props.text ? props.text : "",
        dishType: props.type ? props.type : "",
    });


    return (
        <div>
            <input onInput={inputACB} type="text" value={formValues.query} ></input>
            <select onInput={selectACB} value={formValues.dishType}>
                <option>Choose:</option>
                {props.dishTypeOptions.map(dishCB)}
            </select>
            <button onClick={searchACB}>Search!</button>
        </div>
    )

    function inputACB(evt) {
        setFormValues({...formValues,
            query: evt.target.value})
    }

    function searchACB(evt) {
        return formValues
    }

    function selectACB(evt) {
        setFormValues({...formValues,
            dishType: evt.target.value})
    }

    function dishCB(dishType) {
        return <option key={dishType}>{dishType}</option>
    }
}

export default SearchFormView