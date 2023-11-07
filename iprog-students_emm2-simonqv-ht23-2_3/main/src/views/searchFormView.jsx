
function SearchFormView(props) {
    const searchValues = {
        query: "",
        dishType: "",
        setQuery(str) {
            if (str){
                this.query = str
            }
        },
        setDish(dish) {
            if (dish) {
                this.dishType = dish
            }
        }
    }

    return (
        <div>
            <input onInput={inputACB} type="text" value={searchValues[query]}></input>
            <select onInput={selectACB} value={searchValues[dishType]}>
                <option>Choose:</option>
                {props.dishTypeOptions.map(dishCB)}
            </select>
            <button onClick={searchACB}>Search!</button>
        </div>
    )

    function inputACB(evt) {
        console.log(evt)
    }

    function searchACB(evt) {
        console.log(evt)
    }

    function selectACB(evt) {
        return evt.target.value
    }

    function dishCB(dishType) {
        return <option key={dishType}>{dishType}</option>
        
    }
}

export default SearchFormView