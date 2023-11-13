
function SearchFormView(props) {

    return (
        <div>
            <input onChange={searchTextACB} value={props.text ? props.text : ""} ></input>
            <select onChange={searchTypeACB} value={props.type ? props.type : ""}>
                <option value="">Choose:</option>
                {props.dishTypeOptions.map(dishCB)}
            </select>
            <button onClick={searchACB}>Search!</button>
            <button  style={{float: "right"}} onClick={summaryACB}>Summary</button>
        </div>
    )


    function searchTextACB(evt) {
        props.onSearchTextACB(evt.target.value)
    }

    function searchTypeACB(evt) {
        props.onTypeChangeACB(evt.target.value)
    }

    function searchACB(evt) {
        props.onClickSearchACB()
    }

    function summaryACB(evt) {
        window.location.hash="#/summary"
    }

    // For rendering the dish types
    function dishCB(dishType) {
        return <option key={dishType} value={dishType}>{dishType}</option>
        
    }
}

export default SearchFormView