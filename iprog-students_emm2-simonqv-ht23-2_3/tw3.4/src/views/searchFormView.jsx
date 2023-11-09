
function SearchFormView(props) {
    // const searchValues = {
    //     query: props.text ? props.text : "",
    //     dishType: props.type ? props.type : "",
    //     setQuery(str) {
    //         if (str){
    //             this.query = str
    //         }
    //     },
    //     setDish(dish) {
    //         if (dish) {
    //             this.dishType = dish
    //         }
    //     }
    // }
    

    return (
        <div>
            <input onChange={searchTextACB} defaultValue={props.text ? props.text : ""} ></input>
            <select onChange={searchTypeACB} defaultValue={props.type ? props.type : ""}>
                <option value="">Choose:</option>
                {props.dishTypeOptions.map(dishCB)}
            </select>
            <button onClick={searchACB}>Search!</button>
        </div>
    )

    function searchTextACB(evt) {
        // searchValues.setQuery(evt.target.value)
        // console.log(searchValues.query)
        //console.log(props.text)
        props.onSearchTextACB(evt.target.value)
    }

    function searchTypeACB(evt) {
        // searchValues.setDish(evt.target.value)
        // console.log(searchValues.dishType)
        props.onTypeChangeACB(evt.target.value)
    }

    function searchACB(evt) {
        // console.log("search vals" , searchValues.dishType, searchValues.query)
        props.onClickSearchACB()
    }

    // For rendering the dish types
    function dishCB(dishType) {
        return <option key={dishType} value={dishType}>{dishType}</option>
        
    }
}

export default SearchFormView