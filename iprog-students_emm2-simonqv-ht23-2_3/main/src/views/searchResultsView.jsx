
import "/src/style.css"

function SearchResultView(props) {
    return (
        <div className="search-result">
            {props.searchResults.map(renderSearchResCB)}
        </div>
    )
    
    function renderSearchResCB(dish) {
        return (
            <span key={dish.id} className="search-result-object" onClick={dishClickACB}>
                <img src={dish.image} height="100" onClick={dishClickACB} />
                <div onClick={dishClickACB}>{dish.title}</div>
            </span>
        )
        function dishClickACB() {
            console.log(dish)
            props.onDishSelect(dish)
        } 
    }

}


export default SearchResultView