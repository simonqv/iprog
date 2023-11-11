import SearchFormView from "../views/searchFormView"
import SearchResultView from "../views/SearchResultsView"

export default

function Search(props) {

    return <div>
        <SearchFormView text={props.model.searchParams.query} type={props.model.searchParams.type}  dishTypeOptions={["starter", "main course", "dessert"]} onSearchTextACB={searchQueryACB} onTypeChangeACB={searchTypeACB} onClickSearchACB={searchACB}/>  
        
        {shouldRenderSearchResults(props.model.searchResultsPromiseState)}

        </div>
    
    function shouldRenderSearchResults(state) {   
        if (!state.promise) {
            return "No data"
        }

        if (!state.data && !state.error) {
            return <img src="https://brfenergi.se/iprog/loading.gif"></img>
        }

        if (state.error) {
            return state.error
        }

        return <SearchResultView searchResults={state.data} onDishSelect={dishSelectACB}/>
        
    }
    
    function searchQueryACB(query) {
        props.model.setSearchQuery(query)
    }
    
    function searchTypeACB(type) {
        props.model.setSearchType(type)
    }

    function searchACB() {
        props.model.doSearch(props.model.searchParams)
    }
    
    function dishSelectACB(dish) {
        props.model.setCurrentDish(dish.id)
    }
}