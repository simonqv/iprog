import {sortIngredients} from "/src/utilities.js";
import "/src/style.css"

/* Functional JSX component. Name must start with capital letter */
function SummaryView(props){
    return (
            <div className="summary">
              Summary for <span title="nr guests">{props.people}</span> persons:
              <button style={{float: "right"}} onClick={backToSearchACB}>Back to Search</button>
              
              <table>
                  {  //  <---- in JSX/HTML, with this curly brace, we go back to JavaScript, and make a comment

                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Aisle</th>
                    <th>Quantity</th>
                    <th>unit</th>
                  </tr>
                </thead>

                }
                
                <tbody>
                  {  //  <---- in JSX/HTML, with this curly brace, we go back to JavaScript expressions
                      sortIngredients(props.ingredients).map(ingredientTableRowCB)
                  }
                </tbody>
              </table>
            </div>
    );
    /* for TW1.5 
      Note also that the callback can be defined after it is used! 
      This JS feature is called "function hoisting".
    */
    function ingredientTableRowCB(ingr){
        return <tr key={ingr.id} >
                 <td>{ingr.name}</td>
                 <td>{ingr.aisle}</td>
                 <td className="right-align">{(ingr.amount*props.people).toFixed(2)/* multiply by number of people! Display with 2 decimals, use a CSS classs to align right */}</td>
                 <td>{ingr.unit}</td>
               </tr>;
    }
    
    function backToSearchACB() {
      window.location.hash = "#/search"
    }
}

export default SummaryView;
