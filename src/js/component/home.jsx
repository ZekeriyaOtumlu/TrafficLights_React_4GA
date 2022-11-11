import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ color, setColor] = useState("red");
	if(color=="red"){
		return (
			<div className="container">
				<div className="red circle selected" onClick={()=> setColor("")}></div>
				<div className="yellow circle" onClick={()=> setColor("yellow")}></div>
				<div className="green circle" onClick={()=> setColor("green")}></div>
				
			</div>
		);
	} if(color=="green"){
		return (
			<div className="container">
				<div className="red circle " onClick={()=> setColor("red")}></div>
				<div className="yellow circle" onClick={()=> setColor("yellow")}></div>
				<div className="green circle selected" onClick={()=> setColor("")}></div>
				
			</div>
		);
	} if(color=="yellow"){
		return (
			<div className="container">
				<div className="red circle " onClick={()=> setColor("red")}></div>
				<div className="yellow circle selected" onClick={()=> setColor("")}></div>
				<div className="green circle" onClick={()=> setColor("green")}></div>
				
			</div>
		);

	} if(color!=""){
		return(
			<h1>Invalid Traffic Light</h1>
		)
	}
	//Invalid color we have it. Once no color selected then clicked on the red color we will get issue.
	return (
		<div className="container">
			<div className="red circle" onClick={()=> setColor("black")}></div>
			<div className="yellow circle" onClick={()=> setColor("yellow")}></div>
			<div className="green circle" onClick={()=> setColor("green")}></div>
			
		</div>
	);
};

export default Home;
