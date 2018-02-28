import React from 'react';

const DropDown = (props)=>{
	return(
		<tr>
			<td>
				<label htmlFor={props.item.name}>{props.item.label} </label>
			</td>
			<td>
				:
			</td>
			<td>
				<select name={props.item.name}>
					<option value="" >Select</option>
					{props.item.values.map((value,index)=>{
						return <option value={value} key={index}>{value}</option>
					})}
				</select>
			</td>
		</tr>
	)
}

export default DropDown;