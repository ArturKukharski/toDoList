import React, { useState } from 'react';

import DelTask from './DelTask'

const Task = props => {

    return (
        <li key={props.id} className={props.status ? 'checked' : ''} onClick={props.click(props)}>{props.name} <DelTask id={props.id} /></li>
    )
}


export default Task