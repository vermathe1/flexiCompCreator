import React from 'react';
import CreateElement from './create-element';

class flexiConfig extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {error:""};
		this.renderError = this.renderError.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	render(){
		return(
			<form onSubmit={e=>this.handleFormSubmit(e)}>
				<table>
					<tbody>
						{
							this.props.config.map((item,index)=>{
								return <CreateElement item={item} key={index}/>
							})
						}
						<tr><td><button type ="submit">Submit</button></td></tr>
					</tbody>
				</table>
				{this.renderError()}
			</form>
		)	
	}

	renderError(){
		if(!!this.state.error){
			alert(this.state.error);
		}
	}

	 handleFormSubmit(e){
		e.preventDefault();
		const form  = e.target;
		var elems =[];
		const data = new FormData(form);
		for (let name of data.keys()) {
			elems.push({name : form.elements[name].name, value:form.elements[name].value});
			if(form.elements[name].value === ""){
				this.setState({error:form.elements[name].name + " cannot be left blank"})
				return;
			}
		}
		const jsonData = this.formToJson(elems);
		this.props.onSubmit(JSON.stringify(jsonData));
		for (let name of data.keys()) {
			form.elements[name].value = "";
		}
	}

	 formToJson(data){
		const res = data.reduce((acc,data)=>{
		acc[data.name] = data.value;
		return acc;
		},{})
		return res;
	}
	
}
export default flexiConfig;