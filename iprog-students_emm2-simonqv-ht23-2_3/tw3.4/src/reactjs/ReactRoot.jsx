import SideBar from "../reactjs/sidebarPresenter.jsx";
import Summary from "./summaryPresenter.jsx";

export default
// observer(     will be added in week 3
function ReactRoot(props){
    return (<div>
                <div><SideBar model={props.model}/></div>
                <div><Summary model={props.model}/></div>
            </div>
           );
}
// )
