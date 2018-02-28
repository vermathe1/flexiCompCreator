import React from 'react';

const CreateInputText = (props)=>{
	return(
		<tr>
			<td>
				<label htmlFor={props.item.name}>{props.item.label}</label>
			</td>
			<td>
				:
			</td>
			<td>
				<input name={props.item.name} type="text"/>
			</td>
		</tr>
	);
}

export default CreateInputText;