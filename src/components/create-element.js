import React from 'react';
import CreateInputText from './create-input';
import DropDown from './dropdown';

const createElement = (props)=>{
	switch(props.item.type){
		case "TextField":{
			return <CreateInputText item={props.item}/>
		}
		case "DropDown":{
			return <DropDown item={props.item}/>
		}
		default :{
			return;
		}
	}
}

export default createElement;