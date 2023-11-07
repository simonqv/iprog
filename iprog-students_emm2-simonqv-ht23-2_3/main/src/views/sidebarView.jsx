import {dishType, sortDishes, menuPrice} from "/src/utilities.js";
import "/src/style.css"

function SideBarView(props) {
    return (
        <div>
            <button onClick={() => numberChangeACB(-1)} disabled={props.number < 2}>-</button>
            {props.number}
            <button onClick={() => numberChangeACB(1)}>+</button>
            <table>
                <tbody>
                    {
                        sortDishes(props.dishes).map(dishTableRowCB)
                    }
                    <tr>
                        <td></td>
                        <td>Total:</td>
                        <td></td>
                        <td className="right-align">{(menuPrice(props.dishes)*props.number).toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

    function numberChangeACB(nbr) {
        props.onNumberChange(props.number+nbr);
    }

    function dishClickedACB(dish) {
        props.onDishClick(dish);
    }

    function xClickedACB(dish) {
        props.onXClick(dish);
    }

    function dishTableRowCB(dish) {
        return <tr key={dish.id}>
            <td><button onClick={() => xClickedACB(dish)}>X</button></td>
            <td><a href="#" onClick={() => dishClickedACB(dish)}>{dish.title}</a></td>
            <td>{dishType(dish)}</td>
            <td className="right-align">{(dish.pricePerServing*props.number).toFixed(2)}</td>

        </tr>;
    }

}

export default SideBarView;
