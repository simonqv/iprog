import SidebarView from "../views/sidebarView.jsx";
import { observer } from "mobx-react-lite";

export default
observer(
    function Sidebar(props){
        function changeNumberACB(evt) {props.model.setNumberOfGuests(evt);}
        function dishInterestACB(evt) {props.model.setCurrentDish(evt.id)}
        function removeDishACB(evt) {props.model.removeFromMenu(evt)}

        return <SidebarView onNumberChange={changeNumberACB} onDishInterest={dishInterestACB} onDishRemoval={removeDishACB} number={props.model.numberOfGuests} dishes={props.model.dishes} />;
    }
);