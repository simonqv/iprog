import SideBarView from "../views/sidebarView";

export default
function SideBar(props) {
    return <SideBarView number={props.model.numberOfGuests} dishes={props.model.dishes}
            onNumberChange={numberChangeACB} onDishClick={dishClickedACB} onXClick={xClickedACB}/>;

        function numberChangeACB(nbr) {
            props.model.setNumberOfGuests(nbr);
        }

        function dishClickedACB(dish) {
            props.model.setCurrentDish(dish.id);
        }
    
        function xClickedACB(dish) {
            props.model.removeFromMenu(dish);
        }
}