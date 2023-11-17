import SideBar from "../reactjs/sidebarPresenter.jsx";
import Summary from "./summaryPresenter.jsx";
import Search from "../reactjs/searchPresenter.jsx";
import Details from "../reactjs/detailsPresenter.jsx";
import {  createHashRouter,  RouterProvider, useParams} from "react-router-dom";
import { observer } from "mobx-react-lite";

import "/src/style.css"

function makeRouter(model) {

    return createHashRouter([
        {
            path: "/",
            element: <Search model={model}/>,
        },
        {
            path: "/search",
            element: <Search model={model}/>,
        },
        {
            path: "/summary",
            element: <Summary model={model}/>,
        },
        {
            path: "/details",
            element: <Details model={model}/>,
        },
        
    ])
}

export default
observer(

    function ReactRoot(props){
        //useEffect(() => {
            // Do initial search
        //    props.model.doSearch({});
        //}, []); // The empty dependency array ensures that this effect runs only once after the initial render
       
        return props.model.ready ? 
                <div className="flexParent">
                    <div className="sidebar"><SideBar model={props.model}/></div>
                    <RouterProvider router={makeRouter(props.model)}>
                        <div className="mainContent">
                            <Search model={props.model}/>
                            <Details model={props.model}/>
                            <Summary model={props.model}/>
                        </div>
                    </RouterProvider>
                </div> 
                : 
                <img src="https://brfenergi.se/iprog/loading.gif"/>;
    },
)
