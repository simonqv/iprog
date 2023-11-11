import DetailsView from "../views/detailsView";
import resolvePromise from "../resolvePromise";
import { observer } from "mobx-react-lite";

export default
observer (
    function Details(props) {
        const dish = props.model.currentDishPromiseState.data
        if (!props.model.currentDishPromiseState.promise) {
            return "No data"
        }
        
        if (!dish && !props.model.currentDishPromiseState.error) {
            return <img src="https://brfenergi.se/iprog/loading.gif"></img>
        }
        
        if (props.model.currentDishPromiseState.error) {
            return props.model.currentDishPromiseState.error
        }
        
        const dishInMenu = !!props.model.dishes.find(findDishCB)
        
        return <DetailsView dishData={dish} guests={props.model.numberOfGuests} isDishInMenu={dishInMenu} addToMenu={addToMenuACB}/>       

        
        function findDishCB(dish) {
            return props.model.currentDish === dish.id
        }
        
        function addToMenuACB() {
            props.model.addToMenu(dish);
        }
    }
)   