import SideBar from "../reactjs/sidebarPresenter.jsx";
import Summary from "./summaryPresenter.jsx";
import Search from "../reactjs/searchPresenter.jsx";
import Details from "../reactjs/detailsPresenter.jsx";
import { useEffect } from "react";

export default
// observer(     will be added in week 3
function ReactRoot(props){
    //useEffect(() => {
        // Do initial search
    //    props.model.doSearch({});
    //}, []); // The empty dependency array ensures that this effect runs only once after the initial render
      
    return (<div>
                <div><SideBar model={props.model}/></div>
                <div>
                    <Search model={props.model}/>
                    <Details model={props.model}/>
                    <Summary model={props.model}/>
                </div>
            </div>
           );
}
// )
