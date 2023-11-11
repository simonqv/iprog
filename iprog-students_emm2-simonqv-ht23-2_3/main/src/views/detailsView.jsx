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
        <div className="title">{props.dishData.title}</div>
        <div className="rowC">
            <img src={props.dishData.image} height="100"></img>
            <p style={{margin: "25px 10px"}}>
                Price: {  props.dishData.pricePerServing}
                <br/>
                for {props.guests} guests: {(props.dishData.pricePerServing * props.guests).toFixed(2)}
            </p>
        </div>
        <table style={{margin: "10px 0 0 0", border: "2px solid"}}>
            <tbody>
                {props.dishData.extendedIngredients.map(ingredientsCB)}
            </tbody>
        </table>
        {console.log(props.dishData)}
        {console.log(props)}
        <p style={{margin: "10px 0"}}>{props.dishData.instructions}</p>
        <a href={props.dishData.sourceUrl} target="_blank" >More information</a>
        <br/>
        <button disabled={props.isDishInMenu} onClick={addToMenuACB} style={{margin: "10px 15px 0px 0px"}}>Add to menu!</button>
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

   function addToMenuACB(dish) {
        props.addToMenu(dish)
   }
}

export default DetailsView