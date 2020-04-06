import React, { useState } from 'react';

import DelTask from './DelTask'

const Task = props => {

    return (
        <li key={props.id} className={props.isChecked ? 'checked' : ''}> <span onClick={props.onClick(props)}>{props.name}</span>  <DelTask id={props.id} /></li>
    )
}


export default Task