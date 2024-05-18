import React from "react";
import Item from "../../components/Item/Item";



function Others(){
    return(<>
    <div className="row">

    <Item size={"col-md-4"}/>
    <Item size={"col-md-4"}/>
    <Item size={"col-md-4"}/>
    <Item size={"col-md-4"}/>
    <Item size={"col-md-4"}/>
    <Item size={"col-md-4"}/>



        </div>
    </>)
}


export default React.memo(Others);