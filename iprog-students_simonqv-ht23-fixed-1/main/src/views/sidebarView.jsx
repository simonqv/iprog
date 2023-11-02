import {compareIngredientsCB, sortIngredients, sortDishes, shoppingList, menuPrice, isKnownTypeCB, dishType} from "/src/utilities.js";
import "/src/style.css"


function SidebarView(props) {
    return (
        <div class="debug">
            <button disabled={props.number === 1} title="decrease">{"-"}</button>
            {props.number}
            <button title="increase">{"+"}</button>
            <table>
                <tbody>
                    {
                        sortDishes(props.dishes).map(dishRowCB)
                    }                        
                    <tr>
                        <td></td>
                        <td>Total:</td>
                        <td></td>
                        <td style={{textAlign: 'right'}}>{(menuPrice(props.dishes) * props.number).toFixed(2)}</td>
                    </tr>  
                </tbody>
            </table>
        </div>
    );

    function dishRowCB(dish){
        return  <tr key={dish.id}>
                    <td><button title="remove">X</button></td>
                    <td><a href="#">{dish.title}</a></td>
                    <td>{dishType(dish)}</td>
                    <td style={{ textAlign: 'right' }}>{(dish.pricePerServing * props.number).toFixed(2)}</td>
                </tr>;  
            
                
    }
}

export default SidebarView;