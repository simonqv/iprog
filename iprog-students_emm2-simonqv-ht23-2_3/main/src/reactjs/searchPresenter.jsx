import SearchFormView from "../views/searchFormView"
import SearchResultView from "../views/SearchResultsView"
import { observer } from "mobx-react-lite"
import { useState, useEffect } from "react"

export default
observer(
    function Search(props) {

        // const [searchParams, setSearchParams] = useState({
        // });
        
        // useEffect(() => {
        //     props.model.doSearch(searchParams)
        // }, [searchParams, props.model])

        // Pass searchParams.query and searchParams.type as text and type
        // properites for stateful search

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
            //setSearchParams((prevParams) => ({...prevParams, query}))
            props.model.setSearchQuery(query)
        }
        
        function searchTypeACB(type) {
            //setSearchParams((prevParams) => ({...prevParams, type}))
            props.model.setSearchType(type)
        }

        function searchACB() {
            //props.model.doSearch(searchParams)
            props.model.doSearch(props.model.searchParams)
        }
        
        function dishSelectACB(dish) {
            props.model.setCurrentDish(dish.id)
        }
    }
)