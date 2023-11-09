/*  
dishData={dish1}
    isDishInMenu={true}
    guests={7}
    FIXMEcustomEvent={addToMenuACB}
*/

import "/src/style.css"
import { menuPrice } from "/src/utilities.js";

function DetailsView(props) {
   return (
    <div>
        <div>{props.dishData.title}</div>
        <div className="rowC">
            <img src={props.dishData.image} height="100"></img>
            <p>
                Price: {  props.dishData.pricePerServing}
                <br/>
                for {props.guests} guests: {(props.dishData.pricePerServing * props.guests).toFixed(2)}
            </p>
        </div>
        <table>
            <tbody>
                {props.dishData.extendedIngredients.map(ingredientsCB)}
            </tbody>
        </table>
        {console.log(props.dishData)}
        {props.dishData.instructions}
        <a href={props.dishData.sourceUrl} target="_blank">More information</a>
        <button>Add to menu!</button>
        <button>Cancel</button>
    </div>
   )

   function ingredientsCB(ingredient) {
        // console.log(ingredient)
        return (
            <tr key={ingredient.id}>
                <td>{ingredient.name}:</td>
                <td>{ingredient.amount}</td>
                <td>{ingredient.unit}</td>
            </tr>
        )
   }

   function priceCB() {
        return (
            <div>
                <div></div>
                <div></div>
            </div>
        )
   }
}

export default DetailsView