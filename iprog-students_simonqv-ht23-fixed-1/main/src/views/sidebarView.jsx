import {compareIngredientsCB, sortIngredients, sortDishes, shoppingList, menuPrice, isKnownTypeCB, dishType} from "/src/utilities.js";
import "/src/style.css"



function SidebarView(props) {
    
    function minusClickedACB(evt) {props.onNumberChange(props.number-1);}
    function plusClickedACB(evt) {props.onNumberChange(props.number+1);}

    return (
        <div className="debug">
            <button onClick={minusClickedACB} disabled={props.number === 1} title="decrease">{"-"}</button>
            {props.number}
            <button onClick={plusClickedACB} title="increase">{"+"}</button>
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
        
        function hrefClickedACB(evt) {props.onDishInterest(dish);}
        function xClickedACB(evt) {props.onDishRemoval(dish);}

        return  <tr key={dish.id}>
                    <td><button onClick={xClickedACB} title="remove">X</button></td>
                    <td><a href="#" onClick={hrefClickedACB}>{dish.title}</a></td>
                    <td>{dishType(dish)}</td>
                    <td style={{ textAlign: 'right' }}>{(dish.pricePerServing * props.number).toFixed(2)}</td>
                </tr>;  
            
                
    }
}


export default SidebarView;