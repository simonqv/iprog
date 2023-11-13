import SideBar from "../reactjs/sidebarPresenter.jsx";
import Summary from "./summaryPresenter.jsx";
import Search from "../reactjs/searchPresenter.jsx";
import Details from "../reactjs/detailsPresenter.jsx";
import "/src/style.css"

export default
// observer(     will be added in week 3
function ReactRoot(props){
    //useEffect(() => {
        // Do initial search
    //    props.model.doSearch({});
    //}, []); // The empty dependency array ensures that this effect runs only once after the initial render
    console.log("HEJ EMM")
    return (<div className="flexParent">
                <div className="sidebar"><SideBar model={props.model}/></div>
                <div className="mainContent">
                    <Search model={props.model}/>
                    <Details model={props.model}/>
                    <Summary model={props.model}/>
                </div>
            </div>
           );
}
// )
